export function auth(email, password) {

    console.log('Yep From auth action');

    return {type:'LOGIN',payload:email};
}