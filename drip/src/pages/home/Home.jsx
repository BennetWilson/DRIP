import React from 'react';
import './home.css'
import Header from '../../header/header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/Sidebar'

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


