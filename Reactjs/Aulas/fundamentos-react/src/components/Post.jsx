// @ts-ignore
import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { LineSegment } from '@phosphor-icons/react/dist/ssr';

export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState([])
  const [newTextArea, setNewTextArea] = useState('')

  const dateFormat = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    // @ts-ignore
    locale: ptBR,
  })

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    // @ts-ignore
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, {id: comments.length + 1 ,text: newTextArea, creation: Date.now()}]);
    setNewTextArea('');
  }

  function handleNewTextArea(){
    setNewTextArea(event.target.value);
  }

  return (
    <article className = {styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormat} dateTime={publishedAt.toISOString()}>{dateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
      {
        content.map(line =>{
          if(line.type === "paragraph"){
            return (<p key={line.content}>{line.content}</p>)
          }else{
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          }
        })
      }
      </div>

      <form
// @ts-ignore
      onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
        value = {newTextArea}
        placeholder='Deixe um comentário'
        onChange={handleNewTextArea}
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>{
        comments.map(comment => {
          return <Comment key = {comment.id} content = {comment.text} dateCreation={comment.creation}/>
        })
      }
      </div>
    </article>
  )
}