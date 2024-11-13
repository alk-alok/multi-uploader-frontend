import React from 'react';
import { getDownloadLinks } from '../api';

const FileDownload = ({ selectedFiles }) => {
    const handleDownload = async () => {
        try {
            const downloadLinks = await getDownloadLinks(selectedFiles);
            // console.log(downloadLinks, "jnwbekktv")
            
            downloadLinks.forEach(async link => {
                try {
                    const response = await fetch(link.cloudinaryUrl);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = link.originalName;
                    a.target = '_blank';  
                    a.rel = 'noopener noreferrer'; 
                    document.body.appendChild(a);
                    a.click();
                    
                    // Cleanup
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                } catch (downloadError) {
                    window.open(link.cloudinaryUrl, '_blank');
                }
            });
        } catch (error) {
            console.error('Error downloading files:', error);
        }
    };

    return (
        <>
            <h4>Download all selected files</h4>
            <button onClick={handleDownload} disabled={selectedFiles.length === 0}>
                Download Selected Files
            </button>
        </>
    );
};

export default FileDownload;