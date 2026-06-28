export type Project = {
  slug: string;
  term: string;
  sourceFolder: string;
  titleKey: string;
  summaryKey: string;
  learningKey: string;
  detailKey?: string;
};

export const projects: Project[] = [
  { slug: '2023-01-photoplethysmograph', term: '2023-01', sourceFolder: 'usach projects/Project 01 - 2023-01 - PPG', titleKey: 'projectCatalog.ppg2023.title', summaryKey: 'projectCatalog.ppg2023.summary', learningKey: 'projectCatalog.ppg2023.learning', detailKey: 'projectCatalog.ppg2023.detail' },
  { slug: '2023-02-emg', term: '2023-02', sourceFolder: 'usach projects/Project 02 - 2023-02 - EMG', titleKey: 'projectCatalog.emg2023.title', summaryKey: 'projectCatalog.emg2023.summary', learningKey: 'projectCatalog.emg2023.learning', detailKey: 'projectCatalog.emg2023.detail' },
  { slug: '2024-01-spirometer', term: '2024-01', sourceFolder: 'usach projects/Project 03 - 2024-01 - Spirometer', titleKey: 'projectCatalog.spirometer2024.title', summaryKey: 'projectCatalog.spirometer2024.summary', learningKey: 'projectCatalog.spirometer2024.learning' },
  { slug: '2024-02-thermometer', term: '2024-02', sourceFolder: 'usach projects/Project 04 - 2024-02 - Thermometer', titleKey: 'projectCatalog.thermometer2024.title', summaryKey: 'projectCatalog.thermometer2024.summary', learningKey: 'projectCatalog.thermometer2024.learning' },
  { slug: '2025-01-photoplethysmograph-pcb', term: '2025-01', sourceFolder: 'usach projects/Project 05 - 2025-01 -PPG', titleKey: 'projectCatalog.ppg2025.title', summaryKey: 'projectCatalog.ppg2025.summary', learningKey: 'projectCatalog.ppg2025.learning' },
  { slug: '2025-02-digital-stethoscope', term: '2025-02', sourceFolder: 'usach projects/Project 06 - 2025-02 - Stethoscope', titleKey: 'projectCatalog.stethoscope2025.title', summaryKey: 'projectCatalog.stethoscope2025.summary', learningKey: 'projectCatalog.stethoscope2025.learning' },
];
