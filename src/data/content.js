// data/content.js — 모든 텍스트/데이터 중앙 관리

export const HERO = {
  badge: 'Portfolio',
  title: ['업무사례', '자동화 시스템'],
  sub: 'KIPRIS + AI 기반\n특허 업무사례 콘텐츠 자동화 파이프라인',
  name: '정성언',
  role: 'CEO staff · 전략기획',
}

export const PROBLEMS = [
  { icon: '⏰', title: '반복적 수작업', body: '매주 KIPRIS에서 특허 데이터를\n수동 검색·복사·붙여넣기로 정리.\n담당자 시간 대부분이 단순 반복에 소진.' },
  { icon: '📉', title: '품질 불일치', body: '작성자마다 형식과 품질이 상이.\n일관된 스타일 유지가 어렵고\n리뷰 과정에서 수정이 반복.' },
  { icon: '🐢', title: '느린 업데이트 주기', body: '수집→정리→작성→검토→게시가\n모두 수작업으로 진행.\n최신 특허 정보 반영이 지연.' },
  { icon: '🔒', title: '확장성 부재', body: '처리 건수를 늘리려면\n인력을 추가해야 하는 구조.\n리소스가 선형 증가하는 한계.' },
]

export const CHANGES = [
  { icon: '⚡', title: '완전 자동 수집', body: 'KIPRIS API로 특허·실용신안·\n상표·디자인 데이터를 자동 수집.\n수동 검색이 완전히 제거.' },
  { icon: '🤖', title: 'AI 콘텐츠 자동 생성', body: 'Gemini AI가 데이터를 분석해\n일관된 형식의 업무사례를 생성.\n품질 균일, 재현 가능.' },
  { icon: '✅', title: '담당자 검토 프로세스', body: '구글 시트에서 체크박스로 검토.\n슬랙 자동 알림으로\n누락을 원천 방지.' },
  { icon: '🚀', title: '홈페이지 자동 게시', body: '검토 완료 콘텐츠를\nn8n 파이프라인으로 자동 게시.\n수집~게시 전 과정 연결.' },
]

export const FLOW_STEPS = [
  { num: 'Phase 01', title: '데이터 자동 수집', desc: 'KIPRIS API + n8n 스케줄러로\n특허 데이터를 자동 수집하여\n구글 시트에 저장' },
  { num: 'Review', title: '담당자 검토', desc: '구글 시트 체크박스로 선택 검토\n슬랙 리마인드 알림으로\n누락 방지' },
  { num: 'Phase 02', title: 'AI 콘텐츠 생성', desc: 'Gemini AI가 특허 데이터 분석\n구조화된 업무사례 콘텐츠\n자동 생성' },
  { num: 'Publish', title: '홈페이지 게시', desc: '검토 완료 콘텐츠를\n홈페이지에 자동 게시\n전 과정 자동화 완료' },
]

export const PHASE1_STEPS = [
  { num: '01', title: 'n8n 스케줄러 설정', desc: '매주 월요일 오전 9시 자동 실행\nCron 표현식으로 주기 관리' },
  { num: '02', title: 'KIPRIS API 호출', desc: '특허·실용신안·상표·디자인\nIP 유형별 최신 20건씩 자동 수집' },
  { num: '03', title: '데이터 전처리', desc: '원시 데이터 정규화, 중복 제거\n필드 매핑으로 구조화' },
  { num: '04', title: '구글 시트 저장', desc: '전처리 완료 데이터를 자동 기록\n검토용 체크박스 컬럼 추가' },
  { num: '05', title: '슬랙 알림 발송', desc: '수집 완료 시 자동 알림 발송\n처리 건수·오류 현황 포함' },
  { num: '06', title: '오류 핸들링', desc: 'API 실패 시 재시도 로직\n에러 로그 자동 기록' },
]

export const PHASE2_STEPS = [
  { num: '01', title: '검토 완료 데이터 수집', desc: '구글 시트에서 체크된 항목만\n자동 필터링하여 AI 처리 대상 확정' },
  { num: '02', title: 'Gemini AI 프롬프트 실행', desc: '특허 정보를 컨텍스트로 삽입\n구조화 프롬프트로 콘텐츠 생성' },
  { num: '03', title: '콘텐츠 구조화', desc: 'AI 응답을 파싱하여\n제목·요약·본문의 정형 구조로 변환' },
  { num: '04', title: '품질 검증', desc: '콘텐츠 길이·키워드 자동 검증\n기준 미달 시 재생성 실행' },
  { num: '05', title: '홈페이지 자동 게시', desc: 'CMS API로 자동 게시\n완료 후 슬랙 알림 발송' },
]

export const PHASE2_HIGHLIGHTS = [
  '구조화된 프롬프트 엔지니어링으로 일관된 품질 확보',
  'Rate Limit 대응을 위한 순차 처리 + 재시도 로직',
  'IP 유형별 맞춤 프롬프트 템플릿 분기',
  '생성 콘텐츠 자동 품질 검증 게이트',
  '전체 처리 과정 로그 자동 기록',
]

