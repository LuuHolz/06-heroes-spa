import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

const HeroList = ( {publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      {heroes.map(heroe => (
          <li key={ heroe.id }>{ heroe.superhero }</li>
      ))
      }
    </>
  );
};

export { HeroList };
