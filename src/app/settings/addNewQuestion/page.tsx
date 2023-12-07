import Link from 'next/link'
import styles from './page.module.scss'




export default function AddNew() {
  return (
    <>
        <h1 className={styles.pageTitle}>Add new question</h1>
        <div className={styles.addNewQuestionContainer}>
            <form className={styles.form} action="submit">
                <label className={styles.titleLabel} htmlFor="title">Title: </label>
                <input className={styles.titleInput} type="text" id="title" name="title" />
                <label className={styles.questionLabel} htmlFor="question">Question: </label>
                <input className={styles.questionInput} type="text" id="question" name="question" />
                <label className={styles.categoryLabel} htmlFor="category">Select category
                    <select className={styles.categorySelector} id="category" name="category">
                        <option value="movies">Movies</option>
                        <option value="sport">Sport</option>
                        <option value="celebrities">Celebrities</option>
                        <option value="countries">Countries</option>
                    </select>
                </label>
                <p className={styles.info}>Write the options and mark the correct answer</p>
                <label className={styles.answer1Label} htmlFor="answer1">Option 1: 
                    <input className={styles.answer1Input} type="text" id="answer1" name="answer1" />
                    <input className={styles.answer1Correct} type="radio" name="correctAnswer" value="answer1"/>
                </label>
                <label className={styles.answer2Label} htmlFor="answer2">Option 2: 
                    <input className={styles.answer2Input} type="text" id="answer2" name="answer2" />
                    <input className={styles.answer2Correct} type="radio" name="correctAnswer" value="answer2"/>
                </label>
                <label className={styles.answer3Label} htmlFor="answer3">Option 3: 
                    <input className={styles.answer3Input} type="text" id="answer3" name="answer3" />
                    <input className={styles.answer3Correct} type="radio" name="correctAnswer" value="answer3"/>
                </label>
                <label className={styles.answer4Label} htmlFor="answer4">Option 4: 
                    <input className={styles.answer4Input} type="text" id="answer4" name="answer4" />
                    <input className={styles.answer4Correct} type="radio" name="correctAnswer" value="answer4"/>
                </label>
                <div className={styles.saveButtonContainer}>
                    <button className={styles.saveButton}>Save</button>
                </div>
                
            </form>
        </div>
    </>
  )
}