import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. A representative will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-card rounded-[3rem] shadow-2xl overflow-hidden border border-border/50 flex flex-col md:flex-row">
          
          {/* Left Info Side */}
          <div className="bg-[#0f291e] text-white p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold mb-4">Let's Grow Together</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Whether you're a distributor looking for bulk supplies, or a customer with a question, we're here to help.
              </p>
            </div>

            <div className="space-y-6 relative z-10 mt-12 md:mt-0">
              <div>
                <h4 className="font-semibold text-primary mb-1">Corporate Office</h4>
                <p className="text-white/80">14 Sweet Mama Avenue,<br/>Ikeja, Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Sales & Enquiries</h4>
                <p className="text-white/80">+234 (0) 800 123 4567<br/>sales@sweetmamafarms.com</p>
              </div>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="p-12 md:w-3/5 bg-white">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="h-12 bg-muted/50 border-transparent focus:bg-white transition-colors rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12 bg-muted/50 border-transparent focus:bg-white transition-colors rounded-xl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject / Inquiry Type</Label>
                <select id="subject" className="flex h-12 w-full items-center justify-between rounded-xl border border-transparent bg-muted/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:bg-white disabled:cursor-not-allowed disabled:opacity-50" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="bulk">Bulk Purchase & Distribution</option>
                  <option value="retail">Retail Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you today?" 
                  rows={4} 
                  required 
                  className="resize-none bg-muted/50 border-transparent focus:bg-white transition-colors rounded-xl p-4"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-14 rounded-xl text-base font-bold">
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
