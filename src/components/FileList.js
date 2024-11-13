import React, { useEffect, useState } from "react";
import { fetchFiles } from "../api";

const FileList = ({ selectedFiles, setSelectedFiles }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const loadFiles = async () => {
      const fetchedFiles = await fetchFiles();
      // console.log(fetchedFiles)
      setFiles(fetchedFiles);
    };
    loadFiles();
  }, []);

  const handleSelectFile = (fileId) => {
    setSelectedFiles((prevSelected) =>
      prevSelected.includes(fileId)
        ? prevSelected.filter((id) => id !== fileId)
        : [...prevSelected, fileId]
    );
  };

  return (
    <div className="file-list-container">
      <h3>Uploaded Files</h3>
      <ol className="file-list">
        {files?.map((file) => (
          <li key={file._id} className="file-item">
            <input
              type="checkbox"
              checked={selectedFiles.includes(file._id)}
              onChange={() => handleSelectFile(file._id)}
              className="file-checkbox"
            />
            <p className="file-name">{file.originalName}</p>
            <div className="file-image-container">
              <img
                src={file.cloudinaryUrl}
                className="file-image"
                alt={`File Type: ${file.mimeType}`}
              />
            </div>
            <p></p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FileList;
