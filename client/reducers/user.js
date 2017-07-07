export default function(state = {auth:false,data:null}, action) {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth:'Yeessss'};

        case 'USER_AUTHENTICATED': 
            console.log('REDC:USR:USER_AUTHENTICATED');
            return { ...state, auth:true,user:action.payload };
    }


    return state;
}