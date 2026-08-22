    import {useState, useEffect } from "react";
    import { useParams } from "react-router-dom";
    function TestPage() {
        const {id} = useParams();
        const [account, setAccounts] = useState(null);
        // const
            useEffect(() => {
            async function getAccounts() {
                const response = await fetch(`http://localhost:5050/products/${id}`);
                const data = await response.json();
                setAccounts(data);
        }
            getAccounts();
            }, [id]);


        if (!account) return <div>Loading...</div>;
        return (
            <>
                <div>
                        <div>Price: {account.price} THB</div>
                        <div>Status: {account.status}</div>
                        <div>Status: {account.account.idGroup}</div>
                        {/* etc */}
                </div>
            </>
        )
    }

    export default TestPage