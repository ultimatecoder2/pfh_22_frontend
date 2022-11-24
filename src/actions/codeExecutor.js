import {authRecord} from '../apis/backend_api';

export const getMappingOptions = () => async (dispatch,getState) =>{

}
export const codeExecuterAPI = (data) => async (dispatch,getState) =>{
    try{
        console.log(data);
        // const response = await authRecord(data.token).post('/main/executor', data);
        // console.log(response);

    } catch(e){
        console.log(e);
    }


}