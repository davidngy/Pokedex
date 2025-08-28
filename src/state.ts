import { createInterface, type Interface } from "readline";
import * as readline from "node:readline";
import { getCommands } from "./registry.js";
import { PokeAPI, type Pokemon } from "./Pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string ,CLICommand>;
    pokeapi: PokeAPI;
    pokedex: Record<string, Pokemon>;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
}

export function initState(cacheInterval: number): State {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const commands = getCommands();
    const pokeapi = new PokeAPI(cacheInterval)
    return {rl, commands, pokeapi, pokedex: {}}
}