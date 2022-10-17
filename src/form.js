import React, { useState,useEffect } from 'react'
export default function Form(){

    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data)

    function handleData(e){
        setInputData({...inputData, [e.target.name]: 
            e.target.value})
    }

    console.log(inputData)
    const [flag, setFlag] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
         if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Input Fields are Mandatory")
        }
        else{
            setFlag(true)
    }
    }


      useEffect(() =>{
        console.log("Registered")
    }, [flag])

    return(
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
    
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration Form</h1>
                <div>
            <input type="text" value={inputData.name} onChange={handleData}  placeholder='Enter Your Name' name='name'></input>
        </div>
        <div>
            <input type="text" value={inputData.email} onChange={handleData}  placeholder='Enter Your Email' name='email'></input>
        </div>
        <div>
            <input type="text" value={inputData.password} onChange={handleData}  placeholder='Enter Your Password' name='password'></input>
        </div>
                
                <button type='submit'>Submit</button>
            </div>
        </form>
        </>
    )
}
