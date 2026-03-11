import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/motion'
import styles from './SectionTitle.module.css'

const SectionTitle = ({ eyebrow, title, subtitle, dark = false }) => (
  <motion.div
    className={`${styles.header} ${dark ? styles.dark : ''}`}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
  >
    {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </motion.div>
)

export default SectionTitle
