import { createPodcastFailure, createPodcastStart, createPodcastSuccess, deletePodcastFailure, deletePodcastStart, deletePodcastSuccess, getPodcastFailure, getPodcastStart, getPodcastSuccess, updatePodcastFailure, updatePodcastStart, updatePodcastSuccess } from "./MovieActions";
import axios from "axios";

export const getPodcast = async(dispatch)=>{
    dispatch(getPodcastStart());
    try {
        const res = await axios.get('/podcast',{
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getPodcastSuccess(res.data));
    } catch (error) {
        dispatch(getPodcastFailure());
    }
}

export const createPodcast = async(podcast, dispatch)=>{
    dispatch(createPodcastStart());
    try {
      const res =   await axios.post('/podcast',podcast,{
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createPodcastSuccess(res.data));
    } catch (error) {
        dispatch(createPodcastFailure());
    }
}

export const deletePodcast = async(id, dispatch)=>{
    dispatch(deletePodcastStart());
    try {
        await axios.delete('/podcast/'+id,{
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deletePodcastSuccess(id));
    } catch (error) {
        dispatch(deletePodcastFailure());
    }
}

export const updatePodcast = async(id,podcast,dispatch)=>{
    dispatch(updatePodcastStart());
    try {
       const res = await axios.put('/podcast/'+id,podcast,{
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updatePodcastSuccess(res.data));
    } catch (error) {
        dispatch(updatePodcastFailure());
    }
}