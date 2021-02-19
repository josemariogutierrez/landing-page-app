import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="/images/logo-full.svg"
          alt="Better Paint banner image"
          className={styles.logo}
          width="185px"
          height="40px"
        />
      </div>
      <img
        src="/images/icon-shopping-bag.svg"
        alt="Better Paint banner image"
        className={styles.shopIcon}
        width="30px"
        height="40px"
      />
    </header>
  )
}

export default Header;
