export interface Country {
    name: string;
    continent: string | string[];
    population: number;
    landArea: number;
    landlocked?: string;
    flagColours?: string[];
    alias?:  string[];
}