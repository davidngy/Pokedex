import { stdin } from "node:process";
import * as readline from "node:readline";

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
    if(input.length > 0) {
        console.log(`Your command was: ${input[0]}`)
    }
    rl.prompt()
   })
}
