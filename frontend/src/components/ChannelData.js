import React, {useEffect, useState} from "react";
import { getChannelData  } from "../serviceRequests/lightningNode";

const ChannelData = () => {

  const [channelData, setChannelData] = useState({})

  useEffect(() => {
    getChannelData().then(res => {
      setChannelData(res);
    })

  }, [])

  return (
    <div>
      {/* show channel data if it's loaded, otherwise show "loading"  */}
      <p>Channel Data: {channelData ? JSON.stringify(channelData) : "loading"}</p>
    </div>
  )

}

export default ChannelData