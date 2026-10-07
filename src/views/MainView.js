import React from 'react';
import { useMainCtrl } from '../controllers/mainCtrl';
import { Tarjeta } from '../components/Tarjeta';
import { Tabla } from '../components/Tabla';

export const MainView = () => {
  const { tarjetas, tabla } = useMainCtrl();

  return (
    <div style={{ 
      backgroundColor: '#0f172a', 
      color: '#f8fafc', 
      minHeight: '100vh', 
      padding: '32px 24px', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <h1 style={{ color: '#f8fafc', marginBottom: '24px' }}>Primer Parcial</h1>
      
      <h2 style={{ color: '#cbd5e1', fontSize: '18px' }}>Resumen</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {tarjetas.map((item) => (
          <Tarjeta key={item.id} titulo={item.titulo} valor={item.valor} />
        ))}
      </div>

      <h2 style={{ color: '#cbd5e1', fontSize: '18px' }}>Registros</h2>
      <Tabla datos={tabla} />
    </div>
  );
};