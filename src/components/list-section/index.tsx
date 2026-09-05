import { useId, type ReactNode } from "react";

import styles from "./list-section.module.css";

interface ListSectionProps {
  title: string;
  underlined?: boolean;
  children: ReactNode;
}

export function ListSection({ title, underlined = false, children }: ListSectionProps) {
  const headingId = useId();
  const titleClass = underlined
    ? `${styles["list-section__title"]} ${styles["list-section__title--underlined"]}`
    : styles["list-section__title"];

  return (
    <section aria-labelledby={headingId} className={styles["list-section"]}>
      <h2 id={headingId} className={titleClass}>
        {title}
      </h2>
      <div className={styles["list-section__items"]}>{children}</div>
    </section>
  );
}
