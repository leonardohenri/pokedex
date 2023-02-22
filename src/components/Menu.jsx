
export const Menu = (setFilterPokemons) =>{
   
    return <input type="text" placeholder="Busca" onChange={(e)=> setFilterPokemons(e.target.value)}/>
}