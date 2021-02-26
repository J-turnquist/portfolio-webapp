// React
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '@material-ui/core';

// Icons
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ScrollUpIcon from '@material-ui/icons/KeyboardArrowUp';

// Styles
import styles from './styles';

const ArrowButton = ({ classes, username, notifications }) => {
    return (
      <Slide className={classes.landingIcon} in={true} direction="up" timeout={3000} style={{ transitionDelay:  '720ms' }}>
        <IconButton aria-label="about" href="#about-me">
          <ScrollUpIcon style={{ color: 'white', fontSize: 64}} />
        </IconButton>
      </Slide>
    );
};

export default withStyles(styles)(ArrowButton);
