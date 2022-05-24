const CLIENT_ID = process.env.TWITCH_CLIENT_ID
const EVENTSECRET = process.env.EVENTSECRET
const EVENTCALLBACK = process.env.EVENTTCALLBACK
const basicURL = 'https://api.twitch.tv/helix/'
const body = ({type,condition,accessToken}) => {
  const  data = {
    type,
    version: '1',   
    condition,
    transport: {
        method: 'webhook',
        callback: EVENTCALLBACK,
        secret: EVENTSECRET,
    },
}
  const headers = {
    'Client-Id': CLIENT_ID,
    Accept: 'application/vnd.twitchtv.v5+json',
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
}
    return {data, headers}
}

module.exports = {
    channelPointsCustomReward : ({type,clientId,rewardId,accessToken}) =>{
       const type = `channel.channel_points_custom_reward.${type}` 
       const condition = {
        broadcaster_user_id : clientId,
        reward_id : rewardId, 
      }
      return body({type,condition,accessToken})
    },
    stream : ({type,clientId,accessToken}) =>{
      const type = `stream.${type}`
      const condition = {
        broadcaster_user_id: clientId,
      }
      return body({type,condition,accessToken})
    },
    authorization : ({type,clientId,accessToken}) =>{
      const type = `authorization.${type}`
      const condition = {
        client_id: clientId,
      }
      return body({type,condition,accessToken})
    }
}
