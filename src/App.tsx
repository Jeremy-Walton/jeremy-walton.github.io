import { IntroSection } from "@/components/intro-section";
import { ProjectList } from "@/components/project-list";
import { ReadingList } from "@/components/reading-list";
import { ThemeToggle } from "@/components/theme-toggle";

function App() {
  return (
    <div className="min-h-dvh">
      <div className="fixed top-5 right-5 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-5xl px-6 py-[clamp(5rem,4rem+3vw,7rem)]">
            <IntroSection />
          </div>
        </section>
        <section className="bg-card">
          <div className="mx-auto grid max-w-5xl gap-16 px-6 py-[clamp(4rem,3rem+3vw,6rem)] lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            <ProjectList />
            <ReadingList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
