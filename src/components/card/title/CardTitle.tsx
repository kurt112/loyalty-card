import QRCode from "react-qr-code";
import {AppData} from "../../../context/interfaces";
import {Fragment} from "react";

const CardTitle = ({
                       appData

                   }: {
    appData: AppData
}) => {
    return (
        <Fragment>
            <div className="flex items-center space-x-3 mb-3">
                <img alt="Silhouette of a person's head"
                     src={appData?.card.defaultAvatarUri ? appData.card.defaultAvatarUri : 'https://www.gravataNr.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                     className="w-12 h-12 rounded-full border border-gray-200"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{appData.user.firstName + ' ' + appData.user.lastName}</h3>
                    <p className="text-sm text-gray-500">{appData.user.email}</p>
                </div>
                <div className="flex justify-end flex-1 scan-profile">
                    <div style={{height: "auto", maxWidth: 64, width: "100%"}}>
                        <QRCode
                            size={256}
                            style={{height: "auto", maxWidth: "100%", width: "100%"}}
                            // TODO: Replace with dynamic user ID or profile link
                            value={appData.user.firstName + ' ' + appData.user.lastName}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                </div>
            </div>

            <hr className="w-full h-0.5 mx-auto mb-1  bg-sky-400"/>

        </Fragment>

    )
}


export default CardTitle;