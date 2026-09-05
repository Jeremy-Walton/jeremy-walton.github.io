import profilePhoto from "@/assets/profile-min.png";

import styles from "./flip-photo.module.css";

const face = styles["flip-photo__face"];

// Both faces are the same image; the back is rotated 180deg so the card reads
// as one object turning over rather than two images swapping.
export function FlipPhoto() {
  const src = profilePhoto;
  const alt = "Jeremy Walton";

  return (
    <div className={styles["flip-photo"]}>
      <div className={styles["flip-photo__card"]}>
        <img
          src={src}
          alt={alt}
          className={`${face} ${styles["flip-photo__face--front"]}`}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className={`${face} ${styles["flip-photo__face--back"]}`}
        />
      </div>
    </div>
  );
}
