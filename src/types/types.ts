export interface Context {
  params: PokemonName;
  locales: any;
  locale: any;
  defaultLocale: any;
}

export interface PokemonName {
  name: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: WH;
  height: WH;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

export interface WH {
  minimum: string;
  maximum: string;
}
