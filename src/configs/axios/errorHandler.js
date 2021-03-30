import {toast} from 'react-toastify'


export default function errorHandler(error) {
    if (error) {
        let message;
        if (error.response) {
            if (error.response.status === 500) massage = "Somthing went terribly wrong";
            else massage = error.response.data.massage;
            
            if (typeof massage === "string") toast.error(message);
        
            return Promise.reject(error);
        }        
    }
}
   