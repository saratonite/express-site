export default function(state = [], action) {

    switch(action.type) {

        case 'TODOS_FETCHED':
                console.info('ACTION',action);
                return action.payload;

        default:
            return state
    }
    
}