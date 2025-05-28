import { HeroSection } from "@/components/home/hero";
import { HighlightsSection } from "@/components/home/highlights";
import { AboutContent } from "@/components/about/about-content";
import { TeamSection } from "@/components/about/team-section";
import { TimelineComponent } from "@/components/timeline/timeline-component";
import SponsorGrid from "@/components/sponsors/sponsors-grid";
import { RegistrationForm } from "@/components/register/registration-form";
import { PreviousEventsGrid } from "@/components/previous-events/previous-events-grid";
import { FaqAccordion } from "@/components/faqs/faq-accordion";
import { ParticleWrapper } from "@/components/ParticleWrapper/ParticleWrapper";
import { Video } from "@/components/videotrailer/videopage";

export default function Home() {
  return (
    <ParticleWrapper>
      <section id="home">
        <HeroSection />
      </section>
      <section id="video">
        <Video
          
          src="/videos/event-highlights.mp4"
        />
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

      {/* <section id="competitions">
        <CompetitionGrid />
      </section> */}

      <section id="sponsors">
        <SponsorGrid />
      </section>

      <section id="previous-events">
        <PreviousEventsGrid />
      </section>

      <section id="register">
        <RegistrationForm />
      </section>

      <section id="faqs">
        <FaqAccordion />
      </section>
    </ParticleWrapper>
  );
}
