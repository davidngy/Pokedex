import {State} from "./state.js";

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
export async function startREPL(state: State): Promise<void> {
   const rl = state.rl;
   const commands = state.commands;

   rl.prompt();

   rl.on("line", async (line) => {
    const input = cleanInput(line)
    
    let found = false;

    for(const key in commands) {
        if(input[0] === key) {
            try {
                await commands[key].callback(state)
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
