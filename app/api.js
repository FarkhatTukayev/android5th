// api.js
const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async () => {
  const res = await fetch(`${BASE_URL}/character`);
  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }
  return await res.json();
};

export const fetchCharacterById = async (id) => {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch character');
  }
  return await res.json();
};

export const fetchLocations = async () => {
  const res = await fetch(`${BASE_URL}/location`);
  if (!res.ok) {
    throw new Error('Failed to fetch locations');
  }
  return await res.json();
};

export const fetchEpisodes = async () => {
  const res = await fetch(`${BASE_URL}/episode`);
  if (!res.ok) {
    throw new Error('Failed to fetch episodes');
  }
  return await res.json();
};
