# MedPharm Solutions - Backend Development Blueprint

## Project Overview
This document provides a comprehensive blueprint for backend developers to implement the server-side infrastructure for the MedPharm Solutions pharmaceutical platform.

---

## Table of Contents
1. [Technology Stack](#technology-stack)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Authentication & Authorization](#authentication--authorization)
5. [Business Logic](#business-logic)
6. [Third-Party Integrations](#third-party-integrations)
7. [Security Requirements](#security-requirements)
8. [Deployment & Infrastructure](#deployment--infrastructure)

---

## Technology Stack

### Recommended Technologies
- **Runtime**: Node.js (v18+) or Python (v3.10+)
- **Framework**: Express.js / NestJS (Node) or FastAPI (Python)
- **Database**: PostgreSQL (v14+)
- **Cache**: Redis (v7+)
- **File Storage**: AWS S3 or Azure Blob Storage
- **Email Service**: SendGrid or AWS SES
- **Authentication**: JWT with refresh tokens
- **API Documentation**: OpenAPI/Swagger

---

## Database Schema

### 1. Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    phone VARCHAR(50),
    role VARCHAR(50) NOT NULL, -- 'admin', 'sales', 'customer', 'distributor'
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_role (role)
);
```

### 2. Products Table
```sql
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'cardiovascular', 'antibiotics', 'diabetes', 'oncology'
    description TEXT NOT NULL,
    dosage VARCHAR(100) NOT NULL,
    packaging VARCHAR(255) NOT NULL,
    indication TEXT NOT NULL,
    manufacturer_code VARCHAR(100) UNIQUE NOT NULL,
    price DECIMAL(10, 2),
    stock_quantity INTEGER DEFAULT 0,
    min_order_quantity INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_category (category),
    INDEX idx_manufacturer_code (manufacturer_code)
);
```

### 3. Product Certifications Table
```sql
CREATE TABLE product_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    certification_type VARCHAR(50) NOT NULL, -- 'FDA', 'WHO-GMP', 'ISO', 'EMA'
    certificate_number VARCHAR(255),
    issue_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    certificate_url VARCHAR(500),
    
    INDEX idx_product_id (product_id),
    INDEX idx_certification_type (certification_type)
);
```

### 4. Inquiries/Quotes Table
```sql
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    phone VARCHAR(50),
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'in_progress', 'resolved', 'closed'
    priority VARCHAR(20) DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
    assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_status (status),
    INDEX idx_user_id (user_id),
    INDEX idx_assigned_to (assigned_to)
);
```

### 5. Orders Table
```sql
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'
    payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid', 'failed', 'refunded'
    shipping_address_id UUID REFERENCES addresses(id),
    billing_address_id UUID REFERENCES addresses(id),
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_order_number (order_number),
    INDEX idx_user_id (user_id),
    INDEX idx_status (status)
);
```

### 6. Order Items Table
```sql
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    product_name VARCHAR(255) NOT NULL, -- snapshot for historical accuracy
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(12, 2) NOT NULL,
    
    INDEX idx_order_id (order_id),
    INDEX idx_product_id (product_id)
);
```

### 7. Addresses Table
```sql
CREATE TABLE addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    address_type VARCHAR(50) NOT NULL, -- 'shipping', 'billing'
    street_address VARCHAR(500) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state_province VARCHAR(255),
    postal_code VARCHAR(50) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_user_id (user_id)
);
```

### 8. Documents Table
```sql
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type VARCHAR(50) NOT NULL, -- 'product', 'order', 'certification'
    entity_id UUID NOT NULL,
    document_type VARCHAR(100) NOT NULL, -- 'certificate', 'invoice', 'specification', 'datasheet'
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    file_size INTEGER,
    mime_type VARCHAR(100),
    uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_document_type (document_type)
);
```

### 9. Activity Logs Table
```sql
CREATE TABLE activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL, -- 'login', 'order_created', 'product_updated', etc.
    entity_type VARCHAR(50),
    entity_id UUID,
    ip_address VARCHAR(50),
    user_agent TEXT,
    metadata JSONB, -- flexible storage for additional data
    created_at TIMESTAMP DEFAULT NOW(),
    
    INDEX idx_user_id (user_id),
    INDEX idx_action (action),
    INDEX idx_created_at (created_at)
);
```

---

## API Endpoints

### Authentication Endpoints

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "john@hospital.com",
  "password": "SecurePass123!",
  "full_name": "John Doe",
  "company_name": "General Hospital",
  "phone": "+1-555-0123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "user_id": "uuid",
    "email": "john@hospital.com"
  }
}
```

