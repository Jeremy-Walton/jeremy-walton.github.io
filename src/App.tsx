import { IntroSection } from "@/components/intro-section";
import { ProjectList } from "@/components/project-list";
import { ReadingList } from "@/components/reading-list";
import { SiteFooter } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

function App() {
  return (
    <div className="min-h-dvh">
      <div className="fixed top-5 right-5 z-10 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <main>
        <section className="bg-background">
          <div className="page-width py-[clamp(5rem,4rem+3vw,7rem)]">
            <IntroSection />
          </div>
        </section>
        <section className="bg-card">
          <div className="page-width grid gap-16 py-[clamp(4rem,3rem+3vw,6rem)] lg:grid-cols-[1fr_1.3fr] lg:gap-12">
            <ProjectList />
            <ReadingList />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
