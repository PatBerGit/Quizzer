import styles from './page.module.scss'
import Header from './components/header'
import CategorySelector from './components/categorySelector'
import Menu from './components/menu'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Menu></Menu>
      <p className={styles.welcomeText1}>Welcome to Quizzer</p>
      <p className={styles.welcomeText}>A fun and learning quiz game.</p>
      <p className={styles.welcomeText}>Select category below and press the start button</p>
      <CategorySelector></CategorySelector>
    </main>
  )
}