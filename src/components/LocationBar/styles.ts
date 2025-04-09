const styles = {
    locationBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align items to the start
      gap: '2%', // Add a small gap between the text and the icon
      width: '100%',
      padding: '10px 15px',
      backgroundColor: '#f0f0f0',
      borderTop: '1px solid #ddd',
      position: 'absolute', // Ensures it stays at the bottom of the card
      bottom: 0,
      left: 0,
    },
    locationText: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
    locationIcon: {
      width: '24px',
      height: '24px',
    },
  };
  
  export default styles;