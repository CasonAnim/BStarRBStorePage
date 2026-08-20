// pages/ProfileTest.jsx
import { useState } from "react";

function ProfileTest() {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState("");

    async function handleGetMe() {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found — please log in first");
            return;
        }

        const response = await fetch("http://localhost:5050/profile/me", {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.ok) {
            const data = await response.json();
            setProfileData(data);
            setError("");
        } else {
            const errText = await response.text();
            setError(`Failed: ${errText}`);
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={handleGetMe}>Get My Profile (/me)</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {profileData && <pre>{JSON.stringify(profileData, null, 2)}</pre>}
        </div>
    );
}

export default ProfileTest;