import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.title}>업무사례 자동화 시스템</div>
    <p className={styles.sub}>
      KIPRIS + AI 기반 콘텐츠 자동화로 반복 업무를 제거하고<br />
      더 가치 있는 일에 집중하는 업무 환경을 구현합니다.
    </p>
    <div className={styles.divider} />
    <p className={styles.credit}>
      Designed &amp; Built by <strong>정성언</strong> · CEO staff (전략기획) · 2025
    </p>
  </footer>
)

export default Footer
