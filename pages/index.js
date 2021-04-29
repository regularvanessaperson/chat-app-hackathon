import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import ChatRoomCard from "../components/ChatRoomCard"
import About from "../components/About"
import styles from '../styles/Home.module.css'

export default function Home() {

  const chatSubject = "talk about mint-chocolate"
      //State for how many users are in the chat room
      const [count, setCount] = useState(0)

      const countUsers = ()=> {
            setCount(count+1)
      }
    
      // The websocket code
      useEffect(() => {
        countUsers()
        console.log(count)
      }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* This sets the page's title and favicon */}
      <Head>
        <title>See who's talking!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center max-w-xl mx-auto ">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Welcome! <br></br> Let's talk!</h1>
        <h2 className="text-xl mb-5 font-light">Join your chat room and talk to people currently talking about listed topics. Your name and conversation won't be stored.</h2>
      </div>
      <div className="mx-10 md:flex flex-row flex-grow">
        <ChatRoomCard
          value={"talk about mint-chocolate"}
          onClick={count}
          link={"/chatRoom1"}
          className="flex-grow h-16"
        />
        <ChatRoomCard
          value={"talk about pinapple on pizza"}
          link={"/chatRoom2"}
          className="flex-grow h-16"
        />
        <ChatRoomCard
          value={"talk about console vs pc"}
          link={"/chatRoom3"}
          className="flex-grow h-16"
        />
          <ChatRoomCard
          value={"talk about anything and everything"}
          link={"/chatRoom4"}
          className="flex-grow h-16"
        />
       
      </div>
      <div>
         <About

         />
        </div>
    </div>


  );
}