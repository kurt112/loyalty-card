import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";

import {useParams} from "react-router-dom";
import {AppStateContext} from "../../context/AppStateContext";

export type RewardParams = {
    rewardId: string;
};

const RewardsClaim = () => {

    const { rewardId } = useParams<RewardParams>();
    const data = useContext(AppStateContext);
    const [claimed, setClaimed] = useState(false);
    const [productName, setProductName] = useState('');
    const [password, setPassword] = useState('');

    const handleClaim = (e: React.FormEvent) => {
        const isClaimed  = data.appData.rewards.find(reward => reward.id === rewardId)?.isClaimed;

        if(data.appData.employee.password.indexOf(password) === -1) {
            alert("Invalid input");
            return;
        }


        if (isClaimed) {
            alert("This reward has already been claimed.");
            setClaimed(true);
            return;
        }
        e.preventDefault();
        window.location.href = `/rewards/claim/${rewardId}/message?productName=${productName}`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <form
                onSubmit={handleClaim}
                className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center"
            >
                <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
                    Claim Your Reward
                </h2>

                <input
                    type="text"
                    name="rewards- name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition mb-5"
                    required
                    placeholder="Enter product name to claim"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition mb-5"
                    required
                    placeholder="Enter store password to authorize"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="px-6 py-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition"
                    disabled={claimed}
                >
                    Claim Reward
                </button>

                <Link to={'/card'} className="hover:underline">
                    <button
                        className="px-6 py-2 rounded-lg bg-transparent  transition mt-3 text-black">Back
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default RewardsClaim;