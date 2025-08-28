import { CLICommand } from "./state.js";
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { commandMap } from "./commands/command_map.js";
import { commandMapb } from "./commands/command_mapb.js";
import { commandExplore } from "./commands/command_explore.js";
import { commandCatch } from "./commands/command_catch.js";
import { commandInspect } from "./commands/command_inspect.js";
import { commandPokedex } from "./commands/command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp
    },
    map: {
        name: "map",
        description: "Displays 20 locations and next",
        callback: commandMap
    },
    mapb: {
        name: "mapb",
        description: "Displays 20 locations and back",
        callback: commandMapb
    },
    explore: {
      name: "explore",
      description: "Displays Pokemon in given location",
      callback: commandExplore
    },
    catch: {
      name: "catch",
      description: "catching a Pokemon",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "getting infos from pokemon",
      callback: commandInspect
    },
    pokedex: {
      name: "pokedex",
      description: "listing all caught pokemons",
      callback: commandPokedex
    }
  };
}