import { useState } from 'react';

function useInput(initialValue, max) {
    const [inputValue, setInputValue] = useState(initialValue);
    const handleChange = (e) => { 
        const value = e.target.value;
        setInputValue((value.length > max) ? value.substr(0, max) : value); // 글자 수 제한   
    };

    return [inputValue, setInputValue, handleChange];
}

export default useInput;