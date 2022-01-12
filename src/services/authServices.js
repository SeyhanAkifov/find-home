


export const login = async (username, password) => {
  return await fetch("https://apifindhome.seyhanakifov.com/api/Account/Login", {
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

export const authenticate = (userInfo) => {
  localStorage.setItem("email", userInfo.email);
  localStorage.setItem("username", userInfo.username);
  localStorage.setItem("token", userInfo.token);
  localStorage.setItem("expiration", userInfo.expiration);
 
};

export const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("email");
 localStorage.removeItem("token");
   localStorage.removeItem("expiration");
 
};

export const isAuthenticated =  localStorage.getItem("token") !== null ;
  



export const getUser = () => {
  return localStorage.getItem("expiration");
};