#### POST /api/auth/login
Authenticate user and return JWT tokens.

**Request Body:**
```json
{
  "email": "john@hospital.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "access_token": "jwt_token_here",
    "refresh_token": "refresh_token_here",
    "user": {
      "id": "uuid",
      "email": "john@hospital.com",
      "full_name": "John Doe",
      "role": "customer"
    }
  }
}
```

#### POST /api/auth/refresh
Refresh access token using refresh token.

#### POST /api/auth/logout
Invalidate tokens and log out user.

#### POST /api/auth/forgot-password
Initiate password reset process.

#### POST /api/auth/reset-password
Complete password reset with token.

---

### Product Endpoints

#### GET /api/products
List all products with filtering and pagination.

**Query Parameters:**
- `category`: Filter by category (cardiovascular, antibiotics, etc.)
- `search`: Search by name or description
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `sort`: Sort field (name, price, created_at)
- `order`: Sort order (asc, desc)

**Response:**
```json
{
  "success": true,
  "data": {
    "products": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "total_pages": 8
    }
  }
}
```

#### GET /api/products/:id
Get detailed information about a specific product.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Cardiomax 50mg",
    "category": "cardiovascular",
    "description": "Beta-blocker for hypertension management",
    "dosage": "50mg tablets",
    "packaging": "100 tablets/box",
    "indication": "Hypertension, Angina",
    "price": 125.50,
    "stock_quantity": 5000,
    "certifications": [
      {
        "type": "FDA",
        "certificate_number": "FDA-123456",
        "expiry_date": "2026-12-31"
      }
    ],
    "documents": [...]
  }
}
```

#### POST /api/products (Admin Only)
Create a new product.

#### PUT /api/products/:id (Admin Only)
Update product information.

#### DELETE /api/products/:id (Admin Only)
Soft delete a product (set is_active to false).

---

### Inquiry Endpoints

#### POST /api/inquiries
Submit a new inquiry or quote request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@hospital.com",
  "company": "General Hospital",
  "phone": "+1-555-0123",
  "subject": "Bulk order inquiry",
  "message": "We need 5000 units of Cardiomax 50mg..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "data": {
    "inquiry_id": "uuid",
    "reference_number": "INQ-2025-001234"
  }
}
```

#### GET /api/inquiries (Authenticated)
List user's inquiries (customers see their own, staff see all).

#### GET /api/inquiries/:id (Authenticated)
Get inquiry details.

#### PUT /api/inquiries/:id/status (Staff Only)
Update inquiry status.

---

### Order Endpoints

#### POST /api/orders (Authenticated)
Create a new order.

**Request Body:**
```json
{
  "items": [
    {
      "product_id": "uuid",
      "quantity": 100
    }
  ],
  "shipping_address_id": "uuid",
  "billing_address_id": "uuid",
  "notes": "Urgent delivery required"
}
```

#### GET /api/orders (Authenticated)
List user's orders.

#### GET /api/orders/:id (Authenticated)
Get order details.

#### PUT /api/orders/:id/cancel (Authenticated)
Cancel an order (if status allows).

---

### User Profile Endpoints

#### GET /api/users/profile (Authenticated)
Get current user profile.

#### PUT /api/users/profile (Authenticated)
Update user profile.

#### GET /api/users/addresses (Authenticated)
List user addresses.

#### POST /api/users/addresses (Authenticated)
Add new address.

#### PUT /api/users/addresses/:id (Authenticated)
Update address.

#### DELETE /api/users/addresses/:id (Authenticated)
Delete address.

---

### Document Endpoints

#### GET /api/documents
List documents (filtered by entity).

