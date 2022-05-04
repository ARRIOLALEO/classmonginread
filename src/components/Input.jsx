import {Input as InputlHolder} from "@mui/material"

function Input({v,handlerInput}){

    return(
        <InputlHolder placeholder="give me a messga" value={v} onChange={(e)=> handlerInput(e.target.value)}/>
    )
}

export default Input
