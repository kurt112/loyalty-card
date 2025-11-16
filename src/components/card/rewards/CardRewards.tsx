import React, {useContext} from "react";
import {AppStateContext} from "../../../context/AppStateContext";

const CardRewards = () => {

    const data = useContext(AppStateContext);
    const appData = data?.appData;
    const goalStamp = appData?.card.goalStamp || 0;
    const currentStamp = appData?.card.currentStamp || 0;

    const handleStampClick = () => {
        const newStampCount = currentStamp + 1;
        if(appData){
            appData.card.currentStamp = newStampCount;
            data?.updateData(appData);
        }

    }

    return <div className="flex flex-wrap">
        {
            Array.from({length:goalStamp}, (_, i) => {
                return <div
                    key={i}
                    onClick={() => handleStampClick()}
                    className={`w-12 h-12 flex items-center justify-center border-2 rounded-xl text-2xl cursor-pointer transition-all mt-3 mr-3 duration-200 ${
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
}

export default CardRewards