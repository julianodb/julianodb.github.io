import { ArrowLeft, CircuitBoard, ExternalLink, Globe2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { projects } from './content/projects';

type ProjectDetail = {
  overview: string;
  architectureTitle: string;
  architecture: string[];
  phasesTitle: string;
  phases: { title: string; goal: string; details: string[] }[];
  technicalTitle: string;
  technicalHighlights: string[];
  organizationTitle: string;
  organization: string[];
  componentsTitle?: string;
  componentsIntro?: string;
};

type ProjectImage = {
  src: string;
  altKey: string;
};

type ProjectMedia = {
  phaseMedia: ProjectImage[];
  showcase?: ProjectImage & { eyebrowKey: string };
  summaryGallery?: ProjectImage[];
};

const diagramBase = 'https://julianodb.github.io/electronic_circuits_diagrams';
const ppg2023PhaseMedia: ProjectImage[] = [
  { src: `${diagramBase}/resistance_led.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t1' },
  { src: `${diagramBase}/cny70_circuit.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t2' },
  { src: `${diagramBase}/common_emitter_no_re.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t3' },
  { src: `${diagramBase}/amplifier_non_inverting.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t4' },
  { src: `${diagramBase}/T4a.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t5' },
  { src: `${diagramBase}/opamp_bandpass.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t6' },
  { src: `${diagramBase}/monostable_multivibrator_b.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t7' },
  { src: `${diagramBase}/half_voltage_divider.png`, altKey: 'projectCatalog.ppg2023.phaseImages.t8' },
];

const emg2023PhaseMedia: ProjectImage[] = [
  { src: `${diagramBase}/eight_leds.png`, altKey: 'projectCatalog.emg2023.phaseImages.t1' },
  { src: `${diagramBase}/envelope_detector.png`, altKey: 'projectCatalog.emg2023.phaseImages.t2' },
  { src: `${diagramBase}/eight_leds_plus_control.png`, altKey: 'projectCatalog.emg2023.phaseImages.t3' },
  { src: `${diagramBase}/instrumentation_amplifier.png`, altKey: 'projectCatalog.emg2023.phaseImages.t4' },
  { src: `${diagramBase}/T5_materials.png`, altKey: 'projectCatalog.emg2023.phaseImages.t5' },
  { src: `${diagramBase}/sallen_key_high_2_with_gain.png`, altKey: 'projectCatalog.emg2023.phaseImages.t6' },
  { src: `${diagramBase}/sallen_key_low_2.png`, altKey: 'projectCatalog.emg2023.phaseImages.t7' },
  { src: '/projects/2023-02-emg/G1_top_inverted.png', altKey: 'projectCatalog.emg2023.phaseImages.t7extra' },
  { src: '/projects/2023-02-emg/placa_2_sch.jpg', altKey: 'projectCatalog.emg2023.phaseImages.t8' },
];

const spirometer2024PhaseMedia: ProjectImage[] = [
  { src: `${diagramBase}/resistance_1_led_plus_minus_5_volts.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t1' },
  { src: `${diagramBase}/peak_detector.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t2' },
  { src: `${diagramBase}/T3b.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t3' },
  { src: `${diagramBase}/flux_sensor_2.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t4' },
  { src: `${diagramBase}/active_low_pass.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t5' },
  { src: `${diagramBase}/integrator.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t6' },
  { src: `${diagramBase}/sallen_key_low_2_samevalues.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t7' },
  { src: `${diagramBase}/T8a.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t8' },
  { src: `${diagramBase}/integrator_with_reset.png`, altKey: 'projectCatalog.spirometer2024.phaseImages.t9' },
  { src: '/projects/2024-01-spirometer/20240701_171914.jpg', altKey: 'projectCatalog.spirometer2024.phaseImages.t10' },
];

const thermometer2024PhaseMedia: ProjectImage[] = [
  { src: `${diagramBase}/resistance_led_5.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t1' },
  { src: `${diagramBase}/T2_buzzer.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t2' },
  { src: `${diagramBase}/T3_t_flip_flop.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t3' },
  { src: `${diagramBase}/T4_trigger.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t4' },
  { src: `${diagramBase}/buffer_vbias.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t5' },
  { src: `${diagramBase}/T6_integrator.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t6' },
  { src: `${diagramBase}/active_high_pass2.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t7' },
  { src: `${diagramBase}/T8_multivibrator.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t8' },
  { src: `${diagramBase}/T9_Q8.png`, altKey: 'projectCatalog.thermometer2024.phaseImages.t9' },
  { src: '/projects/2024-02-thermometer/top.jpg', altKey: 'projectCatalog.thermometer2024.phaseImages.t10' },
];

const projectMedia: Record<string, ProjectMedia> = {
  '2023-01-photoplethysmograph': {
    phaseMedia: ppg2023PhaseMedia,
    showcase: {
      src: '/projects/2023-01-photoplethysmograph/ppg-stripboard-components.png',
      altKey: 'projectCatalog.ppg2023.componentImageAlt',
      eyebrowKey: 'projectCatalog.ppg2023.componentEyebrow',
    },
  },
  '2023-02-emg': {
    phaseMedia: emg2023PhaseMedia,
    showcase: {
      src: '/projects/2023-02-emg/G2_joaquin_top_inverted.png',
      altKey: 'projectCatalog.emg2023.componentImageAlt',
      eyebrowKey: 'projectCatalog.emg2023.componentEyebrow',
    },
    summaryGallery: [
      { src: '/projects/2023-02-emg/placa_2_sch.jpg', altKey: 'projectCatalog.emg2023.gallery.placa2' },
      { src: '/projects/2023-02-emg/placa_3_sch.jpg', altKey: 'projectCatalog.emg2023.gallery.placa3' },
      { src: '/projects/2023-02-emg/G1_top_inverted.png', altKey: 'projectCatalog.emg2023.gallery.g1' },
      { src: '/projects/2023-02-emg/G3_top_inverted.png', altKey: 'projectCatalog.emg2023.gallery.g3' },
    ],
  },
  '2024-01-spirometer': {
    phaseMedia: spirometer2024PhaseMedia,
    showcase: {
      src: '/projects/2024-01-spirometer/20240701_170712.jpg',
      altKey: 'projectCatalog.spirometer2024.componentImageAlt',
      eyebrowKey: 'projectCatalog.spirometer2024.componentEyebrow',
    },
    summaryGallery: [
      { src: '/projects/2024-01-spirometer/full_spirometer_sch.png', altKey: 'projectCatalog.spirometer2024.gallery.fullSchematic' },
      { src: '/projects/2024-01-spirometer/spirometer_top.png', altKey: 'projectCatalog.spirometer2024.gallery.top' },
      { src: '/projects/2024-01-spirometer/spirometer_bot.png', altKey: 'projectCatalog.spirometer2024.gallery.bottom' },
      { src: '/projects/2024-01-spirometer/20240701_162627.jpg', altKey: 'projectCatalog.spirometer2024.gallery.stencil' },
    ],
  },
  '2024-02-thermometer': {
    phaseMedia: thermometer2024PhaseMedia,
    showcase: {
      src: '/projects/2024-02-thermometer/top.jpg',
      altKey: 'projectCatalog.thermometer2024.componentImageAlt',
      eyebrowKey: 'projectCatalog.thermometer2024.componentEyebrow',
    },
    summaryGallery: [
      { src: '/projects/2024-02-thermometer/full_circuit_1_sch.jpg', altKey: 'projectCatalog.thermometer2024.gallery.schematic1' },
      { src: '/projects/2024-02-thermometer/full_circuit_2_sch.jpg', altKey: 'projectCatalog.thermometer2024.gallery.schematic2' },
      { src: '/projects/2024-02-thermometer/full_circuit_3_sch.jpg', altKey: 'projectCatalog.thermometer2024.gallery.schematic3' },
      { src: '/projects/2024-02-thermometer/top.jpg', altKey: 'projectCatalog.thermometer2024.gallery.top' },
      { src: '/projects/2024-02-thermometer/bot.jpg', altKey: 'projectCatalog.thermometer2024.gallery.bottom' },
    ],
  },
};

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
              <a href="mailto:julianodawid@gmail.com">
                <Mail aria-hidden="true" size={18} />
                {t('actions.contact')}
              </a>
              <a href="#projects">
                <CircuitBoard aria-hidden="true" size={18} />
                {t('actions.projects')}
              </a>
            </div>
          </div>

          <div className="signal-panel" aria-label={t('hero.visualLabel')}>
            <div className="panel-header">
              <span>{t('visual.course')}</span>
              <span>{t('visual.signal')}</span>
            </div>
            <div className="waveform">
              {Array.from({ length: 42 }).map((_, index) => (
                <span key={index} style={{ '--i': index } as React.CSSProperties} />
              ))}
            </div>
            <div className="board-grid">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section profile-section" aria-labelledby="profile-heading">
        <div>
          <p className="eyebrow">{t('profile.eyebrow')}</p>
          <h2 id="profile-heading">{t('profile.title')}</h2>
        </div>
        <div className="profile-copy">
          <p>{t('profile.paragraphOne')}</p>
          <p>{t('profile.paragraphTwo')}</p>
        </div>
      </section>

      <section className="section cv-grid" aria-labelledby="cv-heading">
        <div>
          <p className="eyebrow">{t('cv.eyebrow')}</p>
          <h2 id="cv-heading">{t('cv.title')}</h2>
        </div>
        <div className="timeline">
          {(t('cv.items', { returnObjects: true }) as string[]).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t('projects.eyebrow')}</p>
            <h2 id="projects-heading">{t('projects.title')}</h2>
          </div>
          <p>{t('projects.intro')}</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div>
                <span className="term">{project.term}</span>
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.summaryKey)}</p>
              </div>
              <span className="card-footer">
                {t('projects.open')}
                <ExternalLink aria-hidden="true" size={16} />
              </span>
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

  const detail = project.detailKey
    ? (t(project.detailKey, { returnObjects: true }) as ProjectDetail)
    : undefined;
  const media = projectMedia[project.slug];
  const phaseMedia = media?.phaseMedia ?? [];

  return (
    <main>
      <nav className="topbar compact" aria-label={t('navigation.primary')}>
        <Link className="back-link" to="/">
          <ArrowLeft aria-hidden="true" size={18} />
          {t('navigation.home')}
        </Link>
        <LanguageSwitcher />
      </nav>
      <article className="project-page">
        <p className="eyebrow">{project.term}</p>
        <h1>{t(project.titleKey)}</h1>
        <p className="lede">{t(project.summaryKey)}</p>

        {detail ? (
          <div className="case-study">
            <section className="case-overview">
              <p>{detail.overview}</p>
            </section>

            {media?.summaryGallery ? (
              <section className="project-gallery" aria-label={t('projectDetail.visualSummary')}>
                {media.summaryGallery.map((image) => (
                  <img key={image.src} src={image.src} alt={t(image.altKey)} loading="lazy" />
                ))}
              </section>
            ) : null}

            {detail.componentsTitle && detail.componentsIntro && media?.showcase ? (
              <section className="component-showcase">
                <img src={media.showcase.src} alt={t(media.showcase.altKey)} />
                <div>
                  <p className="eyebrow">{t(media.showcase.eyebrowKey)}</p>
                  <h2>{detail.componentsTitle}</h2>
                  <p>{detail.componentsIntro}</p>
                </div>
              </section>
            ) : null}

            <section className="detail-panel">
              <h2>{detail.architectureTitle}</h2>
              <ul>
                {detail.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="phase-section">
              <h2>{detail.phasesTitle}</h2>
              <div className="phase-list">
                {detail.phases.map((phase, index) => {
                  const media = phaseMedia[index];
                  return (
                    <section className="phase-card" key={phase.title}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {media ? <img src={media.src} alt={t(media.altKey)} loading="lazy" /> : null}
                      <div>
                        <h3>{phase.title}</h3>
                        <p>{phase.goal}</p>
                        <ul>
                          {phase.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>

            <div className="detail-grid">
              <section>
                <h2>{detail.technicalTitle}</h2>
                <ul>
                  {detail.technicalHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>{detail.organizationTitle}</h2>
                <ul>
                  {detail.organization.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ) : (
          <div className="detail-grid">
            <section>
              <h2>{t('projectDetail.learningArc')}</h2>
              <p>{t(project.learningKey)}</p>
            </section>
            <section>
              <h2>{t('projectDetail.futureContent')}</h2>
              <ul>
                {(t('projectDetail.futureItems', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </article>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
