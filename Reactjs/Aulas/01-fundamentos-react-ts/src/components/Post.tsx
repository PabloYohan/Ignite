import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps{
  post: PostType;
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

interface Comment{
  text: string;
  creation: number;
}

export function Post({post}: PostProps){
  const [comments, setComments] = useState<Comment[]>([]);
  const [newTextArea, setNewTextArea] = useState('');

  const dateFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  })

  const dateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, {text: newTextArea, creation: Date.now()}]);
    setNewTextArea('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse Campo é Obrigatório')
  }

  function handleNewTextArea(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewTextArea(event.target.value);
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeleteOne = comments.filter(comments => {
      return comments.text !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newTextArea.length === 0;
  return (
    <article className = {styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={dateFormat} dateTime={post.publishedAt.toISOString()}>{dateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
      {
        post.content.map(line =>{
          if(line.type === "paragraph"){
            return (<p key={line.content}>{line.content}</p>)
          }else{
            return (<p key={line.content}><a href="#">{line.content}</a></p>)
          }
        })
      }
      </div>

      <form
      onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
        value = {newTextArea}
        placeholder='Deixe um comentário'
        onChange={handleNewTextArea}
        onInvalid={handleNewCommentInvalid}
        required
        />
        <footer>
          <button type='submit' disabled ={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>{
        comments.map(comment => {
          return (<Comment
            key = {comment.text}
            content = {comment.text}
            dateCreation={comment.creation}
            onDeleteComment = {deleteComment}
            />)
        })
      }
      </div>
    </article>
  )
}