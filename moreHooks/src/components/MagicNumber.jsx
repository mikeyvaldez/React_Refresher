import { useState } from 'react';


export default function MagicNumber(){
    const magicNumber = 5;
    const secondMagicNumber = 10;
    const [messages, setMessages] = useState({
        p: "",
        button: "Click me until you reached the magic number"
    })

    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newCount = count + 1;
        if (newCount === magicNumber){
            setMessages({
                p: "You reached it!",
                button: "Click me until you reach the second Magic number"
            })
        } else if (newCount === secondMagicNumber){
            setMessages({
                p: "You reached it again!",
                button: "Stop clicking me"
            })
        }
        setCount(newCount)
    }

    return (
        <div>
            {messages.p && <p>{messages.p}</p>}
            <button onClick={handleClick} >{messages.button}</button>
        </div>
    )
}