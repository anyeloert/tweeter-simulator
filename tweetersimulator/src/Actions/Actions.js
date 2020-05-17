import {SEND_TWEETS_TO_STORE, DELETE_TWEET_OF_STORE} from './tipes'

export const sendTweets = (tweet) => {
    return( {
        type : SEND_TWEETS_TO_STORE,
        payload : tweet
    })
}
export const deleteTweetAction = (key) => {
    return( {
        type : DELETE_TWEET_OF_STORE,
        payload : key
    })
}


