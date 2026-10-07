import React from 'react';

export const Tabla = ({ datos }) => {
    return (
    <table style={styles.tabla}>
        <thead>
        <tr style={styles.header}>
            <th style={styles.cell}>ID</th>
            <th style={styles.cell}>Elemento</th>
            <th style={styles.cell}>Estado</th>
            <th style={styles.cell}>Fecha</th>
        </tr>
        </thead>
        <tbody>
        {datos.map((row) => (
            <tr key={row.id}>
            <td style={styles.cell}>{row.id}</td>
            <td style={styles.cell}>{row.item}</td>
            <td style={styles.cell}>{row.estado}</td>
            <td style={styles.cell}>{row.fecha}</td>
            </tr>
        ))}
        </tbody>
    </table>
    );
};

const styles = {
    tabla: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
    },
    header: {
    backgroundColor: '#0f172a'
    },
    cell: {
    borderBottom: '1px solid #334155',
    padding: '14px 16px',
    textAlign: 'left',
    color: '#e2e8f0'
    }
};