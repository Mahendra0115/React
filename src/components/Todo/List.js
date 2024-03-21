import React,{useState} from "react";

const List = () => {

const [state ,setState] = useState(["An Element","Second Element","Third Element","Fourth Element "])
const [data,setData]=useState("List Page")

  return (
    <div>

      <h1>{data}</h1>

     <ul class="list-grup">
        {
   state.map(ele =>{
    return <li class="list-grup-tems">{ele}</li>
   })
     }

     </ul>
    </div>
  )
}
export default List;
