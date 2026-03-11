import { motion } from 'framer-motion'
import { staggerItem } from '../../utils/motion'
import styles from './Card.module.css'

const Card = ({ icon, title, body, dark = false, className = '' }) => (
  <motion.div
    className={`${styles.card} ${dark ? styles.dark : ''} ${className}`}
    variants={staggerItem}
    whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
    transition={{ duration: 0.3 }}
  >
    {icon && <div className={styles.icon}>{icon}</div>}
    {title && <div className={styles.title}>{title}</div>}
    {body && <div className={styles.body}>{body}</div>}
  </motion.div>
)

export default Card
