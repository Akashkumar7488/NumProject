// import React, { useState } from 'react'
// import {useParams, useNavigate} from 'react-router-dom';
// import axios from 'axios';

// const Resetpassword = () => {
//   const {id, token} = useParams();
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     newPassword:"",
//     confirmPassword:"",
//   });
//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const res = await axios.post(`http://localhost:3001/forgotpassword/${id}/${token}`, input);

//     if(res.status === 200) {
//       alert("Password reset Successfully");
//       navigate("/login");
//     }
//   };
//   return (
//     <>
//      <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
//         <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//           <h2 className="text-3xl font-bold text-center">Reset Password</h2>
//           <label htmlFor="email" className="text-gray-700 text-sm font-bold">
//             Password:
//             <input 
//               type="password" 
//               id=""
//               placeholder="Enter New Password"
//               className="border rounded w-full py-1 px-2 mt-1" 
//                           name="newPassword"
//                           value={input.newPassword}
//                           onChange={(e) =>
//                             setInput({
//                               ...input,
//                               [e.target.name]: e.target.value,
//                             })
//                           } 
//                          required 
//             />
//           </label>
//           <label htmlFor="email" className="text-gray-700 text-sm font-bold">
//             Confirm password:
//             <input 
//               type="password" 
//               id=""  
//               placeholder="Enter Confirm Email"
//                           className="border rounded w-full py-1 px-2 mt-1"
//                           name="confirmPassword"
//                           value={input.confirmPassword}
//                           onChange={(e) =>
//                             setInput({
//                               ...input,
//                               [e.target.name]: e.target.value,
//                             })
//                           } 
//               required 
//             />
//           </label>
//           <button  type='submit'
//             className="bg-green-500 text-white p-2 font-bold hover:bg-green-600 text-xl rounded">
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Resetpassword;











// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Resetpassword = () => {
//   const { id, token } = useParams();
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     newPassword: '',
//     confirmPassword: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`http://localhost:3001/forgotpassword/${id}/${token}`, input);
//       if (res.status === 200) {
//         alert('Password reset Successfully');
//         navigate('/login');
//       } else {
//         alert('Error in resetting password');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Error in resetting password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
//         <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//           <h2 className="text-3xl font-bold text-center">Reset Password</h2>
//           <label htmlFor="newPassword" className="text-gray-700 text-sm font-bold">
//             Password:
//             <input
//               type="password"
//               id="newPassword"
//               placeholder="Enter New Password"
//               className="border rounded w-full py-1 px-2 mt-1"
//               name="newPassword"
//               value={input.newPassword}
//               onChange={(e) =>
//                 setInput({ ...input, [e.target.name]: e.target.value })
//               }
//               required
//             />
//           </label>
//           <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold">
//             Confirm Password:
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Enter Confirm Password"
//               className="border rounded w-full py-1 px-2 mt-1"
//               name="confirmPassword"
//               value={input.confirmPassword}
//               onChange={(e) =>
//                 setInput({ ...input, [e.target.name]: e.target.value })
//               }
//               required
//             />
//           </label>
          
//           <button
//             type="submit"
//             className="bg-green-500 text-white p-2 font-bold hover:bg-green-600 text-xl rounded"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Resetpassword;





import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Resetpassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (input.newPassword !== input.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3001/forgotpassword/${id}/${token}`, input);
      if (res.status === 200) {
        alert('Password reset successfully');
        navigate('/login');
      } else {
        alert('Error in resetting password');
      }
    } catch (error) {
      console.error(error);
      alert('Error in resetting password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center">Reset Password</h2>
          <label htmlFor="newPassword" className="text-gray-700 text-sm font-bold">
            Password:
            <input
              type="password"
              id="newPassword"
              placeholder="Enter New Password"
              className="border rounded w-full py-1 px-2 mt-1"
              name="newPassword"
              value={input.newPassword}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            />
          </label>
          <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold">
            Confirm Password:
            <input
              type="password"
              id="confirmPassword"
              placeholder="Enter Confirm Password"
              className="border rounded w-full py-1 px-2 mt-1"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              required
            />
          </label>
          
          <button
            type="submit"
            className="bg-green-500 text-white p-2 font-bold hover:bg-green-600 text-xl rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
