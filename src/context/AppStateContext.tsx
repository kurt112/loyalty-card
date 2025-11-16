// src/context/AppStateContext.tsx
import {createContext, useEffect, useState, ReactNode} from "react";
import {AppData} from "./interfaces";
import {decryptData, encryptData} from "./security";

export interface AppStateContextValue {
    appData: AppData | undefined;
    updateData: (newData: AppData) => void;
}

export const AppStateContext = createContext<AppStateContextValue | undefined>(undefined);

export const AppStateProvider = ({children}: { children: ReactNode }) => {
    const [appData, setAppData] = useState<AppData | undefined>(undefined);

    useEffect(() => {

        const appData = localStorage.getItem('appData');

        if (appData) {
            try {
                setAppData(decryptData(appData));
            }catch (Error){
                console.log(Error);
            }
            return;
        }

        const dataUrl = import.meta.env.VITE_APP_DATA_URL;
        if (!dataUrl) {
            return;
        }

        fetch(dataUrl)
            .then(response => response.json())
            .then((data: AppData) => {
                localStorage.setItem('appData', encryptData(data));
                return setAppData(data);
            })
            .catch(error => {
                alert("Failed to load app data: " + error);
            });
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
