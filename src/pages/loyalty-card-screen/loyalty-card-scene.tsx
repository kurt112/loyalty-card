import {
    IonCard,
    IonCardContent,
    IonContent, IonPage,
} from '@ionic/react';
import './loyalty-card-scene.css';
import React, {FC, useContext} from "react";
import CardTitle from "../../components/card/title/CardTitle";
import CardRewards from "../../components/card/rewards/CardRewards";
import CardHeader from "../../components/card/header/CardHeader";
import CardFooter from "../../components/card/footer/CardFooter";
import {AppStateContext} from "../../context/AppStateContext";

const LoyaltyCardScene: FC = () => {
    const data = useContext(AppStateContext);
    const footerMessage = data?.appData?.card.footerMessage || "";
    return (
        <IonPage>
            <IonContent fullscreen className="loyalty-screen">
                <div className="center-card backdrop-blur-md ">
                    <div className="logo-container">
                        <img alt="Silhouette of a person's head"
                             src={data?.appData?.company.logoUri}
                             className="w-20 h-20 mb-5 rounded-full border-2 border-black border-solid"
                        />
                    </div>
                    <IonCard className="w-100 rounded-3xl overflow-hidden ">
                        <CardHeader/>
                        <IonCardContent className="p-6">
                            <CardTitle/>
                            <CardRewards/>
                            <CardFooter/>
                        </IonCardContent>

                        {/* Footer */}
                        <div className="bg-gray-50 border-t text-center p-4 text-sm text-gray-500">
                            <p>{footerMessage}</p>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>

    );
};

export default LoyaltyCardScene;
