import Link from 'next/link'
import styles from './page.module.scss'

const getQuestions = async () => {
  const res = await fetch('https://api.jsonbin.io/v3/b/6515669d54105e766fbaecde');

  if (!res.ok) {
      throw new Error("Could not retrieve questions");
  }
  console.log(res.json())
  return res.json();
}

const Questions = async () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.questionsHeader}>Questions</h2>
      <p className={styles.questionNumber}>Question number 1/2</p>
      <p className={styles.question}>What is the name of Liverpools famous entrance hymn?</p>
      <ul className={styles.answerList}> 
        <label className={styles.answer} htmlFor="1">You&lsquo;ll never walk alone
          <input type="radio" id="1" name="answer" value="You'll never walk alone"/>
        </label>
        
        <label className={styles.answer} htmlFor="2">You&lsquo;ll never walk again
          <input type="radio" id="2" name="answer" value="You'll never walk again"/>
        </label>
        
        <label className={styles.answer} htmlFor="3">You&lsquo;ll always walk alone
          <input type="radio" id="3" name="answer" value="You'll always walk alone"/>
        </label>
      
        <label className={styles.answer} htmlFor="4">They don&lsquo;t have any
          <input type="radio" id="4" name="answer" value="They don't have any"/>
        </label>
      </ul>
      <Link className={styles.link} href={'/questions'}>
            <button className={styles.nextButton}>Next question</button>
        </Link>
    </div>
  )
}
export default Questions;