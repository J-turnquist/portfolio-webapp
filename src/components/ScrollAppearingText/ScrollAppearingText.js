// React
import React, { useState, useEffect, useRef } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Transitions
import { Fade } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

const ScrollAppearingText = ({ classes, text, color, variant, wait }) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (
      <Fade ref={ref} in={isVisible} timeout={{ enter: 500, exit: 0 }}>
        <Typography color={color} variant={variant}>
          {text}
        </Typography>
      </Fade>
    );
};

export default withStyles(styles)(ScrollAppearingText);
