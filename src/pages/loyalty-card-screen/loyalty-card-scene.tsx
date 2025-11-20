import {
    IonCard,
    IonCardContent,
    IonContent, IonPage,
} from '@ionic/react';
import './loyalty-card-scene.css';
import React, {FC, useContext, useEffect, useState} from "react";
import CardTitle from "../../components/card/title/CardTitle";
import CardRewards from "../../components/card/rewards/CardRewards";
import CardHeader from "../../components/card/header/CardHeader";
import CardFooter from "../../components/card/footer/CardFooter";
import {AppStateContext} from "../../context/AppStateContext";
import defaultCompanyLogo from "./design-scribe.png";

const LoyaltyCardScene: FC = () => {

    const data = useContext(AppStateContext);
    const [appData] = useState(data.appData);
    const footerMessage = appData.card.footerMessage || "";

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (!appData) {
            alert("App data is not available Reloading this page might fix the issue.");
            window.location.reload();
        }
    }, []);

    return (
        <IonPage>
            <IonContent fullscreen className="loyalty-screen p-0">
                <div className="center-card backdrop-blur-md ">
                    <div className="logo-container">
                        <img alt="Silhouette of a person's head"
                             src={data?.appData?.company.logoUri ? data.appData.company.logoUri : defaultCompanyLogo}
                             className="w-20 h-20 mb-2 rounded-full border-2 border-black border-solid"
                        />
                    </div>
                    <IonCard className="rounded-xl overflow-hidden m-1">
                        <CardHeader appData={appData}/>
                        <IonCardContent className="p-2 m-0">
                            <CardTitle appData={appData}/>
                            <CardRewards appData={appData}/>
                            <CardFooter appData={appData}/>
                        </IonCardContent>

                        {/* Footer */}
                        <div className="bg-gray-50 border-t text-center p-3 text-sm text-gray-500">
                            <p>{footerMessage}</p>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>

    );
};

export default LoyaltyCardScene;
