import {authRecord} from '../apis/backend_api';
import { EXECUTOR_FAILED, EXECUTOR_SUCCESS, GET_MAPPER_FAILED, GET_MAPPER_SUCCESS } from './actionTypes';

export const getMappingOptions = (data) => async (dispatch,getState) =>{
    console.log('fff');
    try {
        const response = await authRecord(data.token).get('/main/executor/');
        console.log(response.data);
        dispatch({type:GET_MAPPER_SUCCESS,payload:{data: response.data}});
        
    } catch (error) {
        console.log(error);
        dispatch({type:GET_MAPPER_FAILED,payload:{error: error}});
    }

}
export const codeExecuterAPI = (data) => async (dispatch,getState) =>{
    try{
        console.log(data);
        const response = await authRecord(data.token).post('/main/executor', data);
        console.log(response.data);
        dispatch({type:EXECUTOR_SUCCESS ,payload:{data: response.data}});
        
    } catch (error) {
        console.log(error);
        dispatch({type:EXECUTOR_FAILED,payload:{error: error}});
    }


}

