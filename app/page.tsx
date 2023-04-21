"use client"
import {useEffect} from "react";
import axios from "axios";

const Home = () => {

    useEffect(() => {
        axios.get('api/hello').then(res => console.log(res.data))
    }, [])


  return (
    <div className={'text-red-600 underline'}>
      Hello
    </div>
  )
}

export default Home
