import { Link } from "react-router-dom"

function AuthTest() {
    return (
        <>
        <div className=" *:p-2.5 grid-cols-1 grid h-36 text-center *:w-2xs justify-center items-center *:rounded-2xl *:bg-blue-950 *:text-white">
            <Link to="/" >Register</Link>
            <Link to="/" >Login</Link>
        </div>
        </>
    )
}


export default AuthTest