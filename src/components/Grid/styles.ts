export const Styles = {
    grid: {
        display: 'grid',
        gridTemplateColums: '1fr',
        '@media (min-width: 768px)': {
            gridTemplateColumns:'1fr 1fr',
    },
  },
    gridHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        backgroundColor: '#f0f0f0',
        borderBottom: '1px solid #ddd',
        borderRadius: '10px',
    }
};