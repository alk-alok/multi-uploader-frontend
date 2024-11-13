import axios from 'axios';

const API_URL = 'https://multi-uploader-backend.onrender.com/api';

export const uploadFiles = async (files) => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    // console.log(response.data)
    return response.data;
};

export const fetchFiles = async () => {
    const response = await axios.get(`${API_URL}/all-files`);
    // console.log(response.data)
    return response.data.links;
};

export const getDownloadLinks = async (fileIds) => {
    const response = await axios.post(`${API_URL}/download`, { files: fileIds });
    // console.log(response.data)
    return response.data.links;
};