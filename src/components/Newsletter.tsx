import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-4">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent">
                  <Sparkles className="w-4 h-4" />
                  Weekly Curated Events
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  Never Miss a Great Event
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Get weekly curated picks, exclusive invites, and early-bird access 
                  delivered to your inbox every Monday.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4"
                />
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Join 12,000+ founders and investors. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
