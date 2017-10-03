import axios from 'axios';

export function auth(email, password) {

    console.log('Yep From auth action');
    return dispatch=> {
        return axios.post('api/auth',{ email: email ,password:password})
                    .then(res=>{
                        dispatch({ type:'USER_AUTHENTICATED',payload:res.data.user})
                        return res
                    })

    }
    

    //return {type:'LOGIN',payload:email};
}

export function register(newuser) {
    return (dispatch) => 
        axios.post('api/user',newuser)
            .then(response => {
                console.log('Register success ', response);
                dispatch({ type:'USER_CREATED',payload:true});
                return response;
            })
    
}

export function logout() {
    return {
        type: 'USER_LOGOUT'
    }
}