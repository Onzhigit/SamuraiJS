import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {

    return <>
           <div className="card mb-3" >
            <div className="row g-0">
             <div className="col-md-4">
               <NavLink to={'/profile/' + user.id}>
                <img className="card-img-top" alt="..." src={user.photos.small != null ? user.photos.small : userPhoto}/>
               </NavLink>
            </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {user.followed ? <button disabled={followingInProgress
                      .some(id => id === user.id)}
                        onClick={() => {unfollow(user.id)}}>
                          Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {follow(user.id)}}>
                                Follow</button>}</h5>
                    <p className="card-text">{user.name}</p>
                    <p className="card-text">{user.status}</p>
                    <p className="card-text">{user.location}</p>

              </div>
            </div>
           </div>
          </div>
      </>
}

export default User
