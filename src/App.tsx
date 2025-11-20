import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {people, card, book} from 'ionicons/icons';
import LoyaltyCardScene from './pages/loyalty-card-screen/loyalty-card-scene';
import Profile from './pages/profile/profile';
import History from './pages/history/history';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import React, {FC} from "react";
import {AppStateProvider} from "./context/AppStateContext";
import ProfileEdit from "./pages/profile/edit/profile-edit";
import {Switch} from "react-router";
import RewardsClaim from "./pages/reward-claimed/rewards-claim";
import AddPoints from "./pages/points/add-points";
import RewardsClaimedMessage from "./pages/reward-claimed/message/rewards-claimed-message";

setupIonicReact();


const App: FC = () => {


    return (
        <IonApp>
            <IonReactRouter>
                <AppStateProvider>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Switch>
                                <Route exact path="/card">
                                    <LoyaltyCardScene/>
                                </Route>
                                <Route exact path="/profile">
                                    <Profile/>
                                </Route>
                                <Route exact path="/profile/edit">
                                    <ProfileEdit/>
                                </Route>
                                <Route exact path="/history">
                                    <History/>
                                </Route>
                                <Route exact path="/rewards/claim/:rewardId">
                                    <RewardsClaim/>
                                </Route>
                                <Route exact path="/rewards/claim/:rewardId/message">
                                    <RewardsClaimedMessage/>
                                </Route>
                                <Route exact path="/points/add/:cardId">
                                    <AddPoints/>
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/card"/>
                                </Route>
                            </Switch>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="card" href="/card">
                                <IonIcon aria-hidden="true" icon={card}/>
                                <IonLabel>Card</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="history" href="/history">
                                <IonIcon aria-hidden="true" icon={book}/>
                                <IonLabel>History</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="profile" href="/profile">
                                <IonIcon aria-hidden="true" icon={people}/>
                                <IonLabel>Profile</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </AppStateProvider>
            </IonReactRouter>
        </IonApp>
    );
}


export default App;
