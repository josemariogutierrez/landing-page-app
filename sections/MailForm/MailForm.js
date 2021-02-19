import styles from './MailForm.module.scss'

const MailForm = () => {
  return (
    <section className={styles.mailForm}>
      <div className={styles.mailFormContainer}>
        <p className={styles.text}>We send really nice emails.</p>
        <form>
         <div className={styles.inputContainer}>
          <label htmlFor="submitEmail" className={styles.label}>Submit Email</label>
          <input className={styles.input} id="submitEmail" type="email" placeholder="Enter your email address"></input>
          <button className={`btn ${styles.submitBtn}`}>Submit</button>
         </div>
        </form>
      </div>
    </section>
  )
}

export default MailForm;
