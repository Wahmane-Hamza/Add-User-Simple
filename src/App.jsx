import React, { useState } from 'react' 
import Inputinfo from "./Inputinfo"
import Showvalue from './Showvalue';


export default function App() {
    const [result,setresult] = useState([]);
    
    const takeresult = (e) =>
    {
      e.preventDefault()
      let form = e.target

      let box1 
      form.football.checked === true ? box1 = form.football.value : box1 = ''
      let box2
      form.basketball.checked == true ? box2 = " and " + form.basketball.value : box2 = ''
      let box3
      form.tennis.checked == true ? box3 = " and " + form.tennis.value : box3 = ''

      setresult(oldvalue =>[...oldvalue,
        [form.com.value,
        "gender : " + form.radio.value,
        "Countries : " + form.countries.value,
        "sport : " + box1 + box2 + box3,
        "Comment : " + form.comment.value]
      ])
      setTimeout(() =>{
      form.reset()
      },500
      )
      
    }
    let filtercom =result.filter((e)=>e != "")

  return (
    <div>
      <div className='forme'>
      <Inputinfo handleSearch={takeresult}/>
      </div>
      <div>
      <Showvalue  info={filtercom}/>
      </div>
    </div>
  )
}
