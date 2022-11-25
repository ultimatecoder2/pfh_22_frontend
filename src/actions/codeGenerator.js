import axios from 'axios';
import {authRecord, accessURL} from '../apis/backend_api';


export const codeGeneratorAPI = (data) => async (dispatch,getState) =>{
    try{
        const formData = new FormData();
        formData.append('source_json', data.json_file);
        formData.append('mapping_file', data.csv_mapping);

        const response = await axios({
            method: "POST",
            url: accessURL+"main/executor/",
            data: formData,
            headers: {
                "Authorization": "Token "+ data.token,
                "Content-type":"multipart/form-data"
            }
        });
        console.log(response);

    } catch(e){
        console.log(e);
    }


}