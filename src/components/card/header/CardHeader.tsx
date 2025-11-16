import React, {useContext} from "react";
import {IonCardTitle} from "@ionic/react";
import { AppStateContext } from "../../../context/AppStateContext";

const CardHeader = () => {
    const data = useContext(AppStateContext);
    const cardTitle = data?.appData?.card.title || "DesignScribe Loyalty Card";
    const headerMessage = data?.appData?.card.headerMessage


    return <div className="bg-gradient-to-r bg-sky-400 text-white p-5 text-center">
        <IonCardTitle className="text-xl font-bold text-white">{cardTitle}</IonCardTitle>
        <p className="text-sm opacity-90">{headerMessage}</p>
    </div>
}

export default CardHeader;