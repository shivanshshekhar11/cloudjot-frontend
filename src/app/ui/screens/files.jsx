import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {DUMMY_ERROR, SERVER_URL} from "../../util/const";
import  notFound from "../../../assets/not_found.jpg";
import FileListComponent from "../componets/selected_files";

export default  function FilesPage() {
    let key= useParams().key;
    const [loading,setLoading] = useState(false);
    const [found,setFound] = useState(true);
    const  [files,setFiles] = useState(null);
    const  [error,setError] = useState("");
    async function loadFiles() {
        setLoading(true);
        try{
            const response = await axios.get(SERVER_URL+"records/"+key);
            console.log(response);
            if(response.status ===200){
                setFiles(response.data["files"] || []);
            }else{
                setFound(false);
                setError(response.data["error"]);
            }
        }catch (e) {
                setFound(false);
                setError(DUMMY_ERROR);
        }
        setLoading(false);
    }
    useEffect(()=>{
        loadFiles()
    },[key]);
   async function downloadFiles()  {
        // TODO download files
       let link = document.createElement('a');
       link.setAttribute('download', null);
       link.style.display = 'none';
       document.body.appendChild(link);
       for (let i = 0; i < files.length; i++) {
           setTimeout(()=>{
               link.setAttribute('href', files[i]["file"]);
               link.setAttribute(
                   'download',
                   files[i]["name"],
               );
               link.click();
           },i*2000);
       }
       document.body.removeChild(link);
    }

    if(loading) return  <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <p className="loading" >Loading ...</p>
    </div>
    if(!found || files ==null || files.length ===0) return(
        <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={notFound} style={{width:"50%"}} alt='file not found'/>
        <p className='error'>{error}</p>
    </div>);

    return (
        <div className="m-3 p-2 ">
            <p className="loading" style={{
                width:'15%', marginLeft:'42%', marginBottom:'30px', marginTop:'20px'
            }}>Your Files</p>
            <FileListComponent files={files}/>
            <button className="btn btn-warning" style={{
                width:'15%', marginLeft:'42%', marginBottom:'30px', marginTop:'20px'
            }} onClick={()=>{
                downloadFiles();
            }}>Download</button>
        </div>
    );
}