**Query Parameters:**
- `entity_type`: product, order, certification
- `entity_id`: UUID of the entity
- `document_type`: certificate, invoice, etc.

#### POST /api/documents/upload (Authenticated)
Upload a new document.

#### GET /api/documents/:id/download
Download a document.

---

## Authentication & Authorization

### JWT Token Structure

**Access Token Payload:**
```json
{
  "user_id": "uuid",
  "email": "john@hospital.com",
  "role": "customer",
  "iat": 1234567890,
  "exp": 1234571490
}
```

**Token Expiry:**
- Access Token: 15 minutes
- Refresh Token: 7 days

### Role-Based Access Control (RBAC)

**Roles:**
1. **Admin**: Full system access
2. **Sales**: Manage inquiries, view orders, update product info
3. **Customer**: View products, submit inquiries, create orders
4. **Distributor**: Bulk operations, special pricing access

**Permission Matrix:**
| Resource | Admin | Sales | Customer | Distributor |
|----------|-------|-------|----------|-------------|
| Products (Read) | ✓ | ✓ | ✓ | ✓ |
| Products (Write) | ✓ | ✗ | ✗ | ✗ |
| Orders (Create) | ✓ | ✓ | ✓ | ✓ |
| Orders (All) | ✓ | ✓ | Own Only | Own Only |
| Inquiries (All) | ✓ | ✓ | Own Only | Own Only |
| Users (Manage) | ✓ | ✗ | ✗ | ✗ |

---

## Business Logic

### Order Processing Flow

1. **Order Creation**
   - Validate product availability
   - Check minimum order quantities
   - Calculate total amount
   - Reserve inventory
   - Generate order number (ORD-YYYY-NNNNNN)
   - Send confirmation email

2. **Order Confirmation** (Manual/Automated)
   - Staff reviews order
   - Update status to 'confirmed'
   - Send notification to customer

3. **Payment Processing**
   - Integration with payment gateway
   - Update payment_status
   - Create invoice document

4. **Fulfillment**
   - Update stock quantities
   - Update status to 'processing', then 'shipped'
   - Generate shipping documents
   - Send tracking information

5. **Delivery**
   - Update status to 'delivered'
   - Request feedback

### Inquiry Processing Flow

1. **Submission**
   - Validate input data
   - Generate reference number (INQ-YYYY-NNNNNN)
   - Auto-assign based on category/load balancing
   - Send acknowledgment email

2. **Processing**
   - Staff reviews inquiry
   - Update status to 'in_progress'
   - Prepare quote/response
   - Send response email

3. **Resolution**
   - Update status to 'resolved'
   - If converted to order, link order_id

### Product Stock Management

- **Automatic Reorder**: Alert when stock < min_threshold
- **Reserved Stock**: Temporarily hold during checkout
- **Stock Adjustment Logs**: Track all inventory changes

---

## Third-Party Integrations

### Email Service (SendGrid/AWS SES)

**Email Templates Needed:**
1. Welcome/Registration Confirmation
2. Email Verification
3. Password Reset
4. Inquiry Acknowledgment
5. Inquiry Response
6. Order Confirmation
7. Order Status Updates
8. Shipping Notification
9. Delivery Confirmation

### Payment Gateway (Stripe/PayPal)

**Required Features:**
- One-time payments
- Invoice generation
- Refund processing
- Payment status webhooks

### File Storage (AWS S3/Azure Blob)

**Storage Structure:**
```
/documents
  /products
    /{product_id}
      /certificates
      /datasheets
  /orders
    /{order_id}
      /invoices
      /shipping_docs
  /certifications
```

### SMS Service (Twilio) - Optional

**Use Cases:**
- Order confirmations
- Shipping updates
- OTP for verification

---

## Security Requirements

### 1. Input Validation
- Sanitize all user inputs
- Implement rate limiting (100 req/min per IP)
- Use parameterized queries (prevent SQL injection)
- Validate file uploads (type, size, malware scanning)

### 2. Password Security
- Minimum 8 characters, complexity requirements
- Use bcrypt with salt rounds = 12
- Implement password history (prevent reuse of last 5)
- Account lockout after 5 failed attempts

