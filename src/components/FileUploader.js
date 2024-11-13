import React, { useState } from "react";
import { uploadFiles } from "../api";
import "./style.css"

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => setFiles([...e.target.files]);

  const handleUpload = async () => {
    try {
      await uploadFiles(files);
      window.location.reload();
      setFiles([]);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="file-input"
      />
      <button onClick={handleUpload} className="upload-button">
        Upload All Files
      </button>
      <i>Please wait untill refresh...</i>
    </div>
  );
};

export default FileUploader;
