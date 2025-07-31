const ItemListContainer = ({ greeting }) => {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 70px)',
      fontFamily: 'Segoe UI, sans-serif',
      fontSize: '1.7rem',
      color: '#333',
      backgroundColor: '#f9f9f9',
    }}>
      <h2>{greeting}</h2>
    </main>
  );
};

export default ItemListContainer;
