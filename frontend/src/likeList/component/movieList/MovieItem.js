import React, { useState } from 'react';
import cx from 'classnames';
import MovieListContext from './context'
import './MovieItem.scss'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Buttons from '../../../home/component/slider/Buttons';
import ReactHlsPlayer from "react-hls-player";

let timer = null;
export default function MovieItem({ movie, idx }) {
  const [ isHover, setIsHover ] = useState(false);
  return (
    <MovieListContext.Consumer>
      {function Itemsetup({ onSelectSlide, currentSlide, elementRef, num, setEscapeLeft, setEscapeRight, escapeLeft, escapeRight }) {
        function onMouse() {
          if (!isHover){
            timer = setTimeout(function() {
              setIsHover(true)
            }, 1000);
          }
          if (idx % num === 0 && !escapeLeft) {
            setEscapeLeft(true)
          } else {
            setEscapeLeft(false)
          }
          if (idx % num === num-1 && !escapeRight) {
            setEscapeRight(true)
          } else {
            setEscapeRight(false)
          }
        }
        function onMouseLeave() {
          setIsHover(false);
          clearTimeout(timer);
        }
        const isActive = currentSlide && currentSlide.no === movie.no;
        return (
          <div
            ref={elementRef}
            className={cx('movie-item')}
            id={idx}
            onMouseEnter={onMouse}
            onMouseLeave={onMouseLeave}
          >
            <Card style={isActive === true ? {border: 'solid 2px white'}:{}} >
              <CardActionArea style={{zIndex: 5}}>
                <div className='movie-image-box'>
                  {!isHover && <CardMedia
                    component="img"
                    image={ movie.imageUrl[0] !== 'default' ? movie.imageUrl[0] : "/images/netchar2.png" }
                    className='movie-image-style'
                  />}
                  {isHover && <ReactHlsPlayer
                    id="player"
                    src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
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
                  ></ReactHlsPlayer>}
                </div>
              </CardActionArea>
              <CardContent className="movie-show-card-content" style={{paddingBottom: '10px'}}>
                <Buttons movie={movie} onSelectSlide={onSelectSlide}/>
                <h5 style={{textAlign: 'center', margin:'5px', textAlign: 'start'}} >{movie.title}</h5>
                <div style={{display: 'flex', alignItems: 'center'}} >
                  { movie.rating !== "" && movie.rating !== undefined && <img style={{width: '12%', margin: '0 5px'}}src={`/images/${RATING[movie.rating.slice(0,2)]}.svg`} />}
                  <div style={{fontSize: '0.65rem', fontWeight: 900}}>{parseInt(movie.time/60)}시간 {movie.time%60}분</div>
                </div>
                <h6 style={{textAlign: 'center', margin:'5px', textAlign: 'start'}} >
                  {movie.keywords !== undefined && movie.keywords.slice(0,3).map((keyword, idx) => (
                    <span key={idx} >{idx !== 0 && <span > • </span>}{keyword}</span>
                  ))}
                </h6>
              </CardContent>
            </Card>
            {<div className="movie-show-card-title" style={isActive ? {opacity: 1}:{opacity: 0.7}}>
              {movie.title.slice(0, 13)}
              {movie.title.length > 13 && '...'}
            </div>}
          </div>
        );
      }}
    </MovieListContext.Consumer>
  )
};

const RATING = {
  '15' : '15',
  '12' : '12',
  '18' : '18',
  전체 : 'all',
  모두 : 'all',
  고등 : '15',
  미성 : '18',
  연소 : '18',
  중학 : '12',
  청소 : '18',
}