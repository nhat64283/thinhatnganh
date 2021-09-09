import React, { useState } from 'react';
const useStorage = ({ inputData }) => {
    const [data, setData] = useState(inputData);
    const [arr, setArr] = useState(inputData);
    const deletenewName = (newName) => {
        setArr(arr.filter(element => element !== newName));
    }
    return {
        data,
        arr,
        deletenewName,
    };
};

export default useStorage;