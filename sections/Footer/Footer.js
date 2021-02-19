import styles from './Footer.module.scss'

const footerLinks = [
  {
    title: 'Shop',
    className: styles.footerColumn,
    links: ['Face Paint', 'Craft Paint', 'Spray Paint']
  },
  {
    title: 'Resources',
    className: styles.footerColumn,
    links: ['Blog', 'FAQ', 'Contact Us']
  },
  {
    title: 'Company',
    className: styles.footerColumn,
    links: ['Privacy Policy', 'Terms of use', 'About Us', 'Join the Team']
  },
  {
    title: 'Shop',
    className: styles.footerColumn,
    links: ['Face Paint', 'Craft Paint', 'Spray Paint']
  },
  {
    title: '',
    className: styles.footerLastColumn,
    links: ['© 2020 BetterPaint', 'All Rights Reserved']
  }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerRow}`}>
        {footerLinks.map(({title, links, className}, index)=>
          <div className={className} key={index}>
            <p className={styles.columnTitle}>{title}</p>
            <ul className={styles.links}>
              {links.map((link, index)=>
                <li className={styles.listItem} key={index}>
                  <a href="/">{link}</a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer;
