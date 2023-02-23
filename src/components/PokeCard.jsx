
import './postCard.css'

export const PokeCard = (pokemons) =>{
    const pokemon = pokemons.pokemon
    const types = pokemons.pokemon.data.types
 
    function TypeHandler(){
        if (types[1]){

           return types[0].type.name +" / "+ types[1].type.name;
        }
       
         return types[0].type.name 
        
    }
    return(
        <div className="pokeCard" key={pokemon.id}>
        <img src={pokemon.data.sprites.front_default} alt={`pokemon ${pokemon.data.name}`}/>

        <div className="cardText">
            <h2>{pokemon.data.name}</h2>
            <p>{TypeHandler()}</p>
        </div>
     </div>
    );
}