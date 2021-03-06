import React from 'react';

import classes from './User.css';

const user = (props) => (
  <article className={classes.User}>
    <div className={classes.UserImg}>
      <img src={props.imgSrc} alt={props.name} title={props.name} />
    </div>
    <h2 className={classes.UserName}>{props.name}</h2>
    <a className={classes.UserProfile} href={props.link} target="_blanc">User profile</a>
    <div className={classes.UserFavorites}>
      <label className={classes.UserLabel}>favorites</label>
      <input 
        className={classes.UserCheckbox} 
        type="checkbox" 
        checked={props.isChecked}
        id={props.id} 
        onChange={props.changed} 
        onClick={props.test} 
      />        
    </div>
  </article>
);

export default user;