export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const response = await fetch(`${pageURL ?? PokeAPI.baseURL}/location-area`, {
        method: "GET"
    })

    return response.json()
}

  async fetchLocation(locationName: string): Promise<Location> {
    const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`, {
        method: "GET"
    })

    const location: Location = await response.json()
    return location
  }
}

export type ShallowLocations = { 
    count: number;
    next: string;
    previous: undefined | string
    results: Location[]
};

export type Location = {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: any[];
        max_level: number;
        method: {
          name: string;
          url: string;
        };
        min_level: number;
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
};