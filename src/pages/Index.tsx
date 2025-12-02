import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorPicks from "@/components/EditorPicks";
import EventsGrid from "@/components/EventsGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EventHorizon — Global Startup & Tech Events</title>
        <meta 
          name="description" 
          content="Discover top startup, tech, and funding events worldwide. Curated picks, advanced filters, and organizer tools for founders, investors & builders." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <EditorPicks />
          <EventsGrid />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
