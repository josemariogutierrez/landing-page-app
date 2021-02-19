import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/images/logo-full.svg"
          alt="Better Paint banner image"
          className={styles.logo}
        />
      </div>
      <img
        src="/images/icon-shopping-bag.svg"
        alt="Better Paint banner image"
        className={styles.shopIcon}
      />
    </header>
  )
}

export default Header;
