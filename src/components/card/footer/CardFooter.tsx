import {IonProgressBar} from "@ionic/react";
import React, {useState} from "react";

const CardFooter = () => {
    {/* Progress Info */}
    const [stamps] = useState(7); // Example: 7 out of 10 filled
    const totalStamps = 10;

    return <div className="text-center mt-3">
        <p className="text-gray-600 text-sm p-1">
            Collect 10 stars to get a free drink!
        </p>
        <IonProgressBar
            value={stamps / totalStamps}
            className="rounded-full h-3 bg-gray-200"
            color="primary"
        />
        <p className="text-xs text-gray-500 pt-1">
            {stamps} / {totalStamps} visits
        </p>
    </div>
}

export default CardFooter;