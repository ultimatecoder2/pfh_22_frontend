import {authRecord} from '../apis/backend_api';

export const codeGeneratorAPI = (data, setLoading) => async (dispatch,getState) =>{
    try{
        setLoading(true);
        const formData = new FormData();
        formData.append('source_json', JSON.stringify(data.json_file));
        formData.append('mapping_file', data.csv_mapping);

        const response = await authRecord(data.token).post('/main/generator/', formData);
        console.log(response);
    } catch(e){
        console.log(e);
    }
    setLoading(false);
}