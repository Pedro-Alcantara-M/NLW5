import '../styles/global.scss'
import style from '../styles/app.module.scss'
import React, { useState } from 'react'
import { PlayerContextProvider } from '../contexts/playerContexts'
import { Header } from '../components/header'
import { Player } from '../components/player'


function MyApp({ Component, pageProps }) {
  return(
    <PlayerContextProvider>
      <div className={style.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
