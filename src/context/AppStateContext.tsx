// src/context/AppStateContext.tsx
import {createContext, useEffect, useState, ReactNode} from "react";
import {decryptData, encryptData} from "./security";
import initialData from '../config/initial-data/user-data/data.json';
import {AppData} from "../config/AppConfig";

export interface AppStateContextValue {
    appData: AppData;
    updateData: (newData: AppData) => void;
}

const defaultAppData: AppData = {
    card: {
        defaultAvatarUri: '',
        title: '',
        headerMessage: '',
        currentStamp: 0,
        goalStamp: 0,
        footerMessage: '',
        rewardMessage: ''
    },
    userTransactions: [],
    company: {
        name: '',
        logoUri: ''
    },
    user: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    },
    rewards: []
}

export const AppStateContext = createContext<AppStateContextValue>({
    appData: defaultAppData,
    updateData: () => {
    }
});

export const AppStateProvider = ({children}: { children: ReactNode }) => {
    const [appData, setAppData] = useState<AppData>({...defaultAppData});

    useEffect(() => {

        const appData = localStorage.getItem('appData');

        if (appData) {
            try {
                setAppData(decryptData(appData));
            } catch (Error) {
                console.log(Error);
            }
            return;
        }

        const dataUrl = import.meta.env.VITE_APP_DATA_URL;
        if (!dataUrl) {
            return;
        }
        localStorage.setItem('appData', encryptData(initialData));

    }, []);

    const updateData = (newData: AppData) => {
        setAppData(prevState => ({
            ...prevState,
            ...newData
        }));

        localStorage.setItem('appData', encryptData(newData));
    }

    const data = {
        appData,
        updateData,
    }


    return (
        <AppStateContext.Provider value={data}>
            {appData ? children : null}
        </AppStateContext.Provider>
    );
};
