import React, {Fragment} from "react";
import {AppData} from "../../../config/AppConfig";
import {Link} from "react-router-dom";
import ShortUniqueId from 'short-unique-id';

const CardRewards = ({
                         appData
                     }: {
    appData: AppData
}) => {

    const goalStamp = appData?.card.goalStamp || 0;
    const currentStamp = appData?.card.currentStamp || 0;

    const handleStampClick = () => {
        const uid = new ShortUniqueId().rnd(5);
        window.location.href = `/points/add/${uid}`;
    }

    return <Fragment>
        <div className="flex flex-wrap">
            {
                Array.from({length: goalStamp}, (_, i) => {
                    return <div
                        key={i}
                        onClick={() => handleStampClick()}
                        className={`w-12 h-12 flex items-center justify-center border-2 rounded-xl text-2xl cursor-pointer transition-all mt-2 mr-2 duration-200 ${
                            i < currentStamp
                                ? "border-green-500 text-white"
                                : "border-gray-300 text-gray-300"
                        }`}
                    >
                        {i === goalStamp - 1 ? "🎁" : "✅"}
                    </div>
                })
            }

        </div>

        {
            appData.rewards.length >= 0 ? <div className='mt-3'>
                <p className='text-gray-800 font-semibold'>Available Rewards to claim: </p>
                <div className="flex flex-wrap gap-1 ">
                    {
                        appData.rewards.map((reward, index) => (
                            reward.isClaimed ? null : <Link to={'/rewards/claim/' + reward.id} key={index}>
                                <button
                                    className="rounded-lg px-4 py-2 bg-blue-500  hover:bg-blue-600 duration-300 text-white"
                                >
                                    🎁 Claim
                                </button>
                            </Link>
                        ))
                    }


                </div>

            </div> : null
        }

    </Fragment>
}

export default CardRewards