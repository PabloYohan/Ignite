// @ts-ignore
import styles from "./Comment.module.css"
// @ts-ignore
import { Trash, ThumbsUp } from "@phosphor-icons/react"
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
export function Comment({content, dateCreation}){

  const dateISO = new Date(dateCreation);
  const dateFormat = format(dateCreation, "d 'de' LLLL 'às' HH'h'mm", {
    // @ts-ignore
    locale: ptBR,
  })

  const dateRelativeToNow = formatDistanceToNow(dateCreation, {
    // @ts-ignore
    locale: ptBR,
    addSuffix: true
  })

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/PabloYohan.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pablo Yohan</strong>
              <time title={dateFormat} dateTime={dateISO.toISOString()}>{dateRelativeToNow}</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
