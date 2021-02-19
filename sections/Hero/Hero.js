import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.imageContainer}>
          <img
            src="/images/banner-image.jpg"
            alt="Better Paint banner image"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Squeaky. Clean.&nbsp;Paint.</h1>
          <p className={styles.description}>High-quality, non-toxic paint shipped right to your door.</p>
          <a className="btn" href="https://www.skillshare.com/" target="_blank" rel="noreferrer">
            Shop the collection
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
