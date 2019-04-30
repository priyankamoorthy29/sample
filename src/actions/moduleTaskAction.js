
import axios from "axios";
import {GET_ERRORS, GET_MODULE_TASKS,DELETE_MODULE_TASKS,GET_MODULE_TASK} from "./types";

export const addModuleTask=(module_task, history)=>async dispatch =>{
    try{
        await axios.post("http://localhost:8080/project/saveModule", module_task);
    history.push("/module");
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        })
    }
    
};

export const getBacklog=()=>async dispatch =>{
    const res = await axios.get("http://localhost:8080/project/getAllModule")
    dispatch({
        type:GET_MODULE_TASKS,
        payload:res.data
    });
}



export const deleteModuleTask = mt_id => async dispatch =>{
    if(
    window.confirm(
    `you are deleting Module task ${mt_id}, this action cannot be undone`
    )
    ){
    await axios.delete(`http://localhost:8080/project/deleteModule/${mt_id}`);
    dispatch({
    type:DELETE_MODULE_TASKS,
    payload:mt_id
    });
    }
    }; 

    export const getModuleTask = (mt_id, history) => async dispatch =>{
        try{
       const res = await axios.get(`http://localhost:8080/project/getModuleId/${mt_id}`);
       dispatch({
        type:GET_MODULE_TASK,
        payload:res.data
    });  
        } catch(error){
          history.push("/module")
        }
    };