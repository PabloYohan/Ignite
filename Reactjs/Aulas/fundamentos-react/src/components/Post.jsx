import styles from './Post.module.css'

export function Post(){
  return (
    <article className = {styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/PabloYohan.png" />
          <div className={styles.authorInfo}>
            <strong>Pablo Yohan</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="29 de Novembro às 19h40" dateTime="2023-11-29 19:39:40">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">👉 jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}