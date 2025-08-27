import { State } from "src/state";

export async function commandHelp(state: State): Promise<void> {
    console.log(`
Welcome to the Pokedex!
Usage:
    `)

for (const cmd of Object.values(state.commands)) {
    console.log(`${cmd.name}: ${cmd.description}`);
}
console.log();
};