import React, {useContext, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {AppStateContext} from "../../context/AppStateContext";
import ShortUniqueId from 'short-unique-id';
import moment from "moment";

export type CardIdParams = {
    cardId: string;
};

const AddPoints = () => {

    const data = useContext(AppStateContext);
    const [productName, setProductName] = useState('');
    const [password, setPassword] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const {cardId} = useParams<CardIdParams>();

    const handleAddPoints = (e: React.FormEvent) => {

        e.preventDefault();

        if(data.appData.employee.password.indexOf(password) === -1) {
            alert("Invalid input");
            return;
        }

        setProductName('');

        const newCurrentStamp = data.appData.card.currentStamp + 1;
        const goalStamp = data.appData.card.goalStamp;
        const transactions = data.appData.userTransactions;

        const transaction = {
            id: cardId,
            date: moment().toDate(),
            description: `Added points for product: ${productName}`,
            points: 1,
            title: `Product Bought: ${productName}`,
            amount: 1
        };

        transactions.push(transaction);

        if (newCurrentStamp === goalStamp) {
            alert("Congratulations! You've reached the goal and earned a reward!");

            const reward = {
                id: `Reward - ${new ShortUniqueId().rnd(5)}`,
                description: `Reward for completing the stamp card.`,
                isClaimed: false,
                title: `Rewards available for claim`
            };

            const newRewards = data.appData.rewards;

            newRewards.push(reward);

            data.updateData({
                ...data.appData,
                card: {
                    ...data.appData.card,
                    currentStamp: 0
                },
                userTransactions: transactions,
                rewards: newRewards
            });
        } else {
            data.updateData({
                ...data.appData,
                card: {
                    ...data.appData.card,
                    currentStamp: newCurrentStamp
                },
                userTransactions: transactions,
            });
        }

        window.location.href = '/card';
    };

    useEffect(() => {
        const transaction = data.appData.userTransactions.find(transaction => transaction.id === cardId);
        if (transaction?.id === undefined || transaction.id !== cardId) {
            setIsEnabled(true);
            return;
        }

        setIsEnabled(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <form
                onSubmit={handleAddPoints}
                className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center"
            >
                <h2 className="text-xl font-bold text-center text-blue-700 mb-6">
                    Add points to your card
                </h2>

                <input
                    type="text"
                    name="rewards- name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition mb-5"
                    required
                    placeholder="Enter product name to add points"
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
                    disabled={!isEnabled}
                >
                    Register Points
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

export default AddPoints;