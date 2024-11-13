import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import FileList from './components/FileList';
import FileDownload from './components/FileDownload';
import "./components/style.css"

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    return (
        <div className="app-container">
            <h1>File Uploader and Downloader</h1>
            <p>Note- 1. Please do not upload file more than 5 MB. <br/> 2. Please do not select files more than 10.</p>
            <i>(I have made thease instructions because I am using free version of cloudinary that can uload limited data.)</i>
            <FileUploader />
            <FileDownload selectedFiles={selectedFiles} />
            <FileList selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        </div>
    );
}

export default App;
