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