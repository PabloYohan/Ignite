import styles from "./Comment.module.css"
import { Trash, ThumbsUp } from "@phosphor-icons/react"
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from "react";

interface CommentProps{
  content : string;
  dateCreation: number,
  onDeleteComment: (content : string) => void;
}


export function Comment({content, dateCreation, onDeleteComment}: CommentProps){
  const [likeCount, setLikeCount] = useState(0);
  const dateISO = new Date(dateCreation);
  const dateFormat = format(dateCreation, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  })

  const dateRelativeToNow = formatDistanceToNow(dateCreation, {
    locale: ptBR,
    addSuffix: true
  })

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleSetLikeCount(){
    setLikeCount((state) => state + 1)
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleSetLikeCount}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
