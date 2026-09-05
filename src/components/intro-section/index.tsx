import { GithubLogoIcon, LinkedinLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Envelope } from "@/components/icons/envelope";
import { FlipPhoto } from "@/components/flip-photo";
import type { ComponentType, CSSProperties } from "react";

import styles from "./intro-section.module.css";

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
      nativeButton={false}
      aria-label={label}
      render={<a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} />}
    >
      <Icon size={16} weight="light" />
    </Button>
  );
}

function Headline() {
  return (
    <h1 data-intro-item style={beat(0)} className={styles["intro__headline"]}>
      Jeremy <span className={styles["intro__surname"]}>Walton</span>
    </h1>
  );
}

function Bio() {
  return (
    <p data-intro-item style={beat(1)} className={styles["intro__bio"]}>
      Software Craftsman with over a decade of experience. I work at{" "}
      <a
        href="https://rolemodelsoftware.com/"
        target="_blank"
        rel="noreferrer"
        className={styles["intro__bio-link"]}
      >
        RoleModel Software
      </a>{" "}
      building applications that solve business needs. I care about helping people fix problems, architecting maintainable software solutions, and building delightful user experiences.
    </p>
  );
}

function ContactLinks() {
  return (
    <div data-intro-item style={beat(2)} className={styles["intro__contacts"]}>
      <ContactIcon label="Email" href="mailto:jeremy.patrick.walton@gmail.com" Icon={Envelope} />
      <ContactIcon label="GitHub" href="https://github.com/Jeremy-Walton" Icon={GithubLogoIcon} />
      <ContactIcon label="LinkedIn" href="https://www.linkedin.com/in/jeremy-walton/" Icon={LinkedinLogoIcon} />
      <ContactIcon label="X" href="https://x.com/jeremywalton6th" Icon={XLogoIcon} />
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div data-intro-item style={beat(1)} className={styles["intro__photo"]}>
      <FlipPhoto />
    </div>
  );
}

export function IntroSection() {
  return (
    <header className={styles["intro"]}>
      <div>
        <Headline />
        <Bio />
        <ContactLinks />
      </div>
      <ProfilePhoto />
    </header>
  );
}
