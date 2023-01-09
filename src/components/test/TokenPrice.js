import { Box, Button, Container } from '@mui/material';
import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const TokenPrice = () => {
  //Public API that will echo messages sent to it back to the client
  const socketUrl = "wss://webws.gateio.live/v3/?v=2216651"
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);


  const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  console.log(messageHistory);
  return (
    <Box
      sx={{
        background: "url('/images/background/bg-1.jpg')",
        backgroundSize: "100% 100%",
        backgroundPosition: 'center',
        minHeight: "100vh",
        color: 'white'
      }}
      pt={20}
      pb={6}
    >
      <Container maxWidth={'lg'}>
        <Button
          onClick={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Click Me to send 'Hello'
        </Button>
        <p>The WebSocket is currently {connectionStatus}</p>
        {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
        <ul>
          {messageHistory.map((message, idx) => (
            <span key={idx}>{message ? message.data : null}</span>
          ))}
        </ul>
      </Container>
    </Box >
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
