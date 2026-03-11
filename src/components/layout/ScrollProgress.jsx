import styles from './ScrollProgress.module.css'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const ScrollProgress = () => {
  const progress = useScrollProgress()
  return <div className={styles.bar} style={{ width: `${progress}%` }} />
}

export default ScrollProgress
