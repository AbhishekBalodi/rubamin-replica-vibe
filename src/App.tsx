import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import Index from "./pages/Index";
import Business from "./pages/Business";
import BatteryRecycling from "./pages/business/BatteryRecycling";
import CatalystRecycling from "./pages/business/CatalystRecycling";
import ZincRecycling from "./pages/business/ZincRecycling";
import Sustainability from "./pages/Sustainability";
import WhoWeAre from "./pages/WhoWeAre";
import Careers from "./pages/Careers";
import MediaRoom from "./pages/careers/MediaRoom";
import Blogs from "./pages/careers/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/battery-recycling" element={<BatteryRecycling />} />
          <Route path="/business/catalyst-recycling" element={<CatalystRecycling />} />
          <Route path="/business/zinc-recycling" element={<ZincRecycling />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/media-room" element={<MediaRoom />} />
          <Route path="/careers/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
