import {useParams} from "react-router-dom";
import QRCode from "react-qr-code";
import {SERVER_URL, SITE_URL} from "../../util/const";

export  default  function KeyScreen() {
    const key = useParams().key;
    return (<div className="col-12">
            <p className="centerText p-3" >
                Scan given QR code OR Save this passkey to access your file on another device
            </p>
            <center>
                <QRCode value={SITE_URL+"files/"+key}/>
            </center>
            <p className="p-4 boldText" style={{textAlign:'center'}}> OR </p>
            <p className="centerText p-2 keyText" >
                Passkey : {key}
            </p>

    </div>);

}
