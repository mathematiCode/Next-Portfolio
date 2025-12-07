export interface Book {
  title: string;
  author: string;
}

export interface SnapshotType {
  startDate: string;
  endDate: string;
  summary: string;
  learning: string;
  projects: string[];
  books: Book[];
  questions: string[];
  point: { x: number; y: number };
  timeframe: string;
}

export interface ProjectType {
  id: string;
  name: string;
  stack: string[];
  image: string;
  deployed: string;
  github: string;
}
