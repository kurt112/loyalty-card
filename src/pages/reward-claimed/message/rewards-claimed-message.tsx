import {Fragment, useContext, useEffect} from "react";
import {AppStateContext} from "../../../context/AppStateContext";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router";
import {Transaction} from "../../../config/AppConfig";
import moment from "moment";

export type RewardParams = {
    rewardId: string;
};

const RewardsClaimedMessage = () => {

    const location = useLocation();
    const {rewardId} = useParams<RewardParams>();
    const data = useContext(AppStateContext);

    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get('productName') || '';

    useEffect(() => {

        if (productName) {
            const transaction: Transaction = {
                id: rewardId,
                amount: 0,
                date: moment().toString(),
                description: `Claimed reward: ${productName}`,
                title: `Reward Claimed: ${productName}`,
                points: 0,
            };

            const transactions = data.appData.userTransactions;

            const getRewardById = (id: string) => {
                return transactions.find(r => r.id === id);
            }

            if(getRewardById(rewardId)){
                // Reward already claimed, do not add duplicate transaction
                return;
            }

            const userRewards = data.appData.rewards;
            const rewardIndex = userRewards.findIndex(r => r.id === rewardId);

            if (rewardIndex !== -1) {
                userRewards[rewardIndex].isClaimed = true;
            }

            transactions.push(transaction);
            data.updateData({
                ...data.appData,
                userTransactions: transactions,
                rewards: userRewards
            });

            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Fragment>
        <div className="flex flex-col items-center justify-center h-full p-4">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Reward Claimed Successfully!</h2>
            <p className="text-center text-gray-700 mb-6">
                Thank you for claiming your reward. We hope you enjoy it!
            </p>

        </div>
    </Fragment>
}

export default RewardsClaimedMessage;