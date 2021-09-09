import React, { useState } from 'react';
const useStorage = ({ initData }) => {
    const [data, setData] = useState(initData);
    const [arr, setArr] = useState(initData);
    const deleteName = (name) => {
        setArr(arr.filter(element => element !== name));
    }
    return {
        data,
        arr,
        deleteName,
    };
};

export default useStorage;