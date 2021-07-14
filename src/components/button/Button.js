import './Button.css';
import { Link } from 'react-router-dom';


export function ButtonComp() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button ,makeStyles } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 40,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
// });

// export function ButtonComp(){
//   const classes = useStyles()
//   return (
//     <Link to='sign-up'>
//       <Button className={classes.root} variant="contained" color="primary">Sign Up</Button>
//     </Link>
//   )
// }