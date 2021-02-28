const styles = (theme) => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.primary,
    },
    landingText: {
      position: "absolute",
      top: '25vh',
      zIndex: 2,
    },
    landingIcon: {
      position: 'absolute',
      top: '85vh',
      color: 'white',
      zIndex: 1,
    },
    aboutWrapper: {
        backgroundColor: theme.palette.background.secondary,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 3,
        marginTop: '100vh',
        height: '100vh',
        minHeight: '100vh',
        minWidth: '100vw',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    aboutSection: {
      width: '85vw',
      minWidth: '40vw',
      marginTop: '5%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    experienceWrapper: {
      zIndex: 3,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.primary,
    },
    experienceSection: {
      width: '100vw',
      minWidth: '40vw',
      marginTop: '5%',
    },
    timeline: {
      zIndex: 4,
      backgroundColor: theme.palette.background.primary,
      // minWidth: '100vw',
    },
    timelineElement: {
      // marginLeft: '10px',
      // marginRight: '10px',
    }
});

export default styles;
