import React from 'react'

const Header = () => {
    return (
        <div>
            <div><h1 style={{color: "red", textAlign:'center', height:'100px',backgroundColor:'lightgray'}}>Workout App</h1></div>
            <div style={{ alignSelf:'flex-end', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}><p>login</p><p>sign up</p></div>
        </div>
    )
}

export default Header