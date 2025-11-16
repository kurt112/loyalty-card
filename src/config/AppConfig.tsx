interface Company {
    name: string;
    logoUri: string;
}

interface Card {
    title: string;
    tagline: string;
    description: string;
    contactEmail: string;
    currentStamp: number;
    goalStamp: number;
}

export interface AppData {
    company: Company;
    card: Card;
}
