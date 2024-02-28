// @ts-ignore
import styles from "./Avatar.module.css"

export function Avatar({hasBorder = true, src}){
  return(
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder} src={src} alt="" />
  )
}