import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { axiosInstance } from 'axios-module';
import { useEffect } from 'react';

type FakeType = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

function App() {
  useEffect(() => {
    async function fetchTest() {
      try {
        const res = await axiosInstance.get2<FakeType>(
          'https://jsonplaceholdr.typicode.com/todos/1'
        );
        console.log(res.data.id);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTest();
  }, []);
  return (
    <>
      <h1>라우터</h1>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
