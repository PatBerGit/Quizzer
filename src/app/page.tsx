import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <p className={styles.welcomeText}>Welcome to Quizzer</p>
      <p className={styles.welcomeText}>A fun and learning quiz game.</p>
      <p className={styles.welcomeText}>Select category below and press the start button</p>
    </main>
  )
}
