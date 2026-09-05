import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Envelope } from "@/components/icons/envelope";
import { FlipPhoto } from "@/components/flip-photo";
import type { ComponentType, CSSProperties } from "react";

// --i is the entrance beat: each item waits its turn. See [data-intro-item]
// in index.css. Beats live here so the whole sequence reads in one place.
const beat = (i: number) => ({ "--i": i }) as CSSProperties;

interface ContactIconProps {
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number; weight?: "light" }>;
}

function ContactIcon({ label, href, Icon }: ContactIconProps) {
  const external = !href.startsWith("mailto:");
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      nativeButton={false}
      aria-label={label}
      render={<a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} />}
    >
      <Icon size={20} weight="light" />
    </Button>
  );
}

function Headline() {
  return (
    <h1
      data-intro-item
      style={beat(0)}
      className="font-serif text-[clamp(2.5rem,1.75rem+3vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.01em] text-foreground"
    >
      Jeremy <span className="italic text-primary">Walton</span>
    </h1>
  );
}

function Bio() {
  return (
    <p
      data-intro-item
      style={beat(1)}
      className="mt-5 max-w-[65ch] text-lg leading-relaxed text-foreground/85 md:text-xl"
    >
      Software Craftsman with over a decade of experience. I work at{" "}
      <a
        href="https://rolemodelsoftware.com/"
        target="_blank"
        rel="noreferrer"
        className="underline transition-colors duration-150 hover:text-primary"
      >
        RoleModel Software
      </a>{" "}
      building applications that solve business needs. I care about helping people fix problems, architecting maintainable software solutions, and building delightful user experiences.
    </p>
  );
}

function ContactLinks() {
  return (
    <div data-intro-item style={beat(2)} className="mt-7 -ml-3 flex items-center gap-1">
      <ContactIcon label="Email" href="mailto:jeremy.patrick.walton@gmail.com" Icon={Envelope} />
      <ContactIcon label="GitHub" href="https://github.com/Jeremy-Walton" Icon={GithubLogoIcon} />
      <ContactIcon label="LinkedIn" href="https://www.linkedin.com/in/jeremy-walton/" Icon={LinkedinLogoIcon} />
      <ContactIcon label="X" href="https://x.com/jeremywalton6th" Icon={XLogoIcon} />
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div data-intro-item style={beat(1)} className="mx-auto w-full max-w-72 lg:mx-0">
      <FlipPhoto />
    </div>
  );
}

export function IntroSection() {
  return (
    <header className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
      <div>
        <Headline />
        <Bio />
        <ContactLinks />
      </div>
      <ProfilePhoto />
    </header>
  );
}
