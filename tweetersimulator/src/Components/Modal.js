import React, {useRef, useState} from 'react';
import Error from './Error'
import uuid from 'react-uuid'

//from redux

import { useDispatch} from 'react-redux'
import {sendTweets} from '../Actions/Actions'

const Modal = () => {

    const name = useRef('')
    const tweet = useRef('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        //Validation
        if (name.current.value=== '' || tweet.current.value===''){
            setError(true)
            return;
        }else{
            const tweetObject = {
                name : name.current.value,
                tweet : tweet.current.value,
                key:uuid()
            }
            let localStorageTweets = []
            if (JSON.parse(localStorage.getItem('Tweets'))){
                localStorageTweets = [...JSON.parse(localStorage.getItem('Tweets'))]
            }else{
                localStorageTweets=[]
            }
            localStorageTweets.push(tweetObject)
            //send to local storage
            localStorage.setItem('Tweets', JSON.stringify(localStorageTweets))
            //send to store  
            dispatch(sendTweets(localStorageTweets)) 
            name.current.value=''    
            tweet.current.value='' 
            setError(false)   
        }
    }
    const errorDisplay = error?<Error mensaje='Todos los campos son obligatorios'/>:null



    return (  
        <> 
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content p-2">                   
                        <h5 className="modal-title mx-auto mb-1" id="exampleModalLabel">Nuevo Tweet</h5>   
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder='Escribe tu Nombre' ref={name}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder='Escribe lo que quieres comunicar' ref={tweet}></textarea>
                            </div>
                            {errorDisplay}
                            <button type="submit" className="btn btn-info" >Enviar Tweet</button>                                        
                        </form>                                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;