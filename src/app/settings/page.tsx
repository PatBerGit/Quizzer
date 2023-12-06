import Link from 'next/link'
import styles from './page.module.scss'




export default function Settings() {
  return (
    <>
        <h1>Settings</h1>
        <Link href={'/settings/addNewQuestion'}>
          <button className={styles.addQuestionButton}>Add new question</button>
        </Link>
    </>
  )
}