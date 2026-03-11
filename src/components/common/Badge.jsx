import styles from './Badge.module.css'

const Badge = ({ children }) => (
  <span className={styles.badge}>{children}</span>
)

export default Badge
