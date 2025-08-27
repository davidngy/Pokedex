import { State } from "src/state";


export async function commandMap(state: State, pageURL?: string): Promise<void>{
    try {
        const pokeLocations = await state.pokeapi.fetchLocations(state.nextLocationsURL);
   
        for(const loc of pokeLocations.results) {
            console.log(loc.name)
        }
        state.nextLocationsURL = pokeLocations.next;
        state.prevLocationsURL = pokeLocations.previous;
    } catch(err) {
        console.log(err)
    }
    
};