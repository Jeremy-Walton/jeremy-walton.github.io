import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["site-footer__inner"]}>
        <span>&copy;2026 Jeremy Walton</span>
        <a
          href="https://www.bible.com/bible/59/PRO.3.5-6.ESV"
          target="_blank"
          rel="noreferrer"
          className={styles["site-footer__link"]}
        >
          Proverbs 3:5-6
        </a>
      </div>
    </footer>
  );
}
