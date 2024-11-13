import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import FileList from './components/FileList';
import FileDownload from './components/FileDownload';

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    return (
        <div className="App">
            <h1>File Uploader and Downloader</h1>
            <FileUploader />
            <FileDownload selectedFiles={selectedFiles} />
            <FileList selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        </div>
    );
}

export default App;
