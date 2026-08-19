function Reg() {
    return (
        <>
        
            <form action="/submit-endpoint" method="POST" >
                <div>
                    <label for="username">Username : </label>
                    <input type="text" placeholder="Enter username" name="username"></input>
                </div>
            </form>

        </>
    )   
}

export default Reg