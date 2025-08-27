import { State } from "src/state";

export function commandHelp(state: State): void {
    console.log(`
Welcome to the Pokedex!
Usage:
    `)

for (const cmd of Object.values(state.commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
}
console.log();
};