import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { 
  Pill, 
  Stethoscope, 
  HeartPulse, 
  Microscope,
  Search,
  Filter,
  ShieldCheck,
  Zap,
  CheckCircle2
} from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Pill },
    { id: "cardiovascular", name: "Cardiovascular", icon: HeartPulse },
    { id: "antibiotics", name: "Antibiotics", icon: Stethoscope },
    { id: "diabetes", name: "Diabetes Care", icon: Microscope },
    { id: "oncology", name: "Oncology", icon: Zap },
  ];

  const products = [
    {
      name: "Cardiomax 50mg",
      category: "cardiovascular",
      description: "Beta-blocker for hypertension management",
      dosage: "50mg tablets",
      packaging: "100 tablets/box",
      certifications: ["FDA", "WHO-GMP"],
      indication: "Hypertension, Angina",
    },
    {
      name: "Amoxilin 500mg",
      category: "antibiotics",
      description: "Broad-spectrum antibiotic for bacterial infections",
      dosage: "500mg capsules",
      packaging: "20 capsules/strip",
      certifications: ["FDA", "ISO"],
      indication: "Respiratory infections",
    },
    {
      name: "GlucoControl XR",
      category: "diabetes",
      description: "Extended-release metformin for type 2 diabetes",
      dosage: "1000mg tablets",
      packaging: "60 tablets/bottle",
      certifications: ["FDA", "WHO-GMP", "EMA"],
      indication: "Type 2 Diabetes",
    },
    {
      name: "OncoVita 250mg",
      category: "oncology",
      description: "Targeted therapy for specific cancer types",
      dosage: "250mg capsules",
      packaging: "30 capsules/box",
      certifications: ["FDA", "EMA"],
      indication: "Targeted cancer therapy",
    },
    {
      name: "Cardiomax Plus",
      category: "cardiovascular",
      description: "Combination therapy for heart conditions",
      dosage: "Variable strength",
      packaging: "90 tablets/bottle",
      certifications: ["FDA", "WHO-GMP"],
      indication: "Heart failure, Hypertension",
    },
    {
      name: "CefaStrong 1g",
      category: "antibiotics",
      description: "Injectable cephalosporin antibiotic",
      dosage: "1g vial",
      packaging: "10 vials/box",
      certifications: ["FDA", "ISO", "WHO-GMP"],
      indication: "Severe bacterial infections",
    },
    {
      name: "InsulinFlex",
      category: "diabetes",
      description: "Rapid-acting insulin analog",
      dosage: "100 units/ml",
      packaging: "5 cartridges/box",
      certifications: ["FDA", "EMA"],
      indication: "Diabetes mellitus",
    },
    {
      name: "ChemoPlus 100",
      category: "oncology",
      description: "Chemotherapy agent for solid tumors",
      dosage: "100mg injection",
      packaging: "Single dose vial",
      certifications: ["FDA", "WHO-GMP"],
      indication: "Various cancers",
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">Our Products</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 glow-text-cyan">
              Comprehensive Pharmaceutical Portfolio
            </h1>
            <p className="text-lg text-muted-foreground">
              High-quality medications across multiple therapeutic areas, all manufactured 
              to the highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 sticky top-0 z-30 glass border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                  className="whitespace-nowrap"
                >
                  <cat.icon className="h-4 w-4 mr-2" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid with 3D Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <CardContainer key={idx} className="inter-var">
                <CardBody className="glass relative group/card hover:glow-cyan border border-primary/30 w-auto h-auto rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-foreground"
                  >
                    {product.name}
                  </CardItem>
                  <CardItem
                    as="div"
                    translateZ="60"
                    className="mt-2"
                  >
                    <Badge variant="secondary">
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground text-sm mt-4"
                  >
                    {product.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Dosage: {product.dosage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Pack: {product.packaging}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Use: {product.indication}</span>
                    </div>
                  </CardItem>

                  <CardItem translateZ="80" className="flex flex-wrap gap-2 mt-4">
                    {product.certifications.map((cert, certIdx) => (
                      <Badge key={certIdx} variant="outline" className="text-xs">
                        <ShieldCheck className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    className="w-full mt-6"
                  >
                    <Button className="w-full" variant="outline">
                      Request Information
                    </Button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass p-12 rounded-3xl border border-primary/30 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Formulations?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer custom pharmaceutical manufacturing services. Contact us to discuss 
              your specific requirements.
            </p>
            <Button size="lg">Contact Sales Team</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
