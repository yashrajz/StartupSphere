import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import eventPitch from "@/assets/event-pitch.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";

const editorPicksData = [
  {
    title: "Global Startup Summit 2025",
    image: eventPitch,
    date: "Apr 21, 2025",
    time: "9:00 AM IST",
    location: "Bengaluru, India",
    category: "Conference",
    price: "₹2,999",
    attendees: 850,
  },
  {
    title: "AI Founders Networking Night",
    image: eventNetworking,
    date: "Mar 15, 2025",
    time: "6:00 PM PST",
    location: "San Francisco, USA",
    category: "Networking",
    price: "Free",
    attendees: 120,
  },
  {
    title: "Web3 Development Workshop",
    image: eventWorkshop,
    date: "Mar 28, 2025",
    time: "2:00 PM GMT",
    location: "Online",
    category: "Workshop",
    price: "$49",
    online: true,
    attendees: 450,
  },
];

const EditorPicks = () => {
  return (
    <section id="editor-picks" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <h2 className="text-3xl md:text-4xl font-bold">Editor's Picks</h2>
            </div>
            <p className="text-muted-foreground">
              Hand-curated events you shouldn't miss this season
            </p>
          </div>
          
          <Button variant="ghost" className="hidden md:inline-flex group">
            View All
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorPicksData.map((event, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="group">
            View All Picks
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EditorPicks;
