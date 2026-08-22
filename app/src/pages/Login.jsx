
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const navigate = useNavigate();

    
        useEffect (() => {
            const token = localStorage.getItem("token")
    
            async function checkareAuth() {
                if (token) {
                    return navigate("/me")
                }
                
            }
            
            checkareAuth()
        }
        ,[navigate]
        )
    async function handleSumbit(e) {
        e.preventDefault();
        
        const res = await fetch("http://localhost:5050/auth/login", {
            method :"POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({username, password})
        })

        // console.log (username)
        // console.log (password)
        // console.log (displayname)
        const data = await res.json();
        console.log("Login response:", data);
        if (res.ok) {
            localStorage.setItem("token" , data.token);
            console.log("Login success")
            navigate("/me")
            
        } else {
            console.log("Log in Failed.. " , data)
        }
    } 

    return (
        <>
        
            <form onSubmit={handleSumbit}>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" placeholder="Enter username" name="username"
                        value={username}
                        onChange={(e)=> {setUsername(e.target.value)
                        }
                        }
                        ></input>
                </div>
                
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="text" placeholder="Enter password" name="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    ></input>
                </div>
                <div>
                    <button type="submit">Submit Form</button>
                </div>
            </form>

        </>
    )   
}

export default Login