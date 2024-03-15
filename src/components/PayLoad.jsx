import { useState } from "react";
import axios from 'axios';

export const PayLoad = ({setResponse}) => {
    const [text, setText] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('https://vfb56z3gv6.execute-api.us-east-1.amazonaws.com/chat', { message: text });
            setResponse(res.data.message.content);
        } catch (error) {
            console.error('Error sending message:', error);
            setResponse('Failed to get a response from the server.'); // Update the state with the error message
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div className="flex flex-col items-center mt-6">
            <div className="flex justify-between border-2 border-black w-1/2">
                <input 
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    value={text} 
                    className="w-11/12 p-2" 
                    placeholder="Ask any question here ex: Give me a resume template"
                />
                <button 
                    onClick={sendMessage} 
                    className="flex justify-center items-center border-black border-l-2 p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l-2.731-8.875A59.769 59.769 0 0118.485 12a59.768 59.768 0 01-15.216 8.875L6 12zm0 0h7.5"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};
