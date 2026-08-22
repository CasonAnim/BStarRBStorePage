import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Tempbar() {

const [balance ,setBalance] = useState("");
const [displayName ,setDisplayName] = useState("");
  const navigate = useNavigate();
 
  const token = localStorage.getItem("token");
    useEffect(() => {
    if (token) {
      
      fetch('http://localhost:5050/profile/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {

          if (data.balance !== undefined) {
            setBalance(data.balance);
            setDisplayName(data.displayName);
          }
        })
        .catch((err) => console.error("Error fetching balance:", err));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/auth"); 
  };

  return (
    <nav className="bg-black text-white w-full px-6 py-4 flex items-center justify-between border-b border-gray-800">

      <div className="font-bold text-lg">
        <Link to="/">Logo</Link>
      </div>


      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>


        {token ? (
          <>
            <div className="bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
              <span className="text-gray-400">User :</span>
              <span className="text-green-400 font-bold">
                {displayName.toString()}
              </span>
            </div>

            <div className="bg-gray-900 border border-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
              <span className="text-gray-400">Balance:</span>
              <span className="text-green-400 font-bold">
                ฿{balance.toLocaleString()}
              </span>
            </div>
            
            <Link to="/topup" className="hover:text-gray-300">
              Top up
            </Link>
            <Link to="/products" >Products</Link>

            <Link to="/me" className="hover:text-gray-300">
              Profile
            </Link>
            <button 
              onClick={handleLogout} 
              className="text-red-500 hover:text-red-400 font-medium cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
        <>
            <Link to="/products" >Products</Link>

            <div className="bg-green-600 border border-green-300 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                <Link to="/reg" className="hover:text-gray-300">
                Sign up
                </Link>
            </div>
          <Link to="/login" className="hover:text-gray-300">
            Sign in
          </Link>
            </>
        )}
      </div>
      
    </nav>
  );
}

export default Tempbar;