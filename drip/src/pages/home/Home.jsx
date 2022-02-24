import React from 'react';
import './Home.css'
import Header from '../../header/header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/SideBar'

export default function Home () {
    return (
        <>
        <Header />
        <div className ='home'>
            <Posts />
            <SideBar />

        </div>
        </>
    );
}


