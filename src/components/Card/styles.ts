const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between', 
      width: '40%',
      height: '40vh',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      position: 'relative', 
      margin: '20px',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.8, 
    },
    cardTemp: {
      fontSize: '24px',
      fontWeight: 'bold',
      position: 'absolute',
      zIndex: 2,
    },
  };
  
  export default styles;