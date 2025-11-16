import QRCode from "react-qr-code";
import {Fragment} from "react";

const CardTitle = () => {
    return (
        <Fragment>
            <div className="flex items-center space-x-3 mb-6">
                <img alt="Silhouette of a person's head"
                    // TODO: Replace with custom profile image URL
                     src="https://ionicframework.com/docs/img/demos/avatar.svg"
                     className="w-12 h-12 rounded-full border border-gray-200"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                    <p className="text-sm text-gray-500">Member ID: #102345</p>
                </div>
                <div className="flex justify-end flex-1 scan-profile">
                    <div style={{height: "auto", maxWidth: 64, width: "100%"}}>
                        <QRCode
                            size={256}
                            style={{height: "auto", maxWidth: "100%", width: "100%"}}
                            // TODO: Replace with dynamic user ID or profile link
                            value={'John Doe'}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                </div>
            </div>

            <hr className="w-full h-0.5 mx-auto my-4  bg-gray-500"/>

        </Fragment>

    )
}


export default CardTitle;