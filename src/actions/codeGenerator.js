import {authRecord} from '../apis/backend_api';

export const codeGeneratorAPI = (data) => async (dispatch,getState) =>{
    try{
        console.log("reached here");
        const formData = new FormData();
        formData.append('json_file', data.json_file);
        formData.append('csv_mapping', data.csv_mapping);

        const response = await authRecord(data.token).post('/main/executor/', data);
        console.log(response);

    } catch(e){
        console.log(e);
    }


}