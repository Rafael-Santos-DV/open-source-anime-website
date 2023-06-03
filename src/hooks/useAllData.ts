import axios from 'axios';
import { useState, useEffect } from 'react';
import { API } from '../services/api';
import { ResponseData } from '../types/responseData';

export const useAllData = () => {
  const [data, setData] = useState<ResponseData[]>();
  useEffect(() => {
    const cache = sessionStorage.getItem('allData');
    if (cache) {
      console.log('loading cache');
      const newData = JSON.parse(cache) as ResponseData[];
      setData(newData);
      return;
    }
    (async () => {
      try {
        const response = await axios.get(`${API}/showAnimes`);
        setData(response.data);
        sessionStorage.setItem(
          'allData',
          JSON.stringify(response.data, null, 2)
        );
      } catch (erro) {
        throw new Error('Erro in response');
      }
    })();
  }, []);

  return data;
};
