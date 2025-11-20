import {IonCard, IonCardContent, IonContent, IonList, IonPage} from '@ionic/react';
import './history.css';
import React, {FC, useContext, useEffect, useState} from "react";
// import QRCode from "react-qr-code";
// import {MyContext} from "../../context/AppStateContext";
// import logo from "../loyalty-card-screen/design-scribe.png";
import CardTitle from "../../components/card/title/CardTitle";
import CardHeader from "../../components/card/header/CardHeader";
import {AppStateContext} from "../../context/AppStateContext";
import moment from "moment";

const History: FC = () => {

    const data = useContext(AppStateContext);
    const [appData] = useState(data.appData);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (!appData) {
            alert("App data is not available Reloading this page might fix the issue.");
            window.location.reload();
        }
    }, []);

    console.log(appData.userTransactions);

    const outputDate = (date: string | Date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="pt-5">
                    <div className="logo-container">
                        <img alt="Silhouette of a person's head"
                             src={appData.company.logoUri}
                             className="w-20 h-20 mb-1 rounded-full border-2 border-black border-solid"
                        />
                    </div>
                    <IonCard className="w-100 m-1">
                        <CardHeader appData={appData}/>
                        <IonCardContent className="p-6">
                            {/* User Info */}
                            <CardTitle appData={appData}/>
                        </IonCardContent>

                    </IonCard>
                </div>

                <IonList>
                    <h2 className="font-semibold text-gray-800 bg-white pl-3 text-3xl mb-3">Your transaction</h2>

                    <div className="bg-gray-100 rounded-md shadow-md overflow-y-visible m-2">
                        <ul className="space-y-1">
                            {appData.userTransactions.toReversed().map((transaction) => (
                                <li
                                    key={transaction.id}
                                    className="flex justify-between items-center bg-gray-50 p-2 rounded shadow"
                                >
                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-sm">{transaction.title}</h3>
                                        <p className="text-gray-500 text-sm">{outputDate(transaction.date)}</p>
                                    </div>
                                    <span
                                        className="text-gray-800 font-semibold text-sm">{transaction.points} Point</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </IonList>

            </IonContent>
        </IonPage>
    );
};

export default History;
