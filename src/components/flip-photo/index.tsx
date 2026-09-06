import profilePhoto from "@/assets/profile.webp";

import styles from "./flip-photo.module.css";

const face = styles["flip-photo__face"];

// Both faces are the same image; the back is rotated 180deg so the card reads
// as one object turning over rather than two images swapping.
export function FlipPhoto() {
  return (
    <div className={styles["flip-photo"]}>
      <div className={styles["flip-photo__card"]}>
        <img
          src={profilePhoto}
          alt=""
          aria-hidden="true"
          className={`${face} ${styles["flip-photo__face--back"]}`}
        />
        <img
          src={profilePhoto}
          alt="Jeremy Walton"
          fetchPriority="high"
          className={`${face} ${styles["flip-photo__face--front"]}`}
        />
      </div>
    </div>
  );
}
