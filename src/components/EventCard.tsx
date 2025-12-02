import { Calendar, MapPin, Users, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
  attendees?: number;
  online?: boolean;
}

const EventCard = ({ 
  title, 
  image, 
  date, 
  time, 
  location, 
  category, 
  price,
  attendees,
  online 
}: EventCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift hover:shadow-card-hover transition-all duration-300">
      <div className="absolute top-4 right-4 z-10">
        <Button size="icon" variant="ghost" className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-medium">
            {category}
          </Badge>
          {online && (
            <Badge variant="outline" className="font-medium">
              Online
            </Badge>
          )}
          <span className="ml-auto text-sm font-semibold text-primary">
            {price}
          </span>
        </div>

        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date} • {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
          {attendees && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{attendees} attending</span>
            </div>
          )}
        </div>

        <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
