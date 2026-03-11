import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from './utils/motion'

// Layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import SideNav from './components/layout/SideNav'

// Common
import SectionTitle from './components/common/SectionTitle'
import Card from './components/common/Card'
import CountUp from './components/common/CountUp'
import StepItem from './components/common/StepItem'
import Badge from './components/common/Badge'
import QuoteBlock from './components/common/QuoteBlock'

// Sections
import HeroSection from './components/sections/HeroSection'

// Data
import {
  PROBLEMS, CHANGES, FLOW_STEPS,
  PHASE1_STEPS, PHASE2_STEPS, PHASE2_HIGHLIGHTS,
  CONTENT_STRUCTURE, IP_TYPES, EFFECT_ROWS, KPI_CARDS,
  TECH_STACK, EXPANSIONS,
} from './data/content'

import s from './components/sections/Sections.module.css'

// ----- Section: Problem -----
const ProblemSection = () => (
  <section id="problem" className={`${s.section} ${s.light}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Problem" title="기존 방식의 한계" subtitle="수작업 기반 업무 프로세스가 만들어낸 4가지 구조적 문제" />
      <motion.div className={s.grid2} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {PROBLEMS.map((p, i) => <Card key={i} {...p} />)}
      </motion.div>
    </div>
  </section>
)

// ----- Section: Quote 1 -----
const QuoteSection = () => (
  <section id="quote1" className={`${s.section} ${s.dark}`} style={{ padding: '120px 0' }}>
    <div className={s.container}>
      <QuoteBlock text={"반복되는 수작업은\n단순한 비효율이 아니라,\n성장을 가로막는 구조적 한계였다."} author="자동화 프로젝트 시작" />
    </div>
  </section>
)

// ----- Section: Change -----
const ChangeSection = () => (
  <section id="change" className={`${s.section} ${s.alt}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="After Automation" title="자동화 후의 변화" subtitle="4주간의 수작업이 4분으로 단축된 새로운 워크플로우" />
      <motion.div className={s.grid2} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {CHANGES.map((c, i) => <Card key={i} {...c} />)}
      </motion.div>
    </div>
  </section>
)

// ----- Section: Flow -----
const flowTimelineStyle = {
  overflowX: 'auto',
  overflowY: 'visible',
  WebkitOverflowScrolling: 'touch',
  padding: '16px calc(50vw - 540px) 48px',
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  boxSizing: 'border-box',
}
const flowStepsStyle = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '0',
  alignItems: 'stretch',
  width: 'max-content',
  padding: '8px 0',
}
const flowStepBase = {
  background: '#fff',
  border: '2px solid var(--color-border)',
  borderRadius: 'var(--card-radius)',
  padding: '36px 32px',
  width: '360px',
  minWidth: '360px',
  maxWidth: '360px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  flexShrink: 0,
  boxSizing: 'border-box',
}
const flowStepActive = {
  ...flowStepBase,
  borderColor: 'var(--color-primary)',
  background: 'var(--color-primary-light)',
  transform: 'translateY(-6px)',
  boxShadow: '0 12px 32px rgba(2,128,144,0.18)',
}
const flowArrowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  color: 'var(--color-primary)',
  fontSize: '28px',
  flexShrink: 0,
}

