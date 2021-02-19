import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerRow}`}>
        <div className={`${styles.footerColumn}`}>
          <p className={styles.columnTitle}>Shop</p>
          <ul className={styles.links}>
            <li className={styles.listItem}><a href="/">Face Paint</a></li>
            <li className={styles.listItem}><a href="/">Craft Paint</a></li>
            <li className={styles.listItem}><a href="/">Spray Paint</a></li>
          </ul>
        </div>
        <div className={`${styles.footerColumn}`}>
          <p className={styles.columnTitle}>Resources</p>
          <ul className={styles.links}>
            <li className={styles.listItem}><a href="/">Blog</a></li>
            <li className={styles.listItem}><a href="/">FAQ</a></li>
            <li className={styles.listItem}><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className={`${styles.footerColumn}`}>
          <p className={styles.columnTitle}>Company</p>
          <ul className={styles.links}>
            <li className={styles.listItem}><a href="/">Privacy Policy</a></li>
            <li className={styles.listItem}><a href="/">Terms of use</a></li>
            <li className={styles.listItem}><a href="/">About Us</a></li>
            <li className={styles.listItem}><a href="/">Join the Team</a></li>
          </ul>
        </div>
        <div className={`${styles.footerLastColumn}`}>
          <p className={styles.columnTitle}></p>
          <ul className={styles.links}>
            <li className={styles.listItem}>© 2020 BetterPaint</li>
            <li className={styles.listItem}>All Rights Reserved</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
