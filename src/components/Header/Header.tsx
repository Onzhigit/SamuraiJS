import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom"

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return <>
        <div className='header bg-dark text-white'>
         <img src='https://www.crushpixel.com/big-static16/preview4/samurai-chalk-white-icon-on-2257336.jpg' />
          <div className={s.loginBlock}>
            { props.isAuth
                ? <div className={s.login}>{props.login} - <button className="btn btn-success" onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
         </div>
       </div>
     </>
}

export default Header
