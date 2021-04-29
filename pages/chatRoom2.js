import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import Link from 'next/Link'

const chatRoom2 = () => {
      // save the socket
      const [socket, setSocket] = useState(null);
    
      // Whether the username is set.
      const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);
    
      // State for the username.
      const [username, setUsername] = useState("");
    
      // State for the form field.
      const [message, setMessage] = useState("");
    


      // State for message history.
      const [history, setHistory] = useState([
        /*
        {
          username: "Santa Claus",
          message: "Ho ho ho!"
        }
        */
      ]);
    
      const room = "room2"
      
      

      const connectSocket = () => {
      // prime the server first. extra call needed to use Nextjs.
        fetch("/api/chatRoom");
        // after making sure that socket server is primed, connect to it.
        

        if (!socket) {
          const newSocket = io();
    
          
          // Confirms connection
          newSocket.on("connect", () => {
            newSocket.emit('room', room)
            console.log("Chat app connected");
          });
    
          // handles message
          newSocket.on("message", (message) => {
              console.log("message in handle ", message)
            setHistory((history) => [...history, message]);
          });
    
          // Logs when server disconnects
          newSocket.on("disconnect", () => {
            console.warn("WARNING: chat app disconnected");
          });
    
          setSocket(() => newSocket);
        }
      };

    
      // The websocket code
      useEffect(() => {
        connectSocket();
 
      }, []);
    
      // this method submits the form and sends the message to the server.
      const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!socket) {
          alert("Chatroom not connected yet. Try again in a little bit.");
          return;
        }
    
        // prevent empty submissions
        if (!message || !isUsernameConfirmed) {
          return;
        }
        
        // submit and blank-out the field.
        socket.emit("message-submitted", { message, username, room });
        setMessage("");
      };
    
      return (
        
        <div>
          {/* This sets the page's title and favicon */}
          <Head>
            <title>See who's talking!</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
           {/* The list of messages */}
           <div>
            {history.map(({ username, message }, i) => (
              <div key={i}>
                <b>{username}</b>: {message}
              </div>
            ))}
          </div>
          {/* The username area */}
          <UsernameField
            completed={isUsernameConfirmed}
            value={username}
            onChange={(value) => setUsername(value)}
            onSubmit={() => setUsernameConfirmed(true)}
          />
          {/* Form submission */}
          <div>
            <form onSubmit={handleSubmit}>
          
              <label>
                Type your message:
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    username ? "Enter your message..." : "Set username..."
                  }
                  disabled={!isUsernameConfirmed}
                />
              </label>
              <input type="submit" value="Submit" disabled={!isUsernameConfirmed} />
            </form>
          </div>
    
         
          <Link href="/">
          <a >Back home</a>
          </Link>
        </div>
        
      );
    }

export default chatRoom2;