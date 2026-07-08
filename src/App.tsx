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
      <main className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <IntroSection />
        <ProjectList />
        <ReadingList />
      </main>
    </div>
  );
}

export default App;