export const CONTENT_STRUCTURE = [
  { num: '01', title: '업무사례 제목', desc: 'IP 유형·기술 분야·핵심 키워드 조합\nSEO 최적화 제목 자동 생성' },
  { num: '02', title: '핵심 요약', desc: '50자 이내 핵심 내용 요약\n목록형 뷰용 원라인 설명' },
  { num: '03', title: '주요 내용 서술', desc: '기술적 의의, 업무 활용 포인트를\n300~500자로 상세 서술' },
  { num: '04', title: 'IP 유형별 특화 설명', desc: '특허/실용신안/상표/디자인별\n전문 어휘와 포인트로 작성' },
  { num: '05', title: '태그 및 메타데이터', desc: '기술 분야, 출원인 유형, 연도 등\n검색·필터링용 태그 자동 추출' },
]

export const IP_TYPES = [
  { emoji: '📜', name: '특허', count: '20건', ratio: '25%' },
  { emoji: '🔧', name: '실용신안', count: '20건', ratio: '25%' },
  { emoji: '™', name: '상표', count: '20건', ratio: '25%' },
  { emoji: '🎨', name: '디자인', count: '20건', ratio: '25%' },
]

export const EFFECT_ROWS = [
  { label: '콘텐츠 작성 시간', before: '건당 약 40분', after: '건당 약 1분', badge: '↑ 40배 단축' },
  { label: '주간 처리 건수', before: '담당자 역량에 의존', after: '80건 안정적 처리', badge: '↑ 처리량 대폭 증가' },
  { label: '콘텐츠 품질 일관성', before: '작성자마다 상이', after: '표준 형식 100% 유지', badge: '↑ 95% 품질 달성' },
  { label: '업데이트 주기', before: '불규칙 (수작업 의존)', after: '매주 월요일 정기 게시', badge: '↑ 정기화 완료' },
  { label: '담당자 직접 투입 시간', before: '주당 수 시간', after: '검토 30분/주', badge: '↑ 90% 이상 절감' },
]

export const KPI_CARDS = [
  { value: 40, unit: '배', label: '작업 시간 단축' },
  { value: 95, unit: '%', label: '품질 일관성' },
  { value: 80, unit: '건/주', label: '정기 자동 처리' },
]

export const TECH_STACK = [
  { icon: '⚙️', name: 'n8n', role: '워크플로우 자동화', desc: '노코드/로우코드 기반 자동화 플랫폼. 스케줄러, API 연동, 조건 분기, 에러 핸들링을 시각적으로 구성.' },
  { icon: '🔍', name: 'KIPRIS API', role: '데이터 소스', desc: '한국 특허청 공식 API. 특허·실용신안·상표·디자인 데이터를 구조화된 형태로 제공.' },
  { icon: '🤖', name: 'Gemini AI', role: '콘텐츠 생성', desc: 'Google의 최신 LLM. 특허 데이터를 기반으로 자연스러운 업무사례 콘텐츠를 생성.' },
  { icon: '📊', name: 'Google Sheets', role: '검토 인터페이스', desc: '담당자 검토 플랫폼이자 중간 데이터 저장소. 체크박스 기반 직관적 승인 워크플로우.' },
  { icon: '💬', name: 'Slack', role: '알림 채널', desc: '수집 완료, 검토 요청, 게시 완료 등 파이프라인 단계별 자동 알림 발송.' },
  { icon: '🌐', name: 'CMS API', role: '자동 게시', desc: '홈페이지 콘텐츠 관리 시스템 API 연동. 검토 완료 콘텐츠를 프로그래밍 방식으로 자동 게시.' },
]

export const EXPANSIONS = [
  { icon: '🌍', title: '해외 IP 데이터 연동', body: 'USPTO, EPO 등\n해외 특허청 API 연동으로\n글로벌 IP 트렌드 자동 수집' },
  { icon: '📈', title: '트렌드 분석 자동화', body: '축적된 IP 데이터 기반\n기술 분야별 출원 트렌드\n동향 리포트 자동 생성' },
  { icon: '🔔', title: '고객사 맞춤 알림', body: '고객사 관심 기술 분야·\n경쟁사 동향 모니터링\nIP 정보 맞춤 발송' },
  { icon: '📱', title: '멀티채널 배포', body: '뉴스레터, 카카오톡,\n링크드인 등 다양한 채널로\n콘텐츠 자동 멀티 배포' },
]

export const NAV_SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'problem', label: '문제 인식' },
  { id: 'quote1', label: '핵심 인사이트' },
  { id: 'change', label: '변화' },
  { id: 'flow', label: '시스템 흐름' },
  { id: 'phase1', label: 'Phase 1' },
  { id: 'review', label: '담당자 검토' },
  { id: 'phase2', label: 'Phase 2' },
  { id: 'content-structure', label: '콘텐츠 구조' },
  { id: 'scale', label: '수집 규모' },
  { id: 'effect', label: '효과' },
  { id: 'quote2', label: '효과 요약' },
  { id: 'tech', label: '기술 스택' },
  { id: 'expansion', label: '확장 가능성' },
]
