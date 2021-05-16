import React, { useEffect, useState } from 'react'
import AdminMessage from './AdminMessage'
var communicate = [
    {type:"admin", msg:"Hi, Hope you are Fine."},
    {type:"admin", msg:"Please tell me your requirements."},
    {type:"customer", options:["Web Development", "App Development", "Social Media Marketing"]},

]
function MessageControl() {
    const [data, setdata] = useState([])
    useEffect(() => {
        var temp = []
        temp = communicate.map((item, index) => {
            console.log(item)
            if(item.type === 'admin'){
                return <AdminMessage key={index} msg={item.msg}/>
            }
        })
        setdata(temp)
    }, [])
    return (
        <div>
            {data}
            {/* {communicate.map((item, index) => setTimeout(()=>{
                if(item.type === 'admin'){
                    // return <AdminMessage key={index} msg={item.msg}/>
                }else{
                    // return item.options.map((btn, idx) => {
                    //     return <button key={idx}>{btn}</button>
                    // })
                }
            },2000))} */}
        </div>
    )
}

export default MessageControl
