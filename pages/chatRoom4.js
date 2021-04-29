import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import Link from 'next/link'

const chatRoom4 = () => {
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

    const room = "room4"



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

        <div className="flex flex-col items-center ">
            {/* This sets the page's title and favicon */}
            <Head>
                <title>See who's talking!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/ " >
                <a className="flex content-center content-end mt-10 underline hover:no-underline ">Back Home</a>
            </Link>
            {/* The username area */}
            <div   >
                <UsernameField
                    completed={isUsernameConfirmed}
                    value={username}
                    onChange={(value) => setUsername(value)}
                    onSubmit={() => setUsernameConfirmed(true)}
                />
            </div>
            
                {isUsernameConfirmed && (
                    <div classname="w-full h-screen">
                        {/* Form submission */}
                        <div className="w-full bg-white rounded shadow-lg p-8 m-4 h-full">
                            <form  onSubmit={handleSubmit}>
 
                             <input
                                        type="text"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="border py-2 px-3 text-grey-darkest" 
                                        placeholder={
                                            username ? "Enter your message..." : "Set username..."
                                        }
                                        disabled={!isUsernameConfirmed}
                                    />
                                
                                <input className="py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit" value="Submit" disabled={!isUsernameConfirmed} />
                            </form>
                             {/* The list of messages */}
                        <div className="flex flex-col-reverse ">
                            {history.map(({ username, message }, i) => (
                                <div className="divide-y-4 divide-black divide-opacity-25" key={i}>
                                    <b>{username}</b>: {message}
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                )}
            


           
        </div>

    );
}

export default chatRoom4;