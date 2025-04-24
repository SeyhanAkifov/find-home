'use client';



export const login = async (username, password) => {
  return await fetch("https://localhost:44382/api/Account/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json())
  
};



// export const isAuthenticated =  localStorage.getItem("token") !== null ;
  



// export const getUser = () => {
//   return localStorage.getItem("email");
// };

export const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    // Check if localStorage is available
    return localStorage.getItem("token") !== null;
  }
  return false; // Default to false if running on the server
};

export const getUser = () => {
  if (typeof window !== "undefined") {
    // Check if localStorage is available
    return localStorage.getItem("email");
  }
  return null; // Default to null if running on the server
};
