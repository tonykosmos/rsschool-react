export interface Person {
  name: string;
  mass: string;
  height: string;
  birth_year: string;
  hair_color: string;
  skin_color?: string;
  gender?: string;
  eye_color?: string;
  created?: string;
  edited?: string;
  url?: string;
}

export interface ApiResponse {
  count: number;
  previous?: string;
  next?: string;
  results: Person[];
}

export interface LocalContextType {
  sendDetailsQuery(url: string): void;
}