### 3. Data Protection
- Encrypt sensitive data at rest (AES-256)
- Use HTTPS/TLS 1.3 for all communications
- Implement CORS policies
- Hash PII data where applicable

### 4. API Security
- Implement API key authentication for third-party access
- Use request signing for sensitive operations
- Implement CSRF protection
- Add security headers (HSTS, CSP, X-Frame-Options)

### 5. Compliance
- **HIPAA**: If handling patient data
- **GDPR**: For EU customers (data portability, right to deletion)
- **FDA CFR Part 11**: Electronic records compliance

### 6. Audit Trail
- Log all sensitive operations
- Maintain immutable audit logs
- Regular security audits
- Compliance reporting

---

## Deployment & Infrastructure

### Environment Configuration

**Development:**
- Local PostgreSQL instance
- Mock email service
- Debug logging enabled

**Staging:**
- Cloud database (RDS/Azure SQL)
- Real email service (test mode)
- Performance monitoring

**Production:**
- High-availability database setup
- CDN for static assets
- Auto-scaling enabled
- Real-time monitoring & alerts

### Required Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname
DATABASE_POOL_SIZE=20

# Redis
REDIS_URL=redis://host:6379

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRES_IN=7d

# Email
SENDGRID_API_KEY=your_key
FROM_EMAIL=noreply@medpharm.com

# Storage
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
S3_BUCKET=medpharm-documents
S3_REGION=us-east-1

# Payment
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Application
NODE_ENV=production
PORT=3000
API_BASE_URL=https://api.medpharm.com
FRONTEND_URL=https://medpharm.com
```

### Monitoring & Logging

**Metrics to Track:**
- API response times
- Error rates
- Database query performance
- Memory/CPU usage
- Active user sessions

**Logging:**
- Use structured logging (JSON format)
- Log levels: ERROR, WARN, INFO, DEBUG
- Centralized logging (ELK Stack, Datadog, CloudWatch)
- Alert on critical errors

### Backup Strategy

- **Database**: Daily automated backups, 30-day retention
- **Documents**: Replicated across regions
- **Configuration**: Version controlled
- **Recovery Testing**: Monthly disaster recovery drills

### CI/CD Pipeline

1. Code commit triggers pipeline
2. Run automated tests (unit, integration)
3. Security scanning (SAST, dependency check)
4. Build Docker image
5. Deploy to staging
6. Run E2E tests
7. Manual approval for production
8. Deploy to production (blue-green deployment)
9. Health checks
10. Rollback on failure

---

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

### Error Codes
- `VALIDATION_ERROR`: Input validation failed
- `AUTHENTICATION_ERROR`: Invalid credentials
- `AUTHORIZATION_ERROR`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `CONFLICT`: Resource already exists
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

---

## Performance Requirements

- **API Response Time**: < 200ms (95th percentile)
- **Database Queries**: < 100ms average
- **File Upload**: Support up to 10MB files
- **Concurrent Users**: Handle 1000+ simultaneous connections
- **Uptime SLA**: 99.9% availability

---

## Testing Requirements

### Unit Tests
- Code coverage > 80%
- Test all business logic functions
- Mock external dependencies

### Integration Tests
- Test API endpoints
- Test database operations
- Test third-party integrations

### E2E Tests
- User registration flow
- Order placement flow
- Inquiry submission flow
- Payment processing

### Load Testing
- Simulate 1000 concurrent users
- Test peak load scenarios
- Identify bottlenecks

---

## Additional Considerations

### Scalability
- Use horizontal scaling for API servers
- Implement database read replicas
- Use caching aggressively (Redis)
- Consider microservices architecture for future growth

### Internationalization (i18n)
- Support multiple languages
- Currency conversion
- Date/time localization
- Regional compliance requirements

### Analytics
- Track user behavior
- Monitor conversion rates
- Product popularity metrics
- Sales reporting dashboard

---

## Contact & Support

For questions or clarifications on this backend specification, please contact:
- **Technical Lead**: tech@medpharm.com
- **Product Manager**: product@medpharm.com
- **Security Team**: security@medpharm.com

---

**Document Version**: 1.0  
**Last Updated**: 2025-11-01  
**Prepared for**: Backend Development Team
