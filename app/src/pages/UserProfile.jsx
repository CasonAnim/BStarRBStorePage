import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function UserProfile() {
    const {id} = useParams();
    const [userData , setUserData] = useState(null)

    useEffect(() => {
        async function getUserData() {
            const url = await fetch(`http://localhost:5050/profile/${id}`)
            const data = await url.json();
            setUserData(data);
        }
        getUserData()
    }, [id]

    )
    if (!userData) return <div> Loadind ... </div>
    return(
        <>
            <div className=" text-5xl *:m-8">
            <div>Loaded Complete !</div>
            <div>Name : {userData.displayName}</div>
            <div>Username : {userData.username}</div>
            <div>Balance : {userData.balance}</div>

            </div>
        </>
    )
}



export default UserProfile