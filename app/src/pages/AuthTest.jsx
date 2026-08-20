import { Link , useNavigate } from "react-router-dom"
import { useEffect } from "react"

function AuthTest() {

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



    return (
        <>
        <div className=" *:p-2.5 grid-cols-1 grid h-36 text-center *:w-2xs justify-center items-center *:rounded-2xl *:bg-blue-950 *:text-white">
            <Link to="/reg" >Register</Link>
            <Link to="/login" >Login</Link>
        </div>
        </>
    )
}


export default AuthTest