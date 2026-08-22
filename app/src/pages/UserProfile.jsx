import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UserProfile() {
    const {id} = useParams();
    const [userData , setUserData] = useState(null)
    const [err, setErr] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            const token = localStorage.getItem("token")
            if (!token) {
                navigate("/auth")
                return
            }


            const response =  await fetch("http://localhost:5050/profile/me", {
                headers : { Authorization : `Bearer ${token}`}
            })

            if (response.ok) {
                const data = await response.json();
                setUserData(data)
            } else {
                localStorage.removeItem("token");
                navigate("/auth")
            }
        }

        
        getUserData()
    }, [navigate]

    )
    if (!userData) return <div> Loadind ... </div>
    return(
        <>
            <div style={{ padding: "20px" }}>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        </>
    )
}



export default UserProfile