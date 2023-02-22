import './postCard.css'

export const PokeCard = (pokemons) =>{
    const pokemon = pokemons.pokemon
    return(
        <div className="pokeCard" key={pokemon.id}>
        <img src={pokemon.data.sprites.front_default} alt={`pokemon ${pokemon.data.name}`}/>
        <h1>{pokemon.data.name}</h1>
    
     </div>
    );
}