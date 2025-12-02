import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import Galaxy from "@/components/Galaxy";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-[600px]">
      <Galaxy
        starSpeed={0.5}
        density={1.2}
        hueShift={180}
        speed={1.0}
        mouseInteraction={true}
        glowIntensity={0.5}
        saturation={0.3}
        mouseRepulsion={true}
        repulsionStrength={2}
        twinkleIntensity={0.5}
        rotationSpeed={0.01}
        transparent={true}
        className="opacity-60"
      />
      
      <div className="relative z-20 container px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Discover 500+ curated events this month
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Discover Premium{" "}
            <span className="text-gradient-primary">Startup Events</span>{" "}
            Worldwide
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated tech conferences, networking meetups, and funding opportunities 
            for founders, investors, and builders.
          </p>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-col md:flex-row gap-3 p-2 bg-card rounded-xl shadow-card border border-border">
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search events, topics, or keywords..." 
                  className="border-0 focus-visible:ring-0 px-0"
                />
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Location" 
                  className="border-0 focus-visible:ring-0 px-0 w-32"
                />
              </div>

              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>Popular:</span>
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                AI & ML
              </button>
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                Funding
              </button>
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                Networking
              </button>
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                Web3
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
