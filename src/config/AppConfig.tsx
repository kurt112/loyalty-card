export interface Company {
    name: string;
    logoUri: string;
}

export interface Card {
    title: string;
    currentStamp: number;
    goalStamp: number;
    defaultAvatarUri: string;
    headerMessage: string;
    footerMessage: string;
    rewardMessage: string;
}

// TODO: Add a user ID when firebase is enabled
export interface Transaction {
    id: string;
    date: string | Date;
    title: string;
    amount: number;
    description: string;
    points: number
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface Reward {
    id: string;
    title: string;
    isClaimed: boolean;
    description: string;
}

export interface Employee {
    password: string[];
}

export interface AppData {
    company: Company,
    card: Card,
    userTransactions: Transaction[],
    rewards: Reward[],
    user: User,
    employee: Employee;

}
