import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";

export default function HomePage() {
  return (
    <main className="z-10">
      <Hero />
      <Technologies />
      <Projects />
    </main>
  );
}
