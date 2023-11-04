export interface Person {
  name: string;
  mass: string;
  height: string;
  birth_year: string;
  hair_color: string;
}

export interface ApiResponse {
  count: number;
  previous?: string;
  next?: string;
  results: Person[];
}
