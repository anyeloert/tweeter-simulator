import React from 'react';

//redux
import {useSelector, useDispatch} from 'react-redux'
import {deleteTweetAction} from '../Actions/Actions'

const Tweets = () => {
    const tweets = useSelector(state => state.tweets)
    const dispatch = useDispatch()
    const deleteTweet = key => {
        const localStorageTweets = [...JSON.parse(localStorage.getItem('Tweets'))]
        //delete of localStore
        localStorage.setItem('Tweets', JSON.stringify(localStorageTweets.filter(tweet => tweet.key !== key))) 
        //execute action that delete of store
        dispatch(deleteTweetAction(key))
    }
    return (
        <>
            <h2 className='mt-4 text-center'>TWEETS</h2>
            {tweets?
                tweets.map((tweet) => (
                    <div className="card m-4" key={tweet.key}>
                        <div className="card-body">
                            <h4 className="card-title">{tweet.name}</h4>
                            <p className="card-text">{tweet.tweet}</p>
                            <button type="button" className="btn btn-danger" onClick={() => deleteTweet(tweet.key)}>Eliminar Tweet</button>
                        </div>
                    </div>
                )):null
            }
        </>
    );
};

export default Tweets;