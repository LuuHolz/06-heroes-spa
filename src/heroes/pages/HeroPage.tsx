import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const HeroPage = () => {

  const { heroId } = useParams();

  const hero = useMemo( ()=> getHeroById( heroId ), [ heroId ]); 

  const navigate = useNavigate();

  const onNavigateBack = () => {
    //el -1 navega al historial y a lo anterior
    navigate(-1)
  };


    //si her no existe redireccionarlo a page marvel
    if ( !hero ) {
      return <Navigate to="/marvel"/>
    }

  return (
    <div className="row mt-5">
      <div className="col-4"> 
        <img 
          src={`/assets/imgHeroes/${ heroId }.jpg`} 
          alt={ hero.superhero } 
          className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>


      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
          >
            Regresar
          </button>
      </div>
    </div>
  )
}

export { HeroPage }