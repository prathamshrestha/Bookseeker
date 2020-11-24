import * as actionTypes from './actionTypes'
import axios from 'axios'


export const authStart =() =>{
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess =token =>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const authFail =error =>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const Logout =() =>{
    localStorage.removeItem('token')
    window.location.reload()
    console.log('anthing?')
    return{

        type:actionTypes.AUTH_START
    }
}


export const authLogin =(username,password) =>{
    return dispatch => {
        dispatch(authStart());
       axios.post('http://127.0.0.1:8000/signin/',{
            username:username,
            password:password
        })
        .then(res=>{
            const token =res.data.token
            const user =res.data.user
            console.log(user)
            console.log(token)
            const id=res.data.user.id
            localStorage.setItem('id',id)
            localStorage.setItem('user',user)

            localStorage.setItem('token',token)
            dispatch(authSuccess(token))
            
            console.log(res.data)
        }) 
        .catch (err=>{
            dispatch(authFail(err))
        })
    }
}
export const authRegistration =(first_name,last_name,username,email,password) =>{
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/register/',{
            first_name:first_name,
            last_name:last_name,
            username:username,
            email:email,
            password:password
        })
        .then(res=>{
            const token =res.data.key
            const id=res.data.user.id
            localStorage.setItem('id',id)
            // console
            localStorage.setItem('token',token)
            dispatch(authSuccess(token))
        })
        .catch (err=>{
            dispatch(authFail(err))
        })
    }
}
export const userid=localStorage.getItem('id')
export const user=localStorage.getItem('user')


export const authCheckState = ()=>{
    return dispatch =>{
        const token =localStorage.getItem('token')
        if (token ===undefined){
            dispatch(Logout())
        }
        else{
            dispatch(authSuccess(token))
            
        }
    }
}