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
        <div className="card" >
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img className="card-img-top" alt="..." src={user.photos.small != null ? user.photos.small : userPhoto}
                             />
                       </NavLink>
                    </div>
                    <div className="card-body">
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}
                    </div>
            
                  <ul className="list-group list-group-flush">
                        <li className="list-group-item">{user.name}</li>
                        <li className="list-group-item">{user.status}</li>

                        <li className="list-group-item">{'user.location.country'}</li>
                        <li className="list-group-item">{'user.location.city'}</li>
              </ul>

        </div>


      </>
}

export default User
