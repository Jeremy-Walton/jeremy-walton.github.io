import { ArrowSquareOut } from "@/components/icons/arrow-square-out";
import { useIconHover } from "@/lib/use-icon-hover";

import styles from "./list-row.module.css";

interface ListRowProps {
  href: string;
  title: string;
  leading?: string;
  source?: string;
  description?: string;
}

export function ListRow({ href, title, leading, source, description }: ListRowProps) {
  const arrow = useIconHover();
  const descriptionClass = leading
    ? `${styles["list-row__description"]} ${styles["list-row__description--indented"]}`
    : styles["list-row__description"];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles["list-row"]}
      {...arrow.hoverProps}
    >
      <div className={styles["list-row__head"]}>
        <div className={styles["list-row__meta"]}>
          {leading && <span className={styles["list-row__leading"]}>{leading}</span>}
          <h3 className={styles["list-row__title"]}>{title}</h3>
          {source && <span className={styles["list-row__source"]}>— {source}</span>}
        </div>
        <ArrowSquareOut
          ref={arrow.ref}
          trigger="none"
          size={16}
          weight="light"
          aria-hidden="true"
          className={styles["list-row__arrow"]}
        />
      </div>
      {description && <p className={descriptionClass}>{description}</p>}
    </a>
  );
}
