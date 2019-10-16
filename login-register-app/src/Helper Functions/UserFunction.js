import axios from 'axios'

export const register = async (newUser) => {
    return axios
        .post('/register',{
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            if(res.data.success){
                localStorage.setItem('usertoken',JSON.stringify(res.data))
            }
            return res.data
        });
}

export const login = async (user) => {
    return axios
        .post('/login',{
            email: user.email,
            password: user.password
        })
        .then(res => {
            if(res.data.success){
                localStorage.setItem('usertoken',JSON.stringify(res.data))
            }
            return res.data
        })
        .catch(err => {
            console.log(err)
        });
}

export const isLoggedIn = () => {
    return localStorage.getItem("usertoken") !== null;
}