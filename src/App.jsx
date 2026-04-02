import React, { useState, useEffect } from 'react';
import './style.css'; // 위에서 작성한 CSS 파일을 임포트합니다.

// 프로젝트 데이터를 배열로 분리하여 관리하기 쉽게 만듭니다.
const PROJECT_DATA = [
  {
    title: "11JOB (일일잡) 💼",
    link: "https://github.com/jeeneep/11JOB-backend.git",
    date: "2025.09 - 2025.12",
    tags: ["Spring Boot", "AWS EC2/S3", "MySQL", "HTTPS"],
    summary: "취준생을 위한 올인원 일정 및 자료 관리 웹서비스",
    details: [
      "AWS EC2, RDS, S3 인프라 구축 및 HTTPS 보안 통신 환경 설정",
      "S3 스토리지를 활용한 대용량 파일 업로드 및 연관 데이터 일괄 삭제 로직 설계",
      "서울시 공공데이터 API 연동을 통한 실시간 채용 정보 수집 및 저장"
    ]
  },
  {
    title: "MallangOrder (말랑오더) 🗣️",
    link: "https://github.com/jeeneep/mallang-order-backend.git",
    date: "2025.03 - 2025.06",
    tags: ["Spring Boot", "Redis", "AI Integration", "JWT"],
    summary: "AI 음성 인식 기능을 탑재한 배리어 프리 키오스크 시스템",
    details: [
      "Flask AI 서버와 RESTful 통신 및 의도(Intent) 분석 기반의 안정적인 주문 처리 아키텍처 구현",
      "Spring Security와 Redis를 활용한 토큰 관리 및 인증 시스템 전담 구현으로 보안성 강화",
      "JPA와 QueryDSL을 활용한 데이터 조회 최적화 및 계층형 설계 기반의 관리자 CRUD 구현"
    ]
  },
  {
    title: "YOZI (요즘지출, 요지) 💸",
    link: "https://github.com/jeeneep/yozi-frontend.git",
    date: "2025.06 - 2025.08",
    tags: ["React", "Zustand", "Recharts", "Vercel"],
    summary: "청년층을 위한 맞춤형 소비 패턴 분석 및 데이터 시각화 가계부 서비스",
    details: [
      "Styled-components 기반 반응형 UI 설계 및 재사용 가능한 컴포넌트 아키텍처 구축",
      "Recharts를 활용한 소비 지표 시각화 및 점수 기반 맞춤형 피드백 시스템 구현",
      "Zustand를 활용한 전역 상태 관리 및 REST API 연동으로 데이터 무결성 확보",
      "Vercel 기반 CI/CD 파이프라인 구축을 통한 프론트엔드 빌드 및 배포 자동화"
    ]
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 상태가 변경될 때마다 body 태그에 클래스를 토글합니다.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">jeeneep</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#info">Contacts & Projects</a></li>
            <li>
              <button 
                className="dark-mode-toggle" 
                title="다크모드 전환"
                onClick={toggleTheme}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-text">
            <h1>Hi there! 👋<br /><span>Backend 개발자,</span><br /><span>박지은입니다.</span></h1>
            <p className="description">
              보이지 않는 곳에서의 정밀함으로, 시스템의 신뢰를 구현합니다.<br />
              안정적인 아키텍처와 효율적인 데이터 처리에 가치를 둡니다.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://velog.velcdn.com/images/jeeneep/post/46c3f393-f731-42b6-87b5-5fd95d3f6a53/image.jpg" 
              alt="Profile"
              onContextMenu={(e) => e.preventDefault()} 
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
        </section>

        <section id="info" className="info-section">
          <aside className="contact-area">
            <div className="contact-card">
              <h2 className="section-label">Contacts</h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📧</span>
                  <div className="contact-info">
                    <strong>Email</strong>
                    <span className="copyable" title="클릭하여 복사">jeeneep@naver.com</span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </span>
                  <div className="contact-info">
                    <strong>GitHub</strong>
                    <a href="https://github.com/jeeneep" target="_blank" rel="noopener noreferrer">github.com/jeeneep</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon">📝</span>
                  <div className="contact-info">
                    <strong>Blog</strong>
                    <a href="https://velog.io/@jeeneep" target="_blank" rel="noopener noreferrer">velog.io/@jeeneep</a>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <article className="projects-area">
            <div className="projects-card">
              <h2 className="section-label">Featured Projects</h2>
              <div className="projects-container">
                {PROJECT_DATA.map((project, index) => (
                  <div className="project-item" key={index}>
                    <div className="project-header">
                      <div className="project-title-group">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <h3>{project.title}</h3>
                        </a>
                        <span className="project-date">{project.date}</span>
                      </div>
                      <div className="tech-tags">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                    <ul className="project-details">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer>
        <p>© 2026 jeeneep. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;