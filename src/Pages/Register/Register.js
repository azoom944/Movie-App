import { useState } from "react";



function Register(){

    const [userData, setUserData] = useState({
        name:"",
        username:"",
        email: "",
        password: "",
        confirmpassword:""
    })



    const [erros, setErrors] = useState({
        nameError:"",
        usernameError:"",
        emailError: "",
        passwordError: "",
        confirmpasswordError:""

    
    })

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#]).{8,}$/;
    return passwordRegex.test(password);
}
        
        const chageUserData = (e) => {
            console.log(e.target.value);
            if (e.target.name == "name") {
                setUserData({
                    ...userData,
                    name: e.target.value
                });
                setErrors({
                    ...erros,
                    nameError: e.target.value.length ==0 && "This Field Is Required"
                });
            }else if (e.target.name == "username") {
                
                const isWhitespace = e.target.value.includes(" ");
                setUserData({
                    ...userData,
                    username: e.target.value
                });
                setErrors({
                    ...erros,
                    usernameError: e.target.value.length == 0 ? "This Field Is Required" : isWhitespace && "Username cannot contain spaces" 
                });
            } else if (e.target.name == "email") {
                setUserData({
                    ...userData,
                    email: e.target.value
                });
                setErrors({
                    ...erros,
                    emailError: e.target.value.length == 0 && "This Field Is Required"
                });
            } else if(e.target.name == "password") {
                setUserData({
                    ...userData,
                    password: e.target.value
                });
                setErrors({
                    ...erros,
                    passwordError: e.target.value.length == 0 ? "This Field Is Required"  : !isValidPassword(e.target.value) && "Invalid password "
                    
                });
            }
            else if(e.target.name == "confirmpassword") {
                setUserData({
                    ...userData,
                    confirmpassword: e.target.value
                });
                setErrors({
                    ...erros,
                    confirmpasswordError: e.target.value.length == 0 ? "This Field Is Required"  : e.target.value !== userData.password && "Passwords do not match" 
                    
                });
            }
        };
        
    

    const submitData = (e) => {
        if(!erros.emailError || !erros.passwordError || !erros.nameError ||erros.usernameError || erros.confirmpasswordError){
            e.preventDefault()
        }
    }


    return(
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">

        <form className="container-fluied col-5 p-3 mb-4 shadow bg-white rounded-3" onSubmit={(e) => submitData(e)}>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text" 
                className={`form-control ${erros.nameError && "border-danger"}`}
                value={userData.name}
                onChange={(e) => chageUserData(e)}
                name = "name"
                />
                <p className="text-danger"> {erros.nameError}  </p> 
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputUserName" className="form-label">UserName</label>
                <input type="text" 
                className={`form-control ${erros.usernameError && "border-danger"}`}
                value={userData.username}
                onChange={(e) => chageUserData(e)}
                name = "username"
                />
                <p className="text-danger"> {erros.usernameError}  </p> 
            </div>
            <div className="mb-3 ">
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
                <input type="password"
                className={`form-control  ${erros.passwordError ? "border-danger" : "border-success"}`}
                value={userData.password}
                onChange={(e) => chageUserData(e)}
                name="password"/>
                <p className="text-danger"> {erros.passwordError} </p>    
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label ">Confirm password</label>
                <input type="password"
                className={`form-control  ${erros.confirmpasswordError ? "border-danger" : "border-success"}`}
                value={userData.confirmpassword}
                onChange={(e) => chageUserData(e)}
                name="confirmpassword"/>
                <p className="text-danger"> {erros.confirmpasswordError} </p>    
            </div>
            
            <button 
            disabled = {erros.emailError || erros.passwordError || erros.usernameError || erros.nameError || erros.confirmpasswordError && "disabled"}
            type="submit" className="btn text-bg-success p-3 ">Register</button>
        </form>
        </div>
    
    )


}

export default Register;