import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import eventPitch from "@/assets/event-pitch.jpg";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventPanel from "@/assets/event-panel.jpg";

const eventsData = [
  {
    title: "SaaS Growth Strategies Conference",
    image: eventPanel,
    date: "Apr 10, 2025",
    time: "10:00 AM EST",
    location: "New York, USA",
    category: "Conference",
    price: "$299",
    attendees: 600,
  },
  {
    title: "Startup Funding Masterclass",
    image: eventPitch,
    date: "Mar 25, 2025",
    time: "3:00 PM CET",
    location: "Berlin, Germany",
    category: "Workshop",
    price: "€149",
    attendees: 80,
  },
  {
    title: "Product Design Sprint",
    image: eventWorkshop,
    date: "Apr 5, 2025",
    time: "9:00 AM PST",
    location: "Online",
    category: "Workshop",
    price: "$79",
    online: true,
    attendees: 350,
  },
  {
    title: "Female Founders Meetup",
    image: eventNetworking,
    date: "Mar 18, 2025",
    time: "5:30 PM GMT",
    location: "London, UK",
    category: "Networking",
    price: "Free",
    attendees: 95,
  },
  {
    title: "Crypto & Blockchain Summit",
    image: eventPanel,
    date: "Apr 15, 2025",
    time: "11:00 AM SGT",
    location: "Singapore",
    category: "Conference",
    price: "$399",
    attendees: 1200,
  },
  {
    title: "Developer Relations Workshop",
    image: eventWorkshop,
    date: "Mar 30, 2025",
    time: "2:00 PM EST",
    location: "Online",
    category: "Workshop",
    price: "$59",
    online: true,
    attendees: 200,
  },
];

const EventsGrid = () => {
  return (
    <section id="events" className="py-20">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Showing 487 events • Updated 2 hours ago
            </p>
          </div>

          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <Button variant="default" size="sm">All Events</Button>
          <Button variant="outline" size="sm">Conferences</Button>
          <Button variant="outline" size="sm">Workshops</Button>
          <Button variant="outline" size="sm">Networking</Button>
          <Button variant="outline" size="sm">Online</Button>
          <Button variant="outline" size="sm">This Week</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
