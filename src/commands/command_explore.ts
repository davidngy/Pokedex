import { State } from "src/state"
export async function commandExplore(state: State, ...args: string[]): Promise<void>{
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }
    const locationName = args[0];
    const fetchLocation = await state.pokeapi.fetchLocation(locationName)
    for(const pokemon of fetchLocation.pokemon_encounters) {
        console.log(`- ${pokemon.pokemon.name}`)
    }
}