npm i socket.io / se intala del lado del servidor 
npm i cocket.io-client / se inatala del lado del front

//esto va en la interfas del chat
import "./App.css";
import { io, Socket } from "socket.io-client";
import { useState, useEffect } from "react";
import { LiMensaje, UlMensajes } from "./ui-component";

const socket: Socket = io("http://localhost:3000");

interface ChatMessage {
  usuario: string;
  mensaje: string;
}

function App() {
  const [isConnected, setIsConnected] = useState<boolean>();
  const [newMessage, setNewMessage] = useState<string>('');
  const [message, setMessage] = useState<ChatMessage[]>([]);

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));

    socket.on('chat_message',(data: ChatMessage)=>{
      setMessage(message => [...message, data])
    })
    return ()=>{
      socket.off('connect');
      socket.off('chat_message');
    }
  }, []);

  const sendMessage = ()=>{
    socket.emit('chat_message',{
      usuario: socket.id,
      mensaje: newMessage
    })
  }
  

  return (
    <div className="App">
      <h2>{isConnected ? "CONECTADO" : "no conectado"}</h2>
      <UlMensajes>
        {message.map((msg, index) => (
          <LiMensaje key={index}>{msg.usuario}: {msg.mensaje}</LiMensaje>
        ))}
      </UlMensajes>
      <input type="text" 
      onChange={(e)=>setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default App;
