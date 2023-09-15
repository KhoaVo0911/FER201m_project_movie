import React from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";
import { useState } from "react";


function Intro(_props) {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <IntroContrainer>
      <ReactPlayer
        className="videoIntro"
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={!isMuted ? 1 : 0}
        mutex={false}
        url="https://www.youtube.com/watch?v=oqxAJKy0ii4&t=2s&ab_channel=Netflix"
        
      />
      <div className="infoIntro">
        <h1 className="headingIntro"> Squid Game </h1>
        <p className="overviewIntro">
        Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.
        Diễn viên chính: Lee Jung Jae, Park Hae Soo, Wi Ha Jun.
        Năm khởi chiếu: 2021.
        Quốc gia: Hàn Quốc.
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="bottonVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="bottonVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
    </IntroContrainer>
  );
}
export default Intro;

const IntroContrainer = styled.div`
  background-color: #bbb;
  position: relative;
  color: #fff;
  margin-top: 70px;
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 200px;
    left: 40px;
    color: white;

    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }

    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 800px) {
        font-size: 24px;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }

  .bottonVolume {
    position: absolute;
    height: 45px;
    width: 45px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50px;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media screen and (max-width: 800px) {
      height: 35px;
      width: 35px;
      padding: 4px;
    }
    @media screen and (max-width: 800px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }

`;
