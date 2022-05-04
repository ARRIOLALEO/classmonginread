import { v4 as uuidv4 } from 'uuid';
import {Button } from "@mui/material"
function AllMessages({messages,deleteFunction}){

    return(
        <ul>
           {
               messages.map((message,index)=>(
                   <li key={uuidv4()}>{message}  <Button onClick={()=>deleteFunction(index)}>DELETE</Button></li>
               ))
           }
        </ul>
    )
}
export default AllMessages