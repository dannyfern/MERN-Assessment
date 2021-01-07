import React, {useState} from 'react'


const Register = () => {

    const initialState = {
        email: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(initialState)


    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault()

    }


    return(
        <div>
            <div>

                <div className="heading">
                    register
                </div>
                <div className="authFormDiv">
                    <form className="authForm" onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input 
                            type="text"
                            name="password"
                            onChange={handleChange}
                        />
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