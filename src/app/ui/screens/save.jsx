import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import React from "react";
import {
    DUMMY_ERROR,
    FILES_LIMIT_ERROR,
    FILES_NOT_SELECTED_ERROR,
    FILES_SIZE_LIMIT_ERROR,
    MAX_FILES_LIMIT,
    MAX_SIZE_LIMIT, SERVER_URL
} from "../../util/const";
import FileListComponent from "../componets/selected_files";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default  function SavePage() {
    const [loading,setLoading] = useState(false);
    const [err,setError] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate =useNavigate();
   function addSelectedFiles(newFiles) {

        let totalFilesSize = 0;
        let uniqueFiles = new Set();
        let files =[];
        for(let i =0;i<selectedFiles.length;i++){

            if(!uniqueFiles.has(selectedFiles[i].name)){
                files.push(selectedFiles[i]);
                totalFilesSize+=selectedFiles[i].size;
                uniqueFiles.add(selectedFiles[i].name);
            }
        }
        for(let i =0;i<newFiles.length;i++){
            let newFile =newFiles[i] ;
            if(!uniqueFiles.has(newFile.name)){
                files.push(newFile);
                totalFilesSize+=newFiles[i].size;
                uniqueFiles.add(newFile.name);
            }
        }
       if(files.length > MAX_FILES_LIMIT) return setError(FILES_LIMIT_ERROR);// number of file limit

       if(totalFilesSize > MAX_SIZE_LIMIT) return  setError(FILES_SIZE_LIMIT_ERROR); // total size of selected files
        setSelectedFiles(files);
        console.log(uniqueFiles);
        setError("");
    }


   async function uploadFiles() {
       if(selectedFiles ==null || selectedFiles.length === 0) return setError(FILES_NOT_SELECTED_ERROR);
       setLoading(true);
       const formData= new FormData();
       selectedFiles.forEach((file)=>{
           formData.append(file.name,file);
       });
       // TODO update url soon
       try{
           const headers = {'Access-Control-Allow-Origin':"https://cloudjot-backend.onrender.com/records",'Access-Control-Allow-Credentials':true};
           let response =await axios.post(SERVER_URL+"records/",formData,{headers});
           // console.log(response);
           if(response.status ===201){
                const key = response.data["key"];
                 // navigate to key page
                navigate("/key/"+key);
           }else{
               setError(response.data["error"]);
           }

       }catch (e) {
           console.log(e);
            setError(DUMMY_ERROR);
       }

        setLoading(false);
   }

return<div className="d-flex flex-column align-content-center">
                    <div className="d-flex flex-row " style={{height:"25vw",marginTop:"40px",borderRadius:"12px"}}>
                        <FileUploader
                            multiple={true}
                            maxSize={5}
                            onTypeError={(err)=>{
                                console.log("Type "+err);
                                setError(err);
                            }}
                            onSizeError={(err)=>{
                                setError(err);
                                console.log("Size "+err);
                            }}
                            handleChange={addSelectedFiles} name="file"> <div className="flex-grow-1 FilesDragAndDrop__area">
                            <span
                                role='img'
                                aria-label='emoji'
                                className='area__icon'>
                           &#128190;
                            </span>
                        </div></FileUploader>

                        <div className="flex-grow-1 selectedFiles scrollParent">
                            {selectedFiles !=null && selectedFiles.length >0 ?<FileListComponent files={selectedFiles}
                            onDelete={(file)=>{
                                    const files = [];
                                    for(let i =0;i<selectedFiles.length;i++){
                                        if(selectedFiles[i].name !== file.name){
                                            files.push(selectedFiles[i]);
                                        }
                                    }
                                    setSelectedFiles(files);
                                }
                                }/>
                                :<center><p>No files selected</p></center>}
                        </div>
                    </div>

                    {(err!=null && err.length > 0) ?<p className="error">{err}</p>:null}
                    <Button className={loading?"row btn-secondary smoothTransition": "row btn-warning smoothTransition"} onClick={
                        ()=>{
                           if(!loading) uploadFiles();
                        }
                    } style={{width:'20%', margin:'auto', marginBottom:'30px', marginTop:'20px'}}> {loading?"Uploading ...": "Upload"} </Button>
                </div>

}


