


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



export const isAuthenticated =  localStorage.getItem("token") !== null ;
  



export const getUser = () => {
  return localStorage.getItem("email");
};
