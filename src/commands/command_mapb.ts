import { State } from "src/state";


export async function commandMapb(state: State, pageURL?: string): Promise<void>{
    if (!state.prevLocationsURL) {
        throw new Error("you're on the first page");
    }

    const pokeLocations = await state.pokeapi.fetchLocations(state.prevLocationsURL);

    for(const loc of pokeLocations.results) {
        console.log(loc.name)
    }
    state.nextLocationsURL = pokeLocations.next;
    state.prevLocationsURL = pokeLocations.previous;


    };