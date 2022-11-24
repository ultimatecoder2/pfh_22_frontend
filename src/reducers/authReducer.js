import {SIGN_IN, SIGN_OUT, SIGN_UP, AUTH_FAILED} from '../actions/actionTypes';
const INITIAL_STATE = {
    isSignedIn:localStorage.getItem('isSignedIn'),
    token: localStorage.getItem('token'),
    error:null,
    message:null
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_UP:
            return{...state, isSignedIn:true, token:action.payload.token, error:null, message:null}
        case SIGN_IN:
            return{...state, isSignedIn:true, token:action.payload.token, error:null, message:null}
        case SIGN_OUT:
            return{...state, isSignedIn:false,  token:null, error:null, message:action.payload.msg}
        case AUTH_FAILED:
            return{...state, isSignedIn:false,  token:null,error:action.payload.error, message:null}
        default:
            return state
    }
}