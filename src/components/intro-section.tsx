import { GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Envelope } from "@/components/icons/envelope";
import type { ComponentType, CSSProperties } from "react";
import profilePhoto from "@/assets/profile-min.png";

interface ContactLink {
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number; weight?: "light" }>;
}

const contacts: ContactLink[] = [
  { label: "Email", href: "mailto:jeremy.patrick.walton@gmail.com", Icon: Envelope },
  { label: "GitHub", href: "https://github.com/Jeremy-Walton", Icon: GithubLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeremy-walton/", Icon: LinkedinLogo },
  { label: "X", href: "https://x.com/jeremywalton6th", Icon: XLogo },
];

function ContactIcon({ contact }: { contact: ContactLink }) {
  const { Icon } = contact;
  const external = !contact.href.startsWith("mailto:");
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={contact.label}
      render={<a href={contact.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} />}
    >
      <Icon size={20} weight="light" />
    </Button>
  );
}

export function IntroSection() {
  return (
    <header className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
      <div>
        <h1
          data-intro-item
          style={{ "--i": 0 } as CSSProperties}
          className="font-serif text-[clamp(2.5rem,1.75rem+3vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.01em] text-foreground"
        >
          Jeremy <span className="italic text-primary">Walton</span>
        </h1>
        <p
          data-intro-item
          style={{ "--i": 1 } as CSSProperties}
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
          building applications that solve business needs. I care about identifying real problems, architecting maintainable software solutions, and building delightful user experiences.
        </p>
        <div
          data-intro-item
          style={{ "--i": 2 } as CSSProperties}
          className="mt-7 -ml-3 flex items-center gap-1"
        >
          {contacts.map((contact) => (
            <ContactIcon key={contact.label} contact={contact} />
          ))}
        </div>
      </div>
      <div
        data-intro-item
        style={{ "--i": 1 } as CSSProperties}
        className="group mx-auto w-full max-w-72 [perspective:1000px] lg:mx-0"
      >
        <div className="relative aspect-square [transform-style:preserve-3d] transition-transform duration-1000 ease-out group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none">
          <img
            src={profilePhoto}
            alt="Jeremy Walton"
            className="absolute inset-0 h-full w-full rounded-3xl object-cover grayscale [backface-visibility:hidden] dark:grayscale-0"
          />
          <img
            src={profilePhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full rounded-3xl object-cover [backface-visibility:hidden] [transform:rotateY(180deg)] dark:grayscale"
          />
        </div>
      </div>
    </header>
  );
}
