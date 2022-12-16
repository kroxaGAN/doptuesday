import React from 'react';
import {Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page1'}>Page One</NavLink> </div>
                    <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page2'}>Page Two</NavLink> </div>
                    <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page3'}>Page Three</NavLink> </div>
                    <a href={'/error'} >Error</a>

                </div>
                <div className={styles.content}>
                <Routes>
                    <Route path={'/'} element={ <Navigate to={'/page1'}/> }/>

                    <Route path={'/page1'} element={<PageOne/>}/>
                    <Route path={'/page2'} element={<PageTwo/>}/>
                    <Route path={'/page3'} element={<PageThree/>}/>

                    <Route path={'/error'} element={<Error404/>}/>
                    <Route path={'/*'} element={<Navigate to={'/error'}/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
};

