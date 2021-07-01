import { setState } from "react";

export const ChatMessage = ({data}) => {

    return(
        <>
            {data.map((value, key)=>{
                if(value.owner==='sender'){
                    return(
                        <>
                        <div className="talk-bubble triangle left-top">
                            <div className="talktext">
                                <p>{value.mess}</p>
                            </div>
                        </div><br />
                        </>
                    )
                }else{
                    return(
                        <>
                        <div className="talk-bubble triangle right-top">
                            <div className="talktext">
                                <p>{value.mess}</p>
                            </div>
                        </div><br />
                        </>
                    )
                }
            })}
        </>
    )
}

