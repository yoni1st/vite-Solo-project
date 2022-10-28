import React, {useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Body from './pages/Body';
import LogIn from './pages/LogIn';
import AddUser from './pages/AddUser';

export default function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/body' element={<Body />}></Route>
        <Route path='/login-in' element={<LogIn />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

// export default function App() {
//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       Response => Response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])
  
//   return (
//     <div>
//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading ... </p>
//         ) : ( 
//           backendData.users.map((user, i) => (<p key={i}>{user}</p>))
//       )}
//     </div>
//   );
// }
