import axios from 'axios';

export const httpCall = async(config)=>{
    const response = await axios(config);
    try{
        return{
            success: true,
            data: response.data
        }

    } catch(err){
        return {
            sucess:false,
            err: Response.err
        }
    }
}