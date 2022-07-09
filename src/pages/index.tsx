import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import Sidebar from './components/Sidebar'
import Notes from './components/Notes'
import News from './components/news'
import Image from "next/image";
import {RiKeyboardFill } from 'react-icons/ri'
import {CgNotes} from 'react-icons/cg'
import {BiSearch, BiMapAlt} from 'react-icons/bi'
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/notes')
  }

  return (
    <>
      <Head>
        <title>Batman Dashboard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <section id="main-dashboard-content">
        <section id="top-section">
          <div id='input-box'>
            <input placeholder="Search..."/>
            <BiSearch id="search-icon"/>
          </div>
          <div id="action-icons">
            <div className="cursor-pointer hover:scale-105  duration-500" id="action-icon-one"></div>
            <div className="cursor-pointer hover:scale-105  duration-500 " id="action-icon-two" onClick={() => signIn()}></div>
          </div>
        </section>
        <h1 id="welcome-title">Welcome, Batman.</h1>
        <section id="grid-container">
          <div id="grid-item"><Notes /></div>
          <div id="grid-item"><News /></div>
          <div id="grid-item">Scanner</div>
          <div id="grid-item">Map</div>

        </section>
      </section>
    </>
  );
};

export default Home;
