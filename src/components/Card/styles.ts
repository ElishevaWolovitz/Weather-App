export const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between', 
      width: '95%',
      height: '45vh',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      backgroundColor: '#f5f5f5',
      position: 'relative', 
      margin: '20px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
      },
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
    },
  };
  