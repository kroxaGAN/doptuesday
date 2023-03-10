import React from 'react';
import {Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";
import {useWindowSize} from "../Helpers/useWindowSize";
import {LocalStorage} from "./pages/LocalStorage";


export const Site = () => {
   const size=useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                {size>750
                ?<div className={styles.nav}>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/0'}>Page One</NavLink> </div>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/1'}>Page Two</NavLink> </div>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/2'}>Page Three</NavLink> </div>
                        {/*<div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page3'}>Page Three</NavLink> </div>*/}
                        <a href={'/error'} >Error</a>
                        <div><NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/localstorage'}>Local Storage</NavLink> </div>
                        <div><NavLink to={'/page/3'}>Prosto </NavLink> </div>

                    </div>
                :<div>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/0'}>One</NavLink> </div>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/1'}>Two</NavLink> </div>
                        <div> <NavLink className={({isActive})=>isActive ? styles.active : styles.navLink} to={'/page/2'}>Three</NavLink> </div>
                    </div>
                }




                <div className={styles.content}>
                <Routes>
                    <Route path={'/'} element={ <Navigate to={'/page/0'}/> }/>

                    <Route path={'/page/:id'} element={<Page dataState={dataState}/>}/>

                    <Route path={'/page/localstorage'} element={<LocalStorage/>}/>

                    {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                    <Route path={'/error'} element={<Error404/>}/>
                    <Route path={'/er'} element={<div>111</div>}/>
                    <Route path={'/*'} element={<Navigate to={'/error'}/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
};