const FlowSection = () => {
  const [active, setActive] = useState(0)
  const targetRef = useRef(null)

  // 스크롤 진행도를 가져옵니다. targetRef(해당 섹션)가 뷰포트를 지나가는 동안 0 -> 1 변화
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // 카드가 4개(360px*4 + 화살표)이므로 가로로 이동해야 할 거리가 대략 컨테이너 너비 정도입니다.
  // 여백을 포함하여 x 위치를 -65% 정도까지 왼쪽으로 이동시킵니다.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % FLOW_STEPS.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="flow" ref={targetRef} className={`${s.section} ${s.light}`} style={{ height: '300vh', padding: '0', overflow: 'visible' }}>
      {/* 뷰포트에 100vh로 고정되어 가로 스크롤 애니메이션을 담당하는 영역 */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>

        <div className={s.container} style={{ marginBottom: '40px' }}>
          <SectionTitle eyebrow="System Flow" title="시스템 전체 흐름" subtitle="스크롤을 내리면 4단계 파이프라인이 전개됩니다" />
        </div>

        {/* 좌측은 1080px 중앙 컨테이너와 일치시키기 위한 패딩 */}
        <div style={{ width: '100vw', paddingLeft: 'calc(50vw - 540px)', boxSizing: 'border-box' }}>

          <motion.div style={{ x, display: 'flex', flexWrap: 'nowrap', gap: '0', alignItems: 'stretch', width: 'max-content', padding: '16px 0 48px' }}>
            {FLOW_STEPS.map((step, i) => (
              <React.Fragment key={i}>
                <div
                  style={{
                    ...(active === i ? flowStepActive : flowStepBase),
                    // 마지막 아이템 뒤에 충분한 여백을 주어 끝까지 스크롤 되었을 때 우측 여백 확보
                    marginRight: i === FLOW_STEPS.length - 1 ? 'calc(50vw)' : '0'
                  }}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '10px' }}>{step.num}</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px', lineHeight: 1.4 }}>{step.title}</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-text-sub)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{step.desc}</div>
                </div>
                {i < FLOW_STEPS.length - 1 && <div style={flowArrowStyle}>→</div>}
              </React.Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ----- Section: Phase1 -----
const Phase1Section = () => (
  <section id="phase1" className={`${s.section} ${s.alt}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Phase 1" title="데이터 자동 수집" subtitle="KIPRIS API와 n8n을 활용한 완전 자동 수집 파이프라인" />
      <motion.div className={s.stepsGrid} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {PHASE1_STEPS.map((step, i) => (
          <motion.div key={i} variants={staggerItem}><StepItem {...step} /></motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ----- Section: Review -----
const ReviewSection = () => (
  <section id="review" className={`${s.section} ${s.light}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Human-in-the-Loop" title="담당자 검토 프로세스" subtitle="AI 자동화 사이에 담당자 판단을 삽입하는 하이브리드 구조" />
      <motion.div className={s.grid2} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        <motion.div className={s.reviewCard} variants={staggerItem}>
          <div className={s.reviewIconWrap}>📊</div>
          <div className={s.reviewTitle}>구글 시트 체크박스 선택</div>
          <div className={s.reviewBody}>수집된 건 중 홈페이지 게시 적합 여부를<br />담당자가 체크박스로 선택.<br />별도 CMS 없이 스프레드시트에서 바로 검토.</div>
          <div className={s.reviewTag}>✓ 직관적 UI · 별도 교육 불필요</div>
        </motion.div>
        <motion.div className={s.reviewCard} variants={staggerItem}>
          <div className={s.reviewIconWrap}>🔔</div>
          <div className={s.reviewTitle}>슬랙 리마인드 알림</div>
          <div className={s.reviewBody}>수집 완료 시 슬랙으로 검토 요청 발송.<br />마감 D-1 자동 리마인드로<br />누락 가능성을 원천 차단.</div>
          <div className={s.reviewTag}>✓ 알림 자동화 · 누락 제로</div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// ----- Section: Phase2 -----
const Phase2Section = () => (
  <section id="phase2" className={`${s.section} ${s.alt}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Phase 2" title="AI 콘텐츠 생성" subtitle="Gemini AI가 특허 데이터를 업무사례 콘텐츠로 자동 변환" />
      <div className={s.phase2Wrapper}>
        <motion.div className={s.stepsGrid1} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          {PHASE2_STEPS.map((step, i) => (
            <motion.div key={i} variants={staggerItem}><StepItem {...step} /></motion.div>
          ))}
        </motion.div>
        <motion.div className={s.highlightBox} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <div className={s.highlightTitle}>🎯 핵심 포인트</div>
          <div className={s.highlightPoints}>
            {PHASE2_HIGHLIGHTS.map((h, i) => <div key={i} className={s.highlightPoint}>{h}</div>)}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

// ----- Section: Content Structure -----
const ContentStructureSection = () => (
  <section id="content-structure" className={`${s.section} ${s.dark}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Content Structure" title="AI 생성 콘텐츠 구조" subtitle="표준화된 5개 구성 요소로 업무사례 콘텐츠를 자동 생성" dark />
      <motion.div className={s.contentList} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {CONTENT_STRUCTURE.map((item, i) => (
          <motion.div key={i} className={s.contentItem} variants={staggerItem}>
            <div className={s.contentNum}>{item.num}</div>
            <div className={s.contentTitle}>{item.title}</div>
            <div className={s.contentDesc}>{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ----- Section: Scale -----
const ScaleSection = () => (
  <section id="scale" className={`${s.section} ${s.light}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Scale" title="수집 대상 및 규모" subtitle="매주 80건의 IP 데이터를 4가지 유형으로 균등 수집" />
      <div className={s.scaleWrapper}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <CountUp target={80} suffix="" label="건/주 — 주간 자동 수집 건수" />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          <table className={s.ipTable}>
            <thead><tr><th>IP 유형</th><th>주간 수집</th><th>비율</th></tr></thead>
            <tbody>
              {IP_TYPES.map((t, i) => (
                <tr key={i}>
                  <td>{t.emoji} {t.name}</td>
                  <td><span className={s.ipBadge}>{t.count}</span></td>
                  <td>{t.ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  </section>
)

// ----- Section: Effect -----
const EffectSection = () => (
  <section id="effect" className={`${s.section} ${s.alt}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Results" title="자동화 전후 효과 비교" subtitle="수치로 증명하는 자동화의 임팩트" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        <table className={s.effectTable}>
          <thead><tr><th>지표</th><th>자동화 이전</th><th>자동화 이후</th><th>개선 효과</th></tr></thead>
          <tbody>
            {EFFECT_ROWS.map((row, i) => (
              <motion.tr key={i} custom={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <td>{row.label}</td>
                <td className={s.before}>{row.before}</td>
                <td>{row.after}</td>
                <td><Badge>{row.badge}</Badge></td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <div className={s.kpiGrid}>
        {KPI_CARDS.map((kpi, i) => (
          <motion.div key={i} className={s.kpiCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} transition={{ delay: i * 0.1 }}>
            <CountUp target={kpi.value} />
            <div className={s.kpiUnit}>{kpi.unit}</div>
            <div className={s.kpiLabel}>{kpi.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ----- Section: Summary Quote -----
const SummaryQuoteSection = () => (
  <section id="quote2" className={`${s.section} ${s.dark}`} style={{ padding: '120px 0' }}>
    <div className={s.container}>
      <QuoteBlock text={"40분 걸리던 작업이 1분으로,\n담당자는 더 가치 있는 일에 집중한다."} author="자동화 시스템 도입 후 변화" />
    </div>
  </section>
)

// ----- Section: Tech Stack -----
const TechStackSection = () => (
  <section id="tech" className={`${s.section} ${s.dark}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Tech Stack" title="사용 기술" subtitle="안정적이고 확장 가능한 기술 스택으로 구축된 파이프라인" dark />
      <motion.div className={s.grid3} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {TECH_STACK.map((t, i) => (
          <motion.div key={i} className={s.techCard} variants={staggerItem} whileHover={{ y: -4 }}>
            <div className={s.techIcon}>{t.icon}</div>
            <div className={s.techName}>{t.name}</div>
            <div className={s.techRole}>{t.role}</div>
            <div className={s.techDesc}>{t.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)

// ----- Section: Expansion -----
const ExpansionSection = () => (
  <section id="expansion" className={`${s.section} ${s.light}`}>
    <div className={s.container}>
      <SectionTitle eyebrow="Scalability" title="확장 가능성" subtitle="현재 구축된 자동화 파이프라인을 기반으로 한 다음 단계" />
      <motion.div className={s.grid2} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
        {EXPANSIONS.map((e, i) => <Card key={i} {...e} />)}
      </motion.div>
    </div>
  </section>
)

// ----- App Root -----
const App = () => (
  <>
    <ScrollProgress />
    <Header />
    <SideNav />
    <main>
      <HeroSection />
      <ProblemSection />
      <QuoteSection />
      <ChangeSection />
      <FlowSection />
      <Phase1Section />
      <ReviewSection />
      <Phase2Section />
      <ContentStructureSection />
      <ScaleSection />
      <EffectSection />
      <SummaryQuoteSection />
      <TechStackSection />
      <ExpansionSection />
    </main>
    <Footer />
  </>
)

export default App
