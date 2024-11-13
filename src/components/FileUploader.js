import React, { useState } from 'react';
import { uploadFiles } from '../api';

const FileUploader = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => setFiles([...e.target.files]);

    const handleUpload = async () => {
        try {
            await uploadFiles(files);
            window.location.reload()
            setFiles([]);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default FileUploader;
