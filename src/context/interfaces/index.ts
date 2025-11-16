// Interfaces matching data.json
export interface Company {
    name: string;
    logoUri: string;
}

export interface Card {
    title: string;
    headerMessage: string;
    currentStamp: number;
    goalStamp: number;
    footerMessage: string;
}

export interface AppData {
    company: Company;
    card: Card;
}