import { State } from "src/state";


export async function commandMapb(state: State, pageURL?: string): Promise<void>{
    try {
        const pokeLocations = await state.pokeapi.fetchLocations(state.prevLocationsURL);
        console.log()
        for(const loc of pokeLocations.results) {
            console.log(loc.name)
        }
        state.nextLocationsURL = pokeLocations.next;
        state.prevLocationsURL = pokeLocations.previous;
    } catch(err) {
        console.log(err)
    }
    
};