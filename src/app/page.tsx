import styles from './page.module.scss'
import CategorySelector from './components/categorySelector'
export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.welcomeText1}>Welcome to Quizzer</p>
      <p className={styles.welcomeText}>A fun and learning quiz game.</p>
      <p className={styles.welcomeText}>Select category below and press the start button</p>
      <CategorySelector></CategorySelector>
    </main>
  )
}
