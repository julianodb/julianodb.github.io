import { ArrowLeft, BookOpen, CircuitBoard, ExternalLink, Globe2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { projects } from './content/projects';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div className="language-switcher" aria-label={t('language.label')}>
      <Globe2 aria-hidden="true" size={18} />
      {languages.map((language) => (
        <button
          className={i18n.resolvedLanguage?.startsWith(language.code) ? 'active' : ''}
          key={language.code}
          onClick={() => void i18n.changeLanguage(language.code)}
          type="button"
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}

function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label={t('navigation.primary')}>
          <a className="brand" href="#top">JDB</a>
          <LanguageSwitcher />
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t('hero.eyebrow')}</p>
            <h1>{t('hero.title')}</h1>
            <p className="lede">{t('hero.summary')}</p>
            <div className="hero-actions">
              <a href="mailto:julianodawid@gmail.com"><Mail aria-hidden="true" size={18} />{t('actions.contact')}</a>
              <a href="#projects"><CircuitBoard aria-hidden="true" size={18} />{t('actions.projects')}</a>
            </div>
          </div>

          <div className="signal-panel" aria-label={t('hero.visualLabel')}>
            <div className="panel-header"><span>{t('visual.course')}</span><span>{t('visual.signal')}</span></div>
            <div className="waveform">
              {Array.from({ length: 42 }).map((_, index) => (
                <span key={index} style={{ '--i': index } as React.CSSProperties} />
              ))}
            </div>
            <div className="board-grid">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </section>

      <section className="section profile-section" aria-labelledby="profile-heading">
        <div><p className="eyebrow">{t('profile.eyebrow')}</p><h2 id="profile-heading">{t('profile.title')}</h2></div>
        <div className="profile-copy"><p>{t('profile.paragraphOne')}</p><p>{t('profile.paragraphTwo')}</p></div>
      </section>

      <section className="section cv-grid" aria-labelledby="cv-heading">
        <div><p className="eyebrow">{t('cv.eyebrow')}</p><h2 id="cv-heading">{t('cv.title')}</h2></div>
        <div className="timeline">
          {(t('cv.items', { returnObjects: true }) as string[]).map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <div><p className="eyebrow">{t('projects.eyebrow')}</p><h2 id="projects-heading">{t('projects.title')}</h2></div>
          <p>{t('projects.intro')}</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div><span className="term">{project.term}</span><h3>{t(project.titleKey)}</h3><p>{t(project.summaryKey)}</p></div>
              <span className="card-footer">{t('projects.open')}<ExternalLink aria-hidden="true" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <main>
      <nav className="topbar compact" aria-label={t('navigation.primary')}>
        <Link className="back-link" to="/"><ArrowLeft aria-hidden="true" size={18} />{t('navigation.home')}</Link>
        <LanguageSwitcher />
      </nav>
      <article className="project-page">
        <p className="eyebrow">{project.term}</p>
        <h1>{t(project.titleKey)}</h1>
        <p className="lede">{t(project.summaryKey)}</p>
        <div className="detail-grid">
          <section><h2>{t('projectDetail.learningArc')}</h2><p>{t(project.learningKey)}</p></section>
          <section><h2>{t('projectDetail.futureContent')}</h2><ul>{(t('projectDetail.futureItems', { returnObjects: true }) as string[]).map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
        <aside className="artifact-note"><BookOpen aria-hidden="true" size={20} /><p>{t('projectDetail.artifactNote', { folder: project.sourceFolder })}</p></aside>
      </article>
    </main>
  );
}

export default function App() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/projects/:slug" element={<ProjectPage />} /></Routes>;
}
