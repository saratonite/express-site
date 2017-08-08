import axios from 'axios';

export function auth(email, password) {

    console.log('Yep From auth action');
    return dispatch=> {
        axios.post('api/auth',{ email: email ,password:password})
                    .then(res=>{

                        console.log('Got response ',res);

                        dispatch({ type:'USER_AUTHENTICATED',payload:res.data.user})
                    })
                    .catch((err)=>{

                        console.log('Bbbbb',err);
                        console.log('gggg',err.response);

                    })

    }
    

    //return {type:'LOGIN',payload:email};
}

export function register(newuser) {
    return (dispatch) => {
        axios.post('api/user',newuser)
            .then(response => {
                console.log('Register success ', response);
                dispatch({ type:'USER_CREATED',payload:response.data});
            })
            .catch(err => {

                console.log('Register failed',err);

            })
    }
}

export function logout() {
    return {
        type: 'USER_LOGOUT'
    }
}