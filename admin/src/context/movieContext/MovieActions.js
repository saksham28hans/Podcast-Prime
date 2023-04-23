export const getPodcastStart = ()=>({
    type : "GET_PODCAST_START"
});

export const getPodcastSuccess = (movies)=>({
    type : "GET_PODCAST_SUCCESS",
    payload : movies,
});

export const getPodcastFailure = ()=>({
    type : "GET_PODCAST_FAILURE",
});

export const createPodcastStart = ()=>({
    type : "CREATE_PODCAST_START"
});

export const createPodcastSuccess = (movie)=>({
    type : "CREATE_PODCAST_SUCCESS",
    payload : movie,
});

export const createPodcastFailure = ()=>({
    type : "CREATE_PODCAST_FAILURE",
});

export const updatePodcastStart = ()=>({
    type : "UPDATE_PODCAST_START"
});

export const updatePodcastSuccess = (movie)=>({
    type : "UPDATE_PODCAST_SUCCESS",
    payload : movie,
});

export const updatePodcastFailure = ()=>({
    type : "UPDATE_PODCAST_FAILURE",
});

export const deletePodcastStart = ()=>({
    type : "DELETE_PODCAST_START"
});

export const deletePodcastSuccess = (id)=>({
    type : "DELETE_PODCAST_SUCCESS",
    payload : id,
});

export const deletePodcastFailure = ()=>({
    type : "DELETE_PODCAST_FAILURE",
});