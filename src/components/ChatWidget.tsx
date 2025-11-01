import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Paperclip, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your MedAssist AI. How can I help you today? I can help you find branches, upload prescriptions, or request a callback.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. Our team will assist you shortly. For immediate assistance, please call our hotline at 1-800-MEDCARE.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
      
      const uploadMessage: Message = {
        id: Date.now().toString(),
        text: `Uploaded file: ${file.name}`,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, uploadMessage]);
    }
  };

  return (
    <>
      {/* Minimized Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-12 w-12 sm:h-16 sm:w-16 rounded-full glow-cyan z-50 animate-pulse"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      )}

      {/* Expanded Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-screen sm:h-[600px] sm:rounded-2xl glass border-t-2 sm:border-2 border-primary/30 glow-cyan flex flex-col z-50">
          {/* Header */}
          <div className="glass border-b border-primary/30 p-3 sm:p-4 sm:rounded-t-2xl flex items-center justify-between glow-cyan">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary glow-cyan flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">MedAssist AI</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary glow-purple animate-pulse flex-shrink-0" />
                  Online • Ready to help
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/10 h-8 w-8 sm:h-10 sm:w-10"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-lg p-2.5 sm:p-3 ${
                    message.sender === "user"
                      ? "glass border border-primary/50 glow-cyan"
                      : "glass border border-muted"
                  }`}
                >
                  <p className="text-xs sm:text-sm">{message.text}</p>
                  <p className="text-[10px] sm:text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass border border-primary/30 rounded-lg p-2.5 sm:p-3">
                  <Loader2 className="h-4 w-4 animate-spin text-primary glow-cyan" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-primary/20 glass sm:rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
              >
                <Paperclip className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 text-sm"
              />
              <Button onClick={handleSendMessage} size="icon" className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
                <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">
              Quick actions: Find branch • Upload prescription • Request callback
            </p>
          </div>
        </div>
      )}
    </>
  );
};
