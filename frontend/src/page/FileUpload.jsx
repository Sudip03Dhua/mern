import axios from "axios";
import { useContext } from "react";
import MyContetxt from "../context/Mycontext";
import { useState } from "react";

const FileUpload = () => {
    const { token } = useContext(MyContetxt)
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fromdata = new FormData();
            fromdata.append("file", file);

            const response = await axios.post("https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/upload", fromdata, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response) {
                setFilename([...filename,response.data.filePath.split("/")[1]]);
                console.log("file uploaded successfully");
            } else {
                console.log("file upload failed");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleDownload = async(filePath)=>{
        try {
            const response = await axios.get(`https://congenial-carnival-wrr4gx7667gwfp6-3000.app.github.dev/reg/uploads/${filePath}`,{responseType:"blob"});
            if(response){
                console.log("file downloaded successfully");
            }else{
                console.log("file download failed");
            }
        } catch (error) {
            console.log("Download error:", error);
        }
    }
    return (
        <div>
            <div>Files Download</div>
            {filename?.map((filePath,index)=>(
                <div onClick={()=>handleDownload(filePath)} key={index}>
                    {filePath}
                </div>
            ))}

            <h1>File Upload Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Upload File:</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />

                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default FileUpload