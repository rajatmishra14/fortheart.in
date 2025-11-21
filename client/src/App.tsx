import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AllWriting from "@/pages/AllWriting";
import AllDrawings from "@/pages/AllDrawings";
import AllAnimations from "@/pages/AllAnimations";
import WritingPost from "@/pages/WritingPost";
import DrawingDetail from "@/pages/DrawingDetail";
import AnimationDetail from "@/pages/AnimationDetail";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/writing" component={AllWriting} />
      <Route path="/writing/:id" component={WritingPost} />
      <Route path="/drawings" component={AllDrawings} />
      <Route path="/drawings/:id" component={DrawingDetail} />
      <Route path="/animations" component={AllAnimations} />
      <Route path="/animations/:id" component={AnimationDetail} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
