import { useEffect, useState } from "react"

// custom hook, woohooo
const usePokemonApi = (baseUri) => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchPokemon() {
            setLoading(true);
            const apiResponse = await fetch(`${baseUri}/pokemon`);
            setPokemon(await apiResponse.json());
            setLoading(false);
        }

        fetchPokemon();
    }, [baseUri])

    const catchPokemon = (pokemon) => {
        alert(`You caught pokemon ${pokemon.id}!`);
    }

    return {
        loading,
        pokemon,
        catchPokemon
    }
}

export default usePokemonApi;