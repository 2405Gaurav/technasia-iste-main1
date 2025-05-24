import { HeroSection } from "@/components/home/hero";
import { HighlightsSection } from "@/components/home/highlights";
import { FeaturedCompetitions } from "@/components/home/featured-competitions";
import { Countdown } from "@/components/home/countdown";
import { SponsorsPreview } from "@/components/home/sponsors-preview";
import { AboutContent } from "@/components/about/about-content";
import { TeamSection } from "@/components/about/team-section";
import { TimelineComponent } from "@/components/timeline/timeline-component";
import { CompetitionGrid } from "@/components/competitions/competition-grid";
import { SponsorsGrid } from "@/components/sponsors/sponsors-grid";
import { RegistrationForm } from "@/components/register/registration-form";
import { PreviousEventsGrid } from "@/components/previous-events/previous-events-grid";
import { FaqAccordion } from "@/components/faqs/faq-accordion";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="highlights">
        <HighlightsSection />
      </section>
      
      <section id="about">
        <AboutContent />
        <TeamSection />
      </section>
      
      <section id="timeline">
        <TimelineComponent />
      </section>
      
      <section id="competitions">
        <CompetitionGrid />
      </section>
      
      <section id="sponsors">
        <SponsorsGrid />
      </section>
      
      <section id="register">
        <RegistrationForm />
      </section>
      
      <section id="previous-events">
        <PreviousEventsGrid />
      </section>
      
      <section id="faqs">
        <FaqAccordion />
      </section>
    </>
  );
}