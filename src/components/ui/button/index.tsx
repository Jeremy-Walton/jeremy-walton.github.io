import type { MouseEventHandler, ReactNode } from "react"

import styles from "./button.module.css"

interface ButtonProps {
  children: ReactNode
  "aria-label": string
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  href?: string
  target?: string
  rel?: string
}

function Button({ href, target, rel, ...props }: ButtonProps) {
  return href === undefined ? (
    <button {...props} type="button" className={styles.button} />
  ) : (
    <a {...props} href={href} target={target} rel={rel} className={styles.button} />
  )
}

export { Button }
