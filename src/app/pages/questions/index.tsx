import styles from './page.module.scss'
import Header from '@/app/components/header'
import Menu from '@/app/components/menu'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Menu></Menu>
      <h2>Questions</h2>
    </main>
  )
}