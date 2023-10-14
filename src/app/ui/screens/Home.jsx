import  save from "../../../assets/save.jpg";
import  download from "../../../assets/download.jpg";
import {Link} from "react-router-dom";

export default  function Home(){
    return (
        <div>
                <div className="row align-items-center">
                    <div className="col-4">
                        <p className="card-text">Save your files securely from any device without the hassle of login or signup</p>
                        <Link to="/save" className="btn btn-warning">Save</Link>
                    </div>
                    <div className="col-2"/>
                    <img src={save}  className="col-6" alt="save"/>
                </div>
            <div className="row align-items-center">
                <img src={download}  className="col-6" alt="save"/>
                <div className="col-1"/>
                <div className="col-5">
                    <p className="card-text">Download your files on any device using the unique key provided by us</p>
                    <Link to="/download" className="btn btn-warning">Download</Link>
                </div>
            </div>
        </div>
    );
}
