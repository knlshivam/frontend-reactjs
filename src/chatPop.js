import { useState, useEffect } from "react";
import { ChatMessage } from "./chatMessage";

export const ChatPop =() => {
    const [allow, setAllow] = useState(false)
    const [chat, setChat] = useState([])
    const [tex, setTex] = useState()
    
    const mess = async() =>{
        try {
            const id = chat.length
            await fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => setChat([...chat, {'id': id+1, 'owner': 'api', 'mess': data.slip.advice}]))
            }catch (error) {
                console.log(error)
            }
        }

    useEffect(()=>{
    if(allow){
            mess()
        }
    }, [allow])

    const inputHandler = (e) => {
        if(e.target.value){
            const id = chat.length
            setChat([...chat, {'id': id+1, 'owner': 'sender', 'mess': e.target.value}])
            e.target.value=''
            setTex('')
        }
    }

    const submitHandler= () => {
        if(tex){
            const id = chat.length
            setChat([...chat, {'id': id+1, 'owner': 'sender', 'mess': tex}])
            setTex('')
        }
    }


useEffect(()=>{
    console.log(chat)
}, [chat])

    return(
        <>
        {allow?
        <div className="chat-details">
            <div className="chat-head">
                <p><strong>Hi There</strong></p>
                <p>The team typically replies in a few minutes.</p>
            </div>
            <div className="chat-body">
                <ChatMessage data={chat}></ChatMessage>
            </div>
            <div className="credits">We run on SurveySparrow</div>
            <div className="chat-type">
                <input type="text" placeholder="Write a reply..." onKeyPress={e=>(e.key==='Enter'? inputHandler(e) : null)} onChange={e=>setTex(e.target.value)} value={tex}/>
                <span className="material-icons" id="icon" onClick={submitHandler}>send</span>
            </div>
        </div>
        :
        <div className="chat-details-closed">
            <div className="chat-start">
                <p><strong>Hi There</strong></p>
                <p>Hello Ask Us Anything, Share Your Feedback</p>
            </div>
            <div className="chat-start-button">
                <p><strong>Start a Conversation</strong></p>
                <p>The team typically replies in a few minutes.</p>
                <div className="chat-start-button-button" onClick={e=>setAllow(true)}><span className="button-text">New Conversation</span><span className="material-icons">send</span></div>
            </div>
        </div>
        }
        </>
    )
}