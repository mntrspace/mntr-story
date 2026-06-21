import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Volunteer } from "@/components/volunteer";
import { Interesting } from "@/components/interesting";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Volunteer />
        <Interesting />
      </main>
      <Footer />
    </>
  );
}
