import React, { useEffect, useState } from 'react';
import { fetchFiles } from '../api';

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
                ? prevSelected.filter(id => id !== fileId)
                : [...prevSelected, fileId]
        );
    };


    return (
        <div>
            <h3>Uploaded Files</h3>
            <ul>
                {files?.map(file => (
                    <li key={file._id}>
                        <input
                            type="checkbox"
                            checked={selectedFiles.includes(file._id)}
                            onChange={() => handleSelectFile(file._id)}
                        />
                        <p>{file.originalName}</p>
                        <div style = {{ height: 50, width: 50 }}>
                            {
                                <img src={file.cloudinaryUrl}
                                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                                alt="Can show only images"
                                />
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
