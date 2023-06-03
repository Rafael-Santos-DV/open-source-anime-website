import axios from 'axios';
import { useState, useEffect } from 'react';
import { API } from '../services/api';
import { ResponseData } from '../types/responseData';

export const useUniqueAnime = (id: string) => {
  const [data, setData] = useState<ResponseData>();
  useEffect(() => {
    const cache = sessionStorage.getItem('data');
    const anime = sessionStorage.getItem('anime_id');
    if (anime === id && cache) {
      console.log('loading cache');
      const newData = JSON.parse(cache) as ResponseData;
      setData(newData);
      return;
    }
    (async () => {
      console.log('no cache');
      try {
        const response = await axios.get(`${API}/showAnime/${id}`);
        setData(response.data);
        sessionStorage.setItem('data', JSON.stringify(response.data, null, 2));
        sessionStorage.setItem('anime_id', id);
      } catch (erro) {
        throw new Error('Erro in response');
      }
    })();
  }, [id]);

  return data;
};
