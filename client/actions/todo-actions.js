import axios from 'axios';


export function getTodos() {

     return dispatch=> {
        return axios.get('api/todos')
                    .then(res=>{
                        console.log('---',res);
                        dispatch({ type:'TODOS_FETCHED',payload:res.data})
                        return res
                    })

    }
}