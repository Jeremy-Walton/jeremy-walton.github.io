import { useIcon, type IconName } from "@/lib/icon-context";
import { Button } from "@/components/ui/button";
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
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={contact.label}
      render={<a href={contact.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} />}
    >
      <Icon size={20} strokeWidth={1.5} />
    </Button>
  );
}

export function IntroSection() {
  return (
    <header data-intro className="max-w-[65ch]">
      <h1
        style={{ "--i": 0 } as CSSProperties}
        className="font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.01em] text-foreground"
      >
        Jeremy <span className="italic text-primary">Walton</span>
      </h1>
      <p
        style={{ "--i": 1 } as CSSProperties}
        className="mt-5 text-lg leading-relaxed text-foreground/85 md:text-xl"
      >
        Software Craftsman with over a decade of experience. I work at RoleModel Software building applications that solve business needs. I care about solving real problems, creating maintainable software, and building delightful user experiences.
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
