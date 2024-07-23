import React, { useState } from 'react'
import axios from 'axios';
const Forgotpassword = () => {
  const [email, setEmail] = useState();
  const handleSubmit = async(e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3001/forgotpassword', {email});

    if(res) {
      alert('Email Sent Successfully');
    }
  }
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center">Enter your Email</h2>
          <label htmlFor="email" className="text-gray-700 text-sm font-bold">
            Email:
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full py-1 px-2 mt-1" 
              required 
            />
          </label>
          <button 
            className="bg-green-500 text-white p-2 font-bold hover:bg-green-600 text-xl rounded">
            Send
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Forgotpassword;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Forgotpassword = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3001/forgotpassword', { email });
//       if (res.status === 200) {
//         alert('Email Sent Successfully');
//       } else {
//         alert('Error in sending email');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Error in sending email');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
//         <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
//           <h2 className="text-3xl font-bold text-center">Enter your Email</h2>
//           <label htmlFor="email" className="text-gray-700 text-sm font-bold">
//             Email:
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border rounded w-full py-1 px-2 mt-1"
//               required
//             />
//           </label>
//           <button
//             className="bg-green-500 text-white p-2 font-bold hover:bg-green-600 text-xl rounded"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Forgotpassword;
