import React, { useEffect, useState } from 'react'
import AdminMessage from './AdminMessage'
import CustomerButton from './CustomerButton'
import CustomerMessage from './CustomerMessage'
var communicate = [
    { type: "admin", msg: "Hi, Hope you are Fine." },
    { type: "admin", msg: "Please tell me your requirements." },
    { type: "customer", further: { 
                                inputType: "button", 
                                options: [
                                    { name: "Web Development", onPress:[] }, 
                                    { name: "App Development", onPress:[] }, 
                                    { name: "Social Media Marketing", onPress:[] }] 
                                } 
    },


]

function MessageControl() {
    const [showForm, setShowForm] = useState(false)
    const [data, setdata] = useState([])
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [loading, setloading] = useState(false)
    const [err, seterr] = useState("")
    const validatePhone = () => {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(phone.match(phoneNum)) {
            return true;
        }
        else {
            return false;
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!validatePhone()){
            seterr("Phone number is not valid.")
            return
        }else{
            seterr("")
        }
        
        setloading(true)
        alert(`${name} we will contact you at ${phone}`)
        setloading(false)
    }
    useEffect(() => {
        var temp = []
        temp = communicate.map((item, index) => {
            console.log(item)
            if (item.type === 'admin') {
                return <AdminMessage key={index} msg={item.msg} />
            } else {
                if(item.further.inputType === 'text'){
                    return <CustomerMessage key={index} msg={item.msg} />
                }else if(item.further.inputType === 'button'){
                    return item.further.options.map((btn, index1) => {
                        return <CustomerButton key={index1} txt={btn.name} onClick={()=>setShowForm(true)}/>
                    })
                }
                
            }
        })
        setdata(temp)
    }, [])
    return (
        <div style={{position:'relative'}}>
            {data}
            {showForm && <div className="modal-form">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <p className="info-text">I will get in touch with you on a call. Please provide your <span>Name</span> and <span>Phone no.</span></p>
                        <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Your Name" required/>
                        <input type="text" onChange={(e)=>{setphone(e.target.value)}} placeholder="Your Phone No." required/>
                        {err !== "" && <p className="form-err">{err}</p>}
                        <input className="btn-submit" type="submit" value={loading?"Submitting...":"Submit"} disabled={loading}/>
                    </form>
                </div>}
        </div>
    )
}

export default MessageControl
