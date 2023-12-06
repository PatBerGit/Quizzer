import Link from 'next/link'
import styles from './page.module.scss'




export default function AddNew() {
  return (
    <>
        <h1 className={styles.pageTitle}>Add new question</h1>
        <div className={styles.addNewQuestionContainer}>
            <form className={styles.form} action="submit">
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" />
                <label htmlFor="question">Question: </label>
                <input type="text" id="question" name="question" />
                <p>Write the options and mark the correct answer</p>
                <label htmlFor="answer1">Option 1: </label>
                <input type="text" id="answer1" name="answer1" />
                <input type="radio" name="correctAnswer" value="answer1"/>
                <label htmlFor="answer2">Option 2: </label>
                <input type="text" id="answer2" name="answer2" />
                <input type="radio" name="correctAnswer" value="answer2"/>
                <label htmlFor="answer3">Option 3: </label>
                <input type="text" id="answer3" name="answer3" />
                <input type="radio" name="correctAnswer" value="answer3"/>
                <label htmlFor="answer4">Option 4: </label>
                <input type="text" id="answer4" name="answer4" />
                <input type="radio" name="correctAnswer" value="answer4"/>

                <button>Save</button>
            </form>
        </div>
    </>
  )
}