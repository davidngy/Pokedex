import * as readline from "node:readline";
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { getCommands } from "./registry.js";

export function cleanInput(input: string):string[] {
    const cleanInput = input.trim().toLowerCase().split(/\s+/)
    
    return cleanInput
}

/*export function startREPL(): void {
    process.stdout.write(`Pokedex > `)
    process.stdin.on("data", (data) => {
        let input = cleanInput(data.toString())
        process.stdout.write(`Your command was: ${input[0]}\n`)
        process.stdout.write(`Pokedex > `)
    })
}*/
export function startREPL(): void {
   const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > "
   });

   rl.prompt();

   rl.on("line", (line) => {
    const input = cleanInput(line)
    const commands = getCommands();
    let found = false;
    for(const key in commands) {
        if(input[0] === key) {
            try {
                commands[key].callback(commands)
                found = true;
            } catch(error) {
                if(error instanceof Error) {
                    console.log(error)
                }
            }
            break;
        }
    }
    if(found === false) {
        console.log("Unknown command")
    }
    
    rl.prompt()
   })
}
