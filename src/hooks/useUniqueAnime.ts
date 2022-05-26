import axios from 'axios';
import { useState, useEffect } from 'react';
import { API } from '../services/api';
import { ResponseData } from '../types/responseData';

export const useUniqueAnime = (id?: string) => {
  const [data, setData] = useState<ResponseData>();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${API}/showAnime/${id}`);
        setData(response.data);
      } catch (erro) {
        throw new Error('Erro in response');
      }
    })();
  }, [id]);

  return data;
};
