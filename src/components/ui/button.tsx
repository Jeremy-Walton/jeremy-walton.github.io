import { Button as ButtonPrimitive } from "@base-ui/react/button"

import styles from "./button.module.css"

function Button(props: Omit<ButtonPrimitive.Props, "className">) {
  return <ButtonPrimitive {...props} className={styles.button} />
}

export { Button }
