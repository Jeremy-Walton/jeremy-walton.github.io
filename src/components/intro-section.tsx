import { useIcon, type IconName } from "@/lib/icon-context";
import type { CSSProperties } from "react";

interface ContactLink {
  label: string;
  href: string;
  icon: IconName;
}

const contacts: ContactLink[] = [
  { label: "Email", href: "mailto:jeremy.patrick.walton@gmail.com", icon: "envelope-simple" },
  { label: "GitHub", href: "https://github.com/Jeremy-Walton", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeremy-walton/", icon: "linkedin" },
  { label: "X", href: "https://x.com/jeremywalton6th", icon: "x-logo" },
];

function ContactIcon({ contact }: { contact: ContactLink }) {
  const Icon = useIcon(contact.icon);
  const external = !contact.href.startsWith("mailto:");
  return (
    <a
      href={contact.href}
      aria-label={contact.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--ring)]"
    >
      <Icon size={19} strokeWidth={1.5} />
    </a>
  );
}

export function IntroSection() {
  return (
    <header data-intro className="max-w-[65ch]">
      <h1
        style={{ "--i": 0 } as CSSProperties}
        className="text-[clamp(1.875rem,1.5rem+1.7vw,2.75rem)] font-semibold tracking-[-0.02em] text-foreground"
      >
        Jeremy Walton
      </h1>
      <p
        style={{ "--i": 1 } as CSSProperties}
        className="mt-5 text-lg leading-relaxed text-foreground/85 md:text-xl"
      >
        Software craftsman with over a decade of experience. I work at RoleModel
        Software building applications that solve business needs. I care about
        front-end quality, making things maintainable, and building delightful
        user experiences.
      </p>
      <div
        style={{ "--i": 2 } as CSSProperties}
        className="mt-7 -ml-3 flex items-center gap-1"
      >
        {contacts.map((contact) => (
          <ContactIcon key={contact.label} contact={contact} />
        ))}
      </div>
    </header>
  );
}
