export const login = async (username, password) => {

    return await fetch("https://localhost:44382/api/Account/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          username,
          password
        })
      }).then((res) => res.json())
      
      
}

export const logout = () => {
    console.log('logout');
    console.log(localStorage);
    localStorage.removeItem('userInfo');
   
    console.log(localStorage);
}

export const getUser = () => {
    return localStorage.getItem('userInfo');
}