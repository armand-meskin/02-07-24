// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
//import List from './qcomps/list_keys_id'
//import Recipes from './qcomps/recipes'
//import Galley from './qcomps/state'
//import SF from './qcomps/stuckForm'
//import TY from './qcomps/thankYouCrash'
//import Counter from './qcomps/snapshot'
//import Shopping from './qcomps/shoppingCart'
import Upd from './qcomps/updObjectsForm'


export default function Home() {
  return (
    <div className={styles.main}>
        <Upd />
    </div>
  )
}
