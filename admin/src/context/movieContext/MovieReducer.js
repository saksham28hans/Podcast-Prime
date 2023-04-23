const MovieReducer = (state,action)=>{
    switch(action.type)
    {
        case "GET_PODCAST_START":
            return {
                movies : [],
                isFetching : true,
                error : false,
            };
        case "GET_PODCAST_SUCCESS" :
            return {
                movies : action.payload,
                isFetching : false,
                error : false,
            };
        case "GET_PODCAST_FAILURE" : 
            return {
                movies : [],
                isFetching : false,
                error : true,
            };
        case "CREATE_PODCAST_START":
                return {
                    ...state,
                    isFetching : true,
                    error : false,
                };
        case "CREATE_PODCAST_SUCCESS" :
                return {
                    movies : [...state.movies,action.payload],
                    isFetching : false,
                    error : false,
                };
        case "CREATE_PODCAST_FAILURE" : 
                return {
                    ...state,
                    isFetching : false,
                    error : true,
                };
        case "UPDATE_PODCAST_START":
                    return {
                        ...state,
                        isFetching : true,
                        error : false,
                    };
        case "UPDATE_PODCAST_SUCCESS" :
                    return {
                        movies : state.movies.map((movie)=>movie._id === action.payload._id && action.payload),
                        isFetching : false,
                        error : false,
                    };
        case "UPDATE_PODCAST_FAILURE" : 
                    return {
                        ...state,
                        isFetching : false,
                        error : true,
                    };
        case "DELETE_PODCAST_START":
                return {
                    ...state,
                    isFetching : true,
                    error : false,
                };
        case "DELETE_PODCAST_SUCCESS" :
                return {
                    movies : state.movies.filter((movie)=> movie._id !== action.payload),
                    isFetching : false,
                    error : false,
                };
        case "DELETE_PODCAST_FAILURE" : 
                return {
                    ...state,
                    isFetching : false,
                    error : true,
                };
        default:
          return { ...state};
    }
};
export default MovieReducer;