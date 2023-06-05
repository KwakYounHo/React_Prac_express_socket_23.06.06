import React from "react";
import style from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import ContentLayout from "../module/contentBoxLayout";
import io from 'socket.io-client'

const Main = (): JSX.Element => {
  const [stockData, setStockData] = React.useState(null);
  React.useEffect(()=>{
    const socket = io("http://localhost:8080", {path: "/stockData/"});
    
    //* 왔니?
    socket.on('connect', ()=>{
      console.log('소켓 정상 연결 테스트 시작');
    });

    //* 주식 데이터 요청
    const stockRequest = setInterval(()=>{
      socket.emit("stockRequest", "줘");
    }, 1000)

    //* 주식 데이터 할당
    socket.on("stockData", data => {
      setStockData(JSON.parse(data));
    })

    return () => {
      socket.disconnect();
      clearInterval(stockRequest)
    }
  }, [])

  //! 소켓 적용하기 전 테스트
  // interface SD {
  //   id: number,
  //   title: string,
  //   value: string
  // }
  // let stockData: SD[] = [
  //   {id:1, title:"삼선진자", value:"2556.39"},
  //   {id:2, title:"코스멍", value:"2556.20"},
  //   {id:3, title:"코스핌", value:"2856.39"},
  //   {id:4, title:"리플", value:"99999.99"},
  //   {id:5, title:"스톡투게더", value:"88888.88"},
  // ]


  return (
    <div className={style.main}>
      <Routes>
        <Route
          path="/"
          element={
            <ContentLayout STDA={stockData} />
          }
        />
        <Route path="/1" element={<h1>둘 페이지</h1>} />
        <Route path="/2" element={<h1>삼 페이지</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
