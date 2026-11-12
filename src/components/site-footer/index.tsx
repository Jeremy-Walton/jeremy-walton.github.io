import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["site-footer__inner"]}>
        <a href="https://www.jeremywalton.dev/" className={styles["site-footer__link"]}>
          &copy;2026 Jeremy Walton
        </a>
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
