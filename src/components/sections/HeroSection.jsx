import { motion } from 'framer-motion'
import { HERO } from '../../data/content'
import styles from './HeroSection.module.css'

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: 0.8 + i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
}

const AnimatedText = ({ text, className }) => (
  <span className={className}>
    {text.split('').map((char, i) => (
      <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </span>
)

const HeroSection = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.noise} />
    <div className={styles.glow} />

    {/* 떠다니는 파티클 */}
    <div className={styles.particles}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={styles.particle} style={{
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--size': `${3 + Math.random() * 5}px`,
          '--dur': `${6 + Math.random() * 8}s`,
          '--delay': `${Math.random() * 5}s`,
        }} />
      ))}
    </div>

    {/* 궤도 링 */}
    <div className={styles.orbitRing}><div className={styles.orbitDot} /></div>
    <div className={styles.orbitRing2}><div className={styles.orbitDot} /></div>

    <div className={styles.content}>
      {/* 배지 */}
      <motion.div className={styles.badge}
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.pulse} />
        {HERO.badge}
      </motion.div>

      {/* 타이틀 — 글자 단위 3D 등장 */}
      <h1 className={styles.title}>
        <AnimatedText text={HERO.title[0]} />
        <br />
        <AnimatedText text={HERO.title[1]} className={styles.teal} />
      </h1>

      {/* 서브타이틀 — 밑에서 페이드업 */}
      <motion.p className={styles.sub}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
      >
        {HERO.sub.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
      </motion.p>

      {/* 정보 카드 — 글래스 효과 */}
      <motion.div className={styles.meta}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 2.2 }}
      >
        <div className={styles.avatar}>정</div>
        <div>
          <div className={styles.name}>{HERO.name}</div>
          <div className={styles.role}>{HERO.role}</div>
        </div>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
      >
        <span>↓</span>Scroll
      </motion.div>
    </div>
  </section>
)

export default HeroSection
