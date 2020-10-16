const initialstate={
    token:localStorage.getItem('token'),
    isAuthentication:null,
    isLoading:false,
    user:null
}

export default function(state=initialstate ,action){
    switch(action.type){
        default:
            return state;
    }
}