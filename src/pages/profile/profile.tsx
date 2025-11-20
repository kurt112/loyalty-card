import { IonContent, IonIcon, IonPage } from '@ionic/react';
import './profile.css';
import { syncCircle, pencilOutline } from "ionicons/icons";
import React, {FC, useContext} from "react";
import { Link } from "react-router-dom";
import {AppStateContext} from "../../context/AppStateContext";

const Profile: FC = () => {

    const data = useContext(AppStateContext);

    const sync = () => {
        alert("Data cannot be synced at the moment.");
        return;
    }

    return (
        <IonPage>
            <IonContent fullscreen className="bg-gradient-to-br from-sky-400 to-blue-700 min-h-screen flex flex-col items-center">
                {/* Profile Card */}
                <div className="mt-16 bg-white/90 rounded-2xl shadow-md w-full max-w-md mx-auto overflow-hidden">
                    <div className="flex flex-col items-center p-8">
                        {/* Profile Picture */}
                        <div className="bg-gradient-to-tr from-blue-400 to-sky-300 p-1 rounded-full shadow-lg">
                            <img
                                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                                alt="User Avatar"
                                className="w-28 h-28 rounded-full border-4 border-white"
                            />
                        </div>
                        {/* User Info */}
                        <h2 className="mt-6 text-2xl font-bold text-gray-800 tracking-wide">{`${data.appData.user.firstName} ${data.appData.user.lastName}`}</h2>
                        <p className="text-blue-600 text-sm font-medium mt-1">{`${data.appData.user.email}`}</p>
                        <p className="text-gray-400 text-xs mt-1">Loyal Member</p>
                    </div>
                </div>
                {/* Actions */}
                <div className="w-full max-w-md mx-auto mt-8 space-y-3">
                    <div
                        className="flex items-center gap-3 px-5 py-3 bg-white/80 rounded-xl shadow hover:bg-blue-50 cursor-pointer transition"
                        onClick={sync}
                    >
                        <IonIcon icon={syncCircle} className="w-7 h-7 text-blue-500" />
                        <span className="text-md font-semibold text-gray-700">Sync my data</span>
                    </div>
                    <Link
                        to={'/profile/edit'}
                        className="flex items-center gap-3 px-5 py-3 bg-white/80 rounded-xl shadow hover:bg-blue-50 cursor-pointer transition"
                    >
                        <IonIcon icon={pencilOutline} className="w-7 h-7 text-blue-500" />
                        <span className="text-md font-semibold text-gray-700">Edit My Data</span>
                    </Link>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;