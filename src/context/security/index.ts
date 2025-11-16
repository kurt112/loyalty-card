import {AppData} from "../interfaces";

export function encryptData(data: AppData): string {
    return btoa(JSON.stringify(data));
}

export function decryptData(data: string) {
    return JSON.parse(atob(data));
}