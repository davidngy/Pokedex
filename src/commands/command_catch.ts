import { stat } from "fs";
import { State } from "src/state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokeName = args[0];
    const pokeInfos = await state.pokeapi.fetchPokemon(pokeName)

    console.log(`Throwing a Pokeball at ${pokeInfos.name}...`)
    const exp = pokeInfos.base_experience;
    const catchUser = Math.random() * 300;
    let caught;
    if(exp <= 70) {
        caught = catchUser > exp ? true : false
        if(caught) {
            state.pokedex[pokeInfos.name] = pokeInfos;
            console.log(`${pokeInfos.name} was caught!`)
        } else {
            console.log(`${pokeInfos.name} escaped!`)
        }
    } else if(exp <= 120) {
        caught = catchUser > exp ? true : false
        if(caught) {
            state.pokedex[pokeInfos.name] = pokeInfos;
            console.log(`${pokeInfos.name} was caught!`)
        } else {
            console.log(`${pokeInfos.name} escaped!`)
        }
    } else if(exp <= 200) {
        caught = catchUser > exp ? true : false
        if(caught) {
            state.pokedex[pokeInfos.name] = pokeInfos;
            console.log(`${pokeInfos.name} was caught!`)
        } else {
            console.log(`${pokeInfos.name} escaped!`)
        }
    } else if(exp <= 300) {
        caught = catchUser > exp ? true : false
        if(caught) {
            state.pokedex[pokeInfos.name] = pokeInfos;
            console.log(`${pokeInfos.name} was caught!`)
        } else {
            console.log(`${pokeInfos.name} escaped!`)
        }
    } else {
        caught = catchUser > exp ? true : false
        if(caught) {
            state.pokedex[pokeInfos.name] = pokeInfos;
            console.log(`${pokeInfos.name} was caught!`)
        } else {
            console.log(`${pokeInfos.name} escaped!`)
        }
    }
}