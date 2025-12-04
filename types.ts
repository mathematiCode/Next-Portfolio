export interface Book {
  title: string;
  author: string;
}

export interface SnapshotType {
  startDate: string;
  endDate: string;
  learning: string;
  projects: string[];
  books: Book[];
  questions: string[];
  point: { x: number; y: number };
  timeframe: string;
}
