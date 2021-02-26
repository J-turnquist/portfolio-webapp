// React
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Effects
import Particles from "react-tsparticles";

// Styles
import styles from './styles';

const BackgroundParticles = ({ classes, username, notifications }) => {
    return (
      <div className={classes.root}>
        <Particles
            className={classes.root}
            id="landingparticles"
            options={{
              fpsLimit: 100,
              particles: {
                color: {
                  value: "#888888",
                },
                links: {
                  color: "#666666",
                  distance: 160,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.2,
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
            }}
          />
        </div>
    );
};

export default withStyles(styles)(BackgroundParticles);
