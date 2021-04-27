import Head from "next/head";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";
import ChatRoomCard from "../components/ChatRoomCard"
import styles from '../styles/Home.module.css'

export default function Home() {

  const chatSubject = "talk about mint-chocolate"


  return (
    <div class="w-full max-w-6xl mx-auto">
      {/* This sets the page's title and favicon */}
      <Head>
        <title>See who's talking!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="text-center max-w-xl mx-auto">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Welcome! Let's talk about icecream!</h1>
        <h2 class="text-xl mb-5 font-light">Join your chat room and talk to people currently talking about different topics. Your name and conversation won't be stored.</h2>
      </div>
      <div class="mx-10 md:flex flex-row  ">
        <ChatRoomCard
          value={"talk about ming-chocolate"}
          link={"/chatRoom1"}
          class="flex-1"
        />
        <ChatRoomCard
          value={"talk about pinapple on pizza"}
          link={"/chatRoom2"}
          class="flex-1"
        />
        <ChatRoomCard
          value={"talk about console vs pc"}
          link={"/chatRoom3"}
          class="flex-1"
        />
          <ChatRoomCard
          value={"talk about anything"}
          link={"/chatRoom3"}
          class="flex-1"
        />
      </div>
    </div>


  );
}