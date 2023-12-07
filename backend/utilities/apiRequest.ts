import axios, { AxiosRequestConfig } from 'axios';

interface DigimonsStructure {
  name: string;
  img: string;
  level: string;
}

export const getDigimonsList = async (): Promise<DigimonsStructure[]> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://digimon-api.vercel.app/api/digimon',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
