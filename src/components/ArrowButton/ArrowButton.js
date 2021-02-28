// React
import React, { useState, useEffect, useRef } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '@material-ui/core';

// Icons
import IconButton from '@material-ui/core/IconButton';
import ScrollUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Styles
import styles from './styles';

function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  let options = {
      root: null,
      rootMargin: "0px 0px 0px 0px", // collision box
    };

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    options
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  })

  return isIntersecting
}

const ArrowButton = ({ classes }) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
      <div className={classes.root}>
      <Slide ref={ref} in={isVisible} direction="up" timeout={3000} timeout={{ enter: '720ms', exit: '0ms'}} className={classes.landingIcon}>
        <IconButton >
          <ScrollUpIcon style={{fontSize: 64}}/>
        </IconButton>
      </Slide>
      </div>
    );
};

export default withStyles(styles)(ArrowButton);
