import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const TokenPrice = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl('wss://demos.kaazing.com/echo'),
    []
  );

  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Click Me to send 'Hello'
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
};

export const getPrice = async () => {
  const ws = new WebSocket("wss://webws.gateio.live/v3/?v=2216651", {
    headers: {
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-websocket-extensions": "permessage-deflate; client_max_window_bits",
      "sec-websocket-key": "gSq7LbIAYx5hpakY+yWIkg==",
      "sec-websocket-version": "13",
    },
    body: null,
    method: "GET",
  });
  ws.on("open", function open() {
    ws.send(
      JSON.stringify({
        id: 2216651,
        method: "price.subscribe",
        //   params: config.ARR_LISTEN_COIN,
      })
    );

    setInterval(() => {
      ws.send(
        JSON.stringify({ id: 2216651, method: "server.ping", params: [] })
      );
    }, 10 * 1000);
  });

  ws.on("message", function message(data) {
    const objData = JSON.parse(data);
    console.log(objData);
    if (JSON.parse(data).method === "price.update") {
      // config.COIN_LISTEN[objData.params[0]] = objData.params[1].price;
    }
  });
};
