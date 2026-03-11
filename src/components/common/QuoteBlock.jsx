import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/motion'
import styles from './QuoteBlock.module.css'

const QuoteBlock = ({ text, author }) => (
  <motion.div
    className={styles.block}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
  >
    <span className={styles.mark}>&ldquo;</span>
    <p className={styles.text}>{text}</p>
    {author && <div className={styles.author}>— {author}</div>}
  </motion.div>
)

export default QuoteBlock
