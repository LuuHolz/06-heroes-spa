import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  const searchName = name.toLocaleLowerCase().trim();

  if (searchName.length === 0) return [];

  return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(searchName));
};
