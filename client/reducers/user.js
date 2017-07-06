export default function(state = {auth:false}, action) {

    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth:'Yeessss'};
    }

    return state;
}