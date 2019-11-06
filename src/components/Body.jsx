import React, {useEffect} from 'react';
import '../styles/index.css';

const NaverItem = (props) => {
    return (
        <div className={"nav-item"}><h3>{props.title}</h3><h5 className="sub-title">{props.subtitle}</h5></div>
    )
}

const Naver = () => {

  return(
      <div className="naver">
        <NaverItem title={"Ferous"} subtitle={"ours "}/>
        <NaverItem title={"Letous"} subtitle={"s ou s ds"} />
        <NaverItem title={"Fxous"} subtitle={"Fe s ds"}/>
        <NaverItem title={"Ilaus"} subtitle={"Fds"}/>
      </div>
  )
}

const BodyMenu = () => {

  return(
      <div className={"body-menu"}>
      <Naver/>
      </div>
  )
}

const BodyApp = () => {

  useEffect(() => {})

  return (
    <div className="body-content">
      <BodyMenu/>
    </div>
  );
}

export default BodyApp;
