import { useRef } from "react";
import type { AnimatedIconHandle } from "@/components/icons/animated-icon";

// Animated icons animate on their own hover by default. Here the hover target is
// the whole row or button around them, so the icon is set to trigger="none" and
// the container drives it instead.
export function useIconHover() {
  const ref = useRef<AnimatedIconHandle>(null);

  const hoverProps = {
    onMouseEnter: () => ref.current?.play(),
    onMouseLeave: () => ref.current?.stop(),
  };

  return { ref, hoverProps };
}
