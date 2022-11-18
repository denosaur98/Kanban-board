import React from 'react';
import { useState } from 'react';
import Profile from '../user-menu/profile.svg';
import Arrow from '../user-menu/arrow.svg';
import css from '../user-menu/UserMenu.module.css';
const DropdownUserProfile = () => {
    return (
      <div>
         <div className={css.nav}></div>
            <div className={css.dropMenu}>
                <a href='##'>Profile</a>
                <a href='##'>Log Out</a>
            </div>
      </div>
    )
}

const UserMenu = () => {
   const [toggle, setToggle] = useState(false)

   return (
       <div className={css.userProfile}>
           <div className={css.userMenu} onClick={() => setToggle(!toggle)}>
               <img src={Profile} alt='user avatar' className={css.userAvatar} title="User"/>
               <img src={Arrow} alt='arrow' className={toggle ? css.arrowUp : css.arrowDown}/>
           </div>
           {toggle && <DropdownUserProfile/>}
       </div>
   )
}
export default UserMenu;