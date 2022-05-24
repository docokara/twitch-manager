
module.exports = {
    init: ({types,events,callback,clientId,twitchSecret}) => {
        if(!types || !events || !callback || !clientId || !twitchSecret)  return {error : 'missing parameters'}  
        console.log("init")
    }
}