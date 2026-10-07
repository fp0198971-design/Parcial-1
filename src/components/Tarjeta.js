import React from 'react';

export const Tarjeta = ({ titulo, valor }) => {
    return (
    <div style={styles.card}>
        <h3 style={styles.titulo}>{titulo}</h3>
        <p style={styles.valor}>{valor}</p>
    </div>
    );
};

const styles = {
    card: {
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '20px',
    width: '180px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    textAlign: 'center'
    },
    titulo: {
    margin: '0 0 8px 0',
    fontSize: '15px',
    color: '#94a3b8',
    fontWeight: '500'
    },
    valor: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#38bdf8',
    margin: 0
    }
};