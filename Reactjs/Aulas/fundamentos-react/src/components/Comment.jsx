// @ts-ignore
import styles from "./Comment.module.css"
import { TrashSimple, ThumbsUp } from "../../node_modules/phosphor-react/dist/index"
export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="github.com/PabloYohan.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pablo Yohan</strong>
              <time title="29 de Novembro às 19h40" dateTime="2023-11-29 19:39:40">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <TrashSimple size={20} />
            </button>
          </header>
          <p>Muito Bom, Parabéns!!!</p>
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
