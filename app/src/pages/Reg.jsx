import { useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";

function Reg() {
    const [username ,setUsername] = useState("");
    const [displayName ,setDisplayname] = useState("");
    const [password ,setPassword] = useState("");

    const navigate = useNavigate()
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
        
        const res = await fetch("http://localhost:5050/auth/register", {
            method :"POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({username, displayName,password})
        })

        // console.log (username)
        // console.log (password)
        // console.log (displayname)
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            navigate("/me")
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
                    <label htmlFor="displayName">Display Name : </label>
                    <input type="text" placeholder="Enter DisplayName" name="displayName"
                        value={displayName}
                        onChange={(e) => {setDisplayname(e.target.value)}}
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

export default Reg