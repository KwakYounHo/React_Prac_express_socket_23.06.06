import React from "react";
import ContentBox from "./contentBox";
import style from "./contentBox.module.css";

interface ST {
  id: number;
  title: string;
  value: string;
}
interface Props {
  STDA: ST[]|null;
}
const ContentLayout = ({ STDA }: Props): JSX.Element => {
  let result: JSX.Element = <></>
  let Boxs: JSX.Element[] = [];
  STDA!==null? (()=>{
    for (let i = 0; i < STDA.length; i++) {
      Boxs.push(
        <ContentBox styles={style.smallBox} key={STDA[i].id}>
          <h2>{STDA[i].title}</h2>
          <h3>{STDA[i].value}</h3>
        </ContentBox>
      );
    }
    result = <>{Boxs}</>;
  })() : (()=>{
    result = <h1>데이터가 준비중입니다 '^' /</h1>
  })()
  return result;
};

export default ContentLayout;
