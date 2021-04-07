import React, { useState, useEffect } from "react";
import cx from "classnames";
import SliderContext from "./context";
import "./Item.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Buttons from "./Buttons";
import ReactHlsPlayer from "react-hls-player";
import { actions } from "../../../home/state";
import { useDispatch } from "react-redux";
import SoundButton from './SoundButton';

let timer = null;
let buffer = null;
let bufferTime = 0;
export default function Item({ movie, idx }) {
  const [isHover, setIsHover] = useState(false);
  const [isdetail, setIsdetail] = useState(false);
  const dispatch = useDispatch();
  const SoundToggle = () => {
    const player = document.getElementById("player2");
    player.muted = !player.muted;
  };
  useEffect(() => {
    dispatch(actions.setValue("bufferTime", bufferTime));
    clearInterval(buffer);
    clearTimeout(timer);
    setIsHover(false);
    bufferTime = 0;
    if (bufferTime !== 0){
      dispatch(actions.setValue('bannerToggle', false));
    }
  }, [isdetail, dispatch])
  return (
    <SliderContext.Consumer>
      {function Itemsetup({
        onSelectSlide,
        currentSlide,
        elementRef,
        setEscapeLeft,
        setEscapeRight,
      }) {
        function onMouse(e) {
          let num = 6;
          if (e.view.innerWidth > 1280) {
            num = 6;
          } else if (e.view.innerWidth > 1023) {
            num = 5;
          } else if (e.view.innerWidth > 767) {
            num = 4;
          } else if (e.view.innerWidth > 600) {
            num = 3;
          } else {
            num = 2;
          }
          if (!currentSlide) {
            if (idx % num === 0) {
              setEscapeLeft(true);
            } else {
              setEscapeLeft(false);
            }
            if (idx % num === num - 1) {
              setEscapeRight(true);
            } else {
              setEscapeRight(false);
            }
          }
          if (!isHover && !currentSlide){
            timer = setTimeout(function() {
              dispatch(actions.setValue('bannerToggle', false));
              setIsHover(true);
              buffer = setInterval(function () {
                bufferTime += 1;
              }, 1000);
            }, 1000);
          }
        }
        function onMouseLeave(e) {
          if (!currentSlide) {
            setIsHover(false);
            dispatch(actions.setValue('bannerToggle', true));
            clearTimeout(timer);
            clearInterval(buffer);
            bufferTime = 0;
          }
        }
        const isActive = currentSlide && currentSlide.no === movie.no;
        return (
          <div
            ref={elementRef}
            className={cx("item")}
            id={idx}
            onMouseEnter={onMouse}
            onMouseLeave={onMouseLeave}
          >
            <Card style={isActive === true ? {border: 'solid 2px white'}:{}}>
              <CardActionArea style={{zIndex: 1}}>
                <div className='image-box'>
                  {!isHover && <CardMedia
                    component="img"
                    image={ movie.imageUrl[0] !== 'default' ? movie.imageUrl[0] : "/images/netchar2.png" }
                    className='movie-image-style'
                  />}
                  {isHover && <><ReactHlsPlayer
                    id="player2"
                    src={`https://dre3xbpyohrg0.cloudfront.net/MOVIE${movie.no}/MOVIE${movie.no}.m3u8`}
                    autoPlay={true}
                    muted
                    width="100%"
                    style={{
                      position: 'absolute',
                      zIndex: "1",
                      top: 0,
                      left: 0,
                    }}
                    hlsConfig={{
                      startPosition: 0,
                    }}
                  ></ReactHlsPlayer>
                  <div
                    onClick={SoundToggle}
                    style={{
                      color: "white",
                      position: "absolute",
                      right: 3,
                      bottom: 5,
                      zIndex: 200,
                    }}
                  >
                    <SoundButton />
                  </div></>
                  }
                </div>
              </CardActionArea>
              <CardContent
                className="show-card-content"
                style={{ paddingBottom: "10px" }}
              >
                <Buttons
                  movie={movie}
                  onSelectSlide={onSelectSlide}
                  isdetail={isdetail}
                  setIsdetail={setIsdetail}
                />
                <h5
                  style={{
                    margin: "5px",
                    textAlign: "start",
                  }}
                >
                  {movie.title}
                </h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {movie.rating !== "" && movie.rating !== undefined && (
                    <img
                      style={{ width: "12%", margin: "0 5px" }}
                      src={`/images/${RATING[movie.rating.slice(0, 2)]}.svg`}
                      id={idx}
                      alt=""
                    />
                  )}
                  <div style={{ fontSize: "0.65rem", fontWeight: 900 }}>
                    {parseInt(movie.time / 60)}시간 {movie.time % 60}분
                  </div>
                </div>
                <h6
                  style={{
                    margin: "5px",
                    textAlign: "start",
                  }}
                >
                  {movie.keywords !== undefined &&
                    movie.keywords.slice(0, 3).map((keyword, idx) => (
                      <span key={idx}>
                        {idx !== 0 && <span> • </span>}
                        {keyword}
                      </span>
                    ))}
                </h6>
              </CardContent>
            </Card>
            {
              <div
                className="show-card-title"
                style={isActive ? { opacity: 1 } : { opacity: 0.7 }}
              >
                {movie.title.slice(0, 14)}
                {movie.title.length > 14 && "..."}
              </div>
            }
          </div>
        );
      }}
    </SliderContext.Consumer>
  );
}

const RATING = {
  15: "15",
  12: "12",
  18: "18",
  전체: "all",
  모두: "all",
  고등: "15",
  미성: "18",
  연소: "18",
  중학: "12",
  청소: "18",
};