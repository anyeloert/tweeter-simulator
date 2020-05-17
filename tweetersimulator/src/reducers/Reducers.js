import {SEND_TWEETS_TO_STORE, DELETE_TWEET_OF_STORE} from '../Actions/tipes'

const defaulState ={
    tweets : JSON.parse(localStorage.getItem('Tweets'))
}

export default function (state = defaulState, action)  {
    switch (action.type){
        case SEND_TWEETS_TO_STORE:
            return{
                tweets : action.payload
            }        
        case DELETE_TWEET_OF_STORE:
            return{
                ...state,
                tweets : state.tweets.filter(tweet => tweet.key !== action.payload)
            }        
        default:
            return state
    }        
}