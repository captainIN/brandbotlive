import React from 'react'

function CustomerButton({txt, onClick}) {
    return (
        <button className="customer-button" onClick={()=>onClick()}>{txt}</button>
    )
}

export default CustomerButton
