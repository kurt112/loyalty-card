import {IonCard, IonCardContent, IonContent, IonList, IonPage} from '@ionic/react';
import './history.css';
import React, {FC, useEffect} from "react";
// import QRCode from "react-qr-code";
// import {MyContext} from "../../context/AppStateContext";
// import logo from "../loyalty-card-screen/design-scribe.png";
import CardTitle from "../../components/card/title/CardTitle";
import CardHeader from "../../components/card/header/CardHeader";
const History: FC = () => {

    // const appState = useContext(MyContext);

    useEffect(() => {
    }, []);

    const loyaltyHistory = [
        { id: 1, reward: 'Product purchase', date: '2023-10-05', points: '1' },
        { id: 2, reward: 'Product purchase', date: '2023-10-05', points: '1' },
        { id: 3, reward: 'Product purchase', date: '2023-10-05', points: '1' },
        { id: 4, reward: 'Product purchase', date: '2023-10-05', points: '1' },
        { id: 5, reward: 'Product purchase', date: '2023-10-05', points: '1' },
        { id: 6, reward: 'Prize Redeem ', date: '2023-10-05', points: '0' },
        { id: 7, reward: 'Prize Redeem ', date: '2023-10-05', points: '0' },
    ];


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="pt-5">
                    <div className="logo-container">
                        {/*<img alt="Silhouette of a person's head"*/}
                        {/*     src={appState === undefined ? logo : appState['custom-logo-uri']}*/}
                        {/*     className="w-20 h-20 mb-5 rounded-full border-2 border-black border-solid"*/}
                        {/*/>*/}
                    </div>
                    <IonCard className="w-100">
                        <CardHeader/>

                        <IonCardContent className="p-6">
                            {/* User Info */}
                            <CardTitle/>
                        </IonCardContent>

                    </IonCard>
                </div>

                <IonList>
                    <h2 className="font-semibold text-gray-800 bg-white pl-3 text-2xl">Your transaction</h2>

                    <div className="bg-gray-100 rounded-md shadow-md overflow-y-visible">
                        <ul className="space-y-1">
                            {loyaltyHistory.map((entry) => (
                                <li
                                    key={entry.id}
                                    className="flex justify-between items-center bg-gray-50 p-2 rounded shadow"
                                >
                                    <div>
                                        <h3 className="text-gray-800 font-semibold text-sm">{entry.reward}</h3>
                                        <p className="text-gray-500 text-sm">{entry.date}</p>
                                    </div>
                                    <span className="text-gray-800 font-semibold text-sm">{entry.points} Point</span>
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
