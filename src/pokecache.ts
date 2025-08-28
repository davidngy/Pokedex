export type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();

    #reapIntervalId: NodeJS.Timeout | undefined = undefined;

    #interval: number;

    #reap() {
        const max = Date.now() - this.#interval
        for(const [key, entry] of this.#cache) {
            if(entry.createdAt < max) {
                this.#cache.delete(key)
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => {
            this.#reap()
        }, this.#interval); 
    }

    constructor(number: number) {
        this.#interval = number;
        this.#startReapLoop();
    }

    public stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }

    add<T>(key: string, val: T) {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        }
        
        this.#cache.set(key, entry);
    }

    get<T>(key: string): T | undefined {
        return this.#cache.get(key)?.val;
    }

}
