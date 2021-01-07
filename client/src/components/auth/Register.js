import React, {useState} from 'react'
import FormInput from './../reusable/FormInput'
// use forminput component

const Register = () => {

    const initialState = {
        email: "",
        username: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(initialState)


    function handleChange(event){
        const { name, value } = event.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        // functionality ...
    }


    return(
        <div>
            <div>

                <div className="heading">
                    <h1>Register a new account</h1>
                </div>
                <div className="authFormDiv">
                    <form className="authForm" onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <FormInput name="email" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Username</label>
                            <FormInput name="username" onChange={handleChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <FormInput name="password" onChange={handleChange} />
                        </div>
                        
                        <input
                            type="submit"
                        />
                    </form>
                </div>
            </div>
            
        </div>
    )
}


export default Register