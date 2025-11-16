import {IonButton, IonContent, IonIcon, IonInput, IonPage} from '@ionic/react';
import './profile.css';
import {logOutOutline, pencilOutline} from "ionicons/icons";
import React, {FC, useState} from "react";

const Profile: FC = () => {
    const [form, setForm] = useState({
        name: 'a',
        username: 'd',
        email: 'z',
    });

    const handleChange = (e: CustomEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Submitted: ${JSON.stringify(form, null, 2)}`);
    };

    return (
        <IonPage>
            <IonContent fullscreen className="bg-gray-100 ">
                {/* Profile Container */}
                <div className="absolute right-3 top-3 ">
                    {/* Logout Button */}
                    <IonButton
                        shape="round"
                        color="danger"
                        className="w-12 h-12 flex items-center justify-center p-0"
                        onClick={() => alert('Logout')}
                    >
                        <IonIcon icon={logOutOutline} slot="icon-only" className="text-xl" />
                    </IonButton>
                </div>
                <div className="mt-10 bg-white rounded-xl c overflow-hidden shadow-md">
                    <div className="flex flex-col items-center p-6">
                        {/* Profile Picture */}
                        <img
                            src="https://ionicframework.com/docs/img/demos/avatar.svg"
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border-4 border-gray-300"
                        />
                        {/* User Info */}
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">Jane Doe</h2>
                        <p className="text-gray-500 text-sm">janedoe@example.com</p>
                        <p className="text-gray-500 text-sm">Member ID: #102345</p>

                    </div>

                </div>
                <div className="items-end accent-red-500 text-left p-3">
                    {/* Edit Profile Button */}
                    <IonButton color="primary" href={'/profile/edit'}>
                        <IonIcon icon={pencilOutline} slot="start"/>
                        Edit Profile
                    </IonButton>
                </div>
                <form onSubmit={handleSubmit} className="p-4">
                    <IonInput
                        label="Name"
                        labelPlacement="floating"
                        name="name"
                        value={form.name}
                        onIonInput={handleChange}
                        className="mb-2"
                        required
                    />
                    <IonInput
                        label="Username"
                        labelPlacement="floating"
                        name="username"
                        value={form.username}
                        onIonInput={handleChange}
                        className="mb-2"
                        required
                    />
                    <IonInput
                        label="Email"
                        labelPlacement="floating"
                        name="email"
                        type="email"
                        value={form.email}
                        onIonInput={handleChange}
                        className="mb-2"
                        required
                    />

                </form>
                <footer>

                </footer>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
