


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
  }).then((res) => res.json());
};



export const logout = () => {
  localStorage.removeItem("userInfo");
};

export const getUser = () => {
  return localStorage.getItem("userInfo");
};
