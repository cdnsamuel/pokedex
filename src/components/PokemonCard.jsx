import "./PokemonCard.css"
import PropTypes from "prop-types"

// prettier-ignore
const PokemonCard = ({pokemon}) => {
  if (pokemon.name === "Pikachu"){
    alert("pika pikachu !!!")
  }
  return (
      <div className="pokemon-card">
        <figure>
          {pokemon.imgSrc? <img className="pokemon-avatar" src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
}

export default PokemonCard
