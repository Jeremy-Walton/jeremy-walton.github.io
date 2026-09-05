interface FlipPhotoProps {
  src: string;
  alt: string;
}

// Both faces are the same image; the back is rotated 180deg so the card reads
// as one object turning over rather than two images swapping.
export function FlipPhoto({ src, alt }: FlipPhotoProps) {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative aspect-square [transform-style:preserve-3d] transition-transform duration-1000 ease-out group-hover:[transform:rotateY(180deg)] motion-reduce:transition-none">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full rounded-3xl object-cover grayscale [backface-visibility:hidden] dark:grayscale-0"
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full rounded-3xl object-cover [backface-visibility:hidden] [transform:rotateY(180deg)] dark:grayscale"
        />
      </div>
    </div>
  );
}
