import styles from './StepItem.module.css'

const StepItem = ({ num, title, desc, dark = false }) => (
  <div className={`${styles.item} ${dark ? styles.dark : ''}`}>
    <div className={styles.num}>{num}</div>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  </div>
)

export default StepItem
