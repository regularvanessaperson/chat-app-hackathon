import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import ChatRoomCard from "../components/ChatRoomCard"

export default function Home() {

  const chatSubject = "talk about avengers"

  return (
    <div>
      {/* This sets the page's title and favicon */}
      <Head>
        <title>See who's talking!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <ChatRoomCard
                value={chatSubject}
                link={"/chatRoom1"}
            />
</div>


  );
}