// React
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Slide } from '@material-ui/core';
// Icons
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Styles
import styles from './styles';

const NavigationBar = ({ classes, username, notifications }) => {
    return (
      <div className={classes.navBarCenterRow}>
        <Slide className={classes.navButtons} in={true} direction="left" timeout={3000} style={{ transitionDelay:  '500ms' }}>
          <IconButton color="foreground" aria-label="GitHub" href="https://github.com/Josiah-turnquist">
            <GitHubIcon fontSize='large' color='primary' />
          </IconButton>
        </Slide>

        <Slide className={classes.navButtons} in={true} direction="left" timeout={3000} style={{ transitionDelay:  '610ms' }}>
          <IconButton color="foreground" aria-label="Instagram" href="https://www.instagram.com/josiah_obadiah/?hl=en">
            <InstagramIcon fontSize='large' color='primary' />
          </IconButton>
        </Slide>

        <Slide className={classes.navButtons} in={true} direction="left" timeout={3000} style={{ transitionDelay:  '720ms' }}>
          <IconButton color="foreground" aria-label="LinkedIn" href="https://www.linkedin.com/in/josiah-turnquist-a25046160/">
            <LinkedInIcon fontSize='large' color='primary' />
          </IconButton>
        </Slide>
      </div>
    );
};

export default withStyles(styles)(NavigationBar);
