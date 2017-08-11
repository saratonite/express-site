export default function(state = {auth:false,data:null,userCreated:false}, action) {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth:'Yeessss'};

        case 'USER_AUTHENTICATED': 
            console.log('REDC:USR:USER_AUTHENTICATED');
            return { ...state, auth:true,user:action.payload };
        
        case 'USER_LOGOUT' :
            return { ...state, auth:false, user: null}

        case 'USER_CREATED' :

            return { ...state,auth:false , userCreated:true };
    }


    return state;
}