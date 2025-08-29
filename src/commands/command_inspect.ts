import { stat } from "fs";
import { State } from "src/state";

export async function commandInspect(state: State, ...args: string[]) {
     if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemon = args[0]
    const pokeInfos = state.pokedex[pokemon]
    if (!pokemon) {
        throw new Error("you have not caught that pokemon");
    }
    console.log(`Name: ${pokeInfos.name}`);
    console.log(`Height: ${pokeInfos.height}`);
    console.log(`Weight: ${pokeInfos.weight}`)
    console.log("Stats:")
    for(const key of pokeInfos.stats) {
        console.log(`   -${key.stat.name}: ${key.base_stat}`)
    }
    console.log("Types:")
    for(const key of pokeInfos.types) {
        console.log(`   -${key.type.name}`)
    }
}