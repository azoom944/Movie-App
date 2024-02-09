import { useState } from "react";



function Login(){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })



    const [erros, setErrors] = useState({
        emailError: "",
        passwordError: ""

    
    })
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const chageUserData = (e) => {
        console.log(e.target.value)
        if(e.target.name == "email"){
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...erros, 
                emailError : e.target.value.length == 0 && "This Field Is Required" 
            })
        }else{
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...erros, 
                passwordError : e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length < 7 && "Password is very short" 
            })
        }
    }

    const submitData = (e) => {
        if(!erros.emailError || !erros.passwordError){
            e.preventDefault()
        }
    }


    return(
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        {/* <MyTitle  title="Add User" newClass="text-primary"/> */}
        <form className="container-fluied col-5 p-3 mb-4 shadow bg-white rounded-3" onSubmit={(e) => submitData(e)}>
            <div className="mb-3 pt-5">
                <label htmlFor="exampleInputEmail1" className="form-label ">Email Adrees</label>
                <input type="text" 
                className={`form-control  ${erros.emailError && "border-danger"}`}
                value={userData.email}
                onChange={(e) => chageUserData(e)}
                name = "email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"

                />
                <p className="text-danger"> {erros.emailError}  </p> 
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
                <input type={showPassword ? "text" : "password"}
                className={`form-control  ${erros.passwordError ? "border-danger" : "border-success"}`}
                value={userData.password}
                onChange={(e) => chageUserData(e)}
                name="password"/>
                <p className="text-danger"> {erros.passwordError} </p>
                
                <button
                            className="btn  btn-outline-secondary"
                            type="button"
                            onClick={togglePasswordVisibility} >
                            {showPassword ? "Hide" : "Show"}
                </button>

            </div>
            
            <button 
            disabled = {erros.emailError || erros.passwordError && "disabled"}
            type="submit" className="btn text-bg-primary p-3 w-100">Login</button>
        </form>
        </div>
    
    )


}

export default Login;