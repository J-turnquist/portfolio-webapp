const styles = (theme) => ({
    root: {
      position: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    landingText: {
      position: "absolute",
      top: '25vh',
      zIndex: 2,
    },
    landingIcon: {
      position: 'absolute',
      bottom: '1px',
      color: 'white',
      zIndex: 2,
    },
    aboutWrapper: {
        backgroundColor: '#282c34',
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 3,
        marginLeft: 20,
        marginRight: 20,
        height: '100vh',
        minHeight: '100vh',
        width: '100vw',
        minWidth: '100vw',
    },

});

export default styles;
