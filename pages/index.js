import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import ChatRoomCard from "../components/ChatRoomCard"
import styles from '../styles/Home.module.css'

export default function Home() {

  const chatSubject = "talk about avengers"

  

  


  return (
    <div className={styles.grid}>
      {/* This sets the page's title and favicon */}
      <Head>
        <title>See who's talking!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChatRoomCard
        value={chatSubject}
        link={"/chatRoom1"}
      />
      <ChatRoomCard
        value={chatSubject}
        link={"/chatRoom2"}
      />
      <ChatRoomCard
        value={chatSubject}
        link={"/chatRoom3"}
      />
    </div>


  );
}