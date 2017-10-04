export default function reducer(state={
    authorised: false,
    role:null,
    loggin_in:false
    },action) {
    switch (action.type){
        case "LOGIN_REQUEST": {
            return {...state,loggig_in:true}
        }
        case "LOGIN_SUCCESS": {
            return {...state,loggig_in:false,authorised:true,role:action.payload,}
        }
        case "LOGIN_FAILURE": {
            return {...state,loggig_in:false,authorised:false}
        }
    }

}