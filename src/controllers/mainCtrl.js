import { useState, useEffect } from 'react';
import { getTarjetas, getTabla } from '../models/mainModel';

export const useMainCtrl = () => {
    const [tarjetas, setTarjetas] = useState([]);
    const [tabla, setTabla] = useState([]);

    useEffect(() => {
    setTarjetas(getTarjetas());
    setTabla(getTabla());
    }, []);

    return { tarjetas, tabla };
};