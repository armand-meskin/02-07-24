// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
//import Gallery from './components/gallery'
//import MyFirstComp from './qcomps/firstcomp'
import Profile from './components/profile_props'
import PackingList from './qcomps/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
        <PackingList />
    </div>
  )
}
