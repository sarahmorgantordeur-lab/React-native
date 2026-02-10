import axios from "axios";

const API_BASE = "https://thesimpsonsapi.com/api";
const IMAGE_BASE = "https://cdn.thesimpsonsapi.com/500";

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: T[];
}

export interface Character {
  id: number;
  name: string;
  age: number | null;
  gender: string;
  occupation: string;
  portrait_path: string;
  status: string;
  phrases: string[];
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  episode_number: number;
  airdate: string;
  synopsis: string;
  image_path: string;
}

export interface Location {
  id: number;
  name: string;
  image_path: string;
  town: string;
  use: string;
}

export const fetchCharacters = (url?: string): Promise<PaginatedResponse<Character>> =>
  axios.get(url ?? `${API_BASE}/characters`).then(res => res.data);

export const fetchEpisodes = (url?: string): Promise<PaginatedResponse<Episode>> =>
  axios.get(url ?? `${API_BASE}/episodes`).then(res => res.data);

export const fetchLocations = (url?: string): Promise<PaginatedResponse<Location>> =>
  axios.get(url ?? `${API_BASE}/locations`).then(res => res.data);

export const getImageUrl = (path: string) => `${IMAGE_BASE}${path}`;
