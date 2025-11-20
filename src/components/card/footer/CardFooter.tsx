import {IonProgressBar} from "@ionic/react";
import {AppData} from "../../../config/AppConfig";

const CardFooter = ({
                        appData
                    }: {
    appData: AppData
}) => {
    {/* Progress Info */
    }
    const stamps = appData.card.currentStamp; // Example: 7 out of 10 filled
    const totalStamps = appData.card.goalStamp; // Total number of stamps

    return <div className="text-center mt-1">
        <p className="text-gray-600 text-sm p-1">
            {appData.card.rewardMessage}
        </p>
        <IonProgressBar
            value={stamps / totalStamps}
            className="rounded-full h-3 bg-gray-200"
            color="primary"
        />
        <p className="text-xs text-gray-500 pt-2">
            {stamps} / {totalStamps} visits
        </p>
    </div>
}
export default CardFooter;