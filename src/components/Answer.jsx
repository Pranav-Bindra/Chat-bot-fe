import React, { useEffect, useState } from 'react';

export const Answer = ({ response }) => {
    const [displayedResponse, setDisplayedResponse] = useState('');
    const words = response.split(' ');
    let index = 0; 

    useEffect(() => {
        setDisplayedResponse('');
        index = 0;

        const intervalId = setInterval(() => {
            if (index < words.length-1) {
                setDisplayedResponse((prev) => `${prev} ${words[index]}`);
                index++;
            } else {
                clearInterval(intervalId); 
            }
        }, 200); 

        return () => clearInterval(intervalId);
    }, [response]);

    return (
        <div className="flex justify-center mt-6">
            <div className="p-2 mb-4 border-2 border-black w-1/2 h-auto flex flex-wrap">
                {displayedResponse}
            </div>
        </div>
    );
};
