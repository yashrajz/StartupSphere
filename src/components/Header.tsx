import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold group-hover:text-primary transition-colors">
              EventHorizon
            </span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#events" className="transition-colors hover:text-primary">
              Browse Events
            </a>
            <a href="#editor-picks" className="transition-colors hover:text-primary">
              Editor's Picks
            </a>
            <a href="#submit" className="transition-colors hover:text-primary">
              Submit Event
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
