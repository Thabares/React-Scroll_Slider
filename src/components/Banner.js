import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '90vh',
    margin: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',

    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100vw',
    height: '90vh',
    scrollSnapAlign: 'start',
    '&:nth-of-type(1)': {
      backgroundColor: 'rgb(28,28,28)',
      color: 'green',
    },
    '&:nth-of-type(2)': {
      backgroundColor: 'rgb(38,38,38)',
      color: 'blue',
    },
    '&:nth-of-type(3)': {
      backgroundColor: 'rgb(48,48,48)',
      color: 'yellow',
    },

    '&:nth-of-type(4)': {
      backgroundColor: 'rgb(28,28,28)',
      color: 'green',
    },
    '&:nth-of-type(5)': {
      backgroundColor: 'rgb(38,38,38)',
      color: 'blue',
    },
  },

  heading: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '10em',
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <section className={classes.section}>
          <h1 className={classes.heading}>Page One</h1>
        </section>
        <section className={classes.section}>
          <h1 className={classes.heading}>Page Two</h1>
        </section>
        <section className={classes.section}>
          <h1 className={classes.heading}>Page Three</h1>
        </section>
        <section className={classes.section}>
          <h1 className={classes.heading}>Page Four</h1>
        </section>
        <section className={classes.section}>
          <h1 className={classes.heading}>Page Five</h1>
        </section>
      </div>
    </div>
  );
}

export default Banner;
