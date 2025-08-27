import { createInterface, type Interface } from "readline";
import * as readline from "node:readline";
import { getCommands } from "./registry.js";
import { PokeAPI } from "./Pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback(state: State): Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string ,CLICommand>;
    pokeapi: PokeAPI;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
}

export function initState(): State {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commands = getCommands();
    const pokeapi = new PokeAPI()
    return {rl, commands, pokeapi}
}