import React from "react";
import GlobalNav from "./components/GlobalNav";
import { styled } from "styled-components";
import HeroSection from "./sections/HeroSection";
import Pricing from "./sections/Pricing";
import Section from "./sections/Section";

import SampleImg from "./assets/sample_image.png";
import { ReactComponent as ChevronDown } from "./assets/chevron_down.svg";
import Footer from "./components/Footer";
import { useMediaQuery } from "./useMediaQuery";
import { Helmet } from "react-helmet-async";

const Main = styled.main`
   display: flex;
   flex-direction: column;
`;

const SampleImage = styled.img`
   width: 67.125rem;
   height: 44.75rem;
   flex-shrink: 0;
   object-fit: cover;
   transition: all 0.3s ease-in-out;
   ${({ theme }) => theme.media} {
      width: 18rem;
      height: 22.875rem;
      border-radius: 1.875rem;
   }
`;

const FlowChart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.12rem;
   margin-bottom: 7.31rem;
   ${({ theme }) => theme.media} {
      margin-bottom: 6.19rem;
   }
`;

const FlowBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 27.3125rem;
   height: 4.75rem;
   color: #000;
   font-size: 1.3125rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: -0.0525rem;
   flex-shrink: 0;
   border-radius: 0.9375rem;
   background: #fff;
   box-shadow: 0px 2.767256498336792px 2.2138051986694336px 0px
         rgba(0, 0, 0, 0.02),
      0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.03),
      0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.04),
      0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.04),
      0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.05),
      0px 100px 80px 0px rgba(0, 0, 0, 0.07);
   ${({ theme }) => theme.media} {
      width: 18rem;
      height: 4.75rem;
   }
`;

const Chevron = styled(ChevronDown)`
   width: 0.75rem;
   flex-shrink: 0;
   ${({ theme }) => theme.media} {
      height: 1.8125rem;
      flex-shrink: 0;
   }
`;

const flow = [
   "예약 주문 및 입금",
   "기기 검수",
   "소프트웨어 설치 및 기본 설정",
   "서버 최적화",
   "배송 / 서버 기기 수령",
   "댁내 서버 기기 전원 및 인터넷 연결",
   "인터넷 및 공유기 설정",
   "기기와 서버 연결",
];

function App() {
   const { isMobile } = useMediaQuery();
   return (
      <>
         <Helmet>
            <title>프로젝트 구름톡 - 다시 한번 블랙베리를 위대하게.</title>
            <meta
               name="description"
               content="프로젝트 구름톡은 현재 블랙베리OS 10 이하의 기기에서 지원이 중단된 카카오톡 등의 앱을 구동하기 위해 시작된 프로젝트입니다."
            />
            <meta
               name="keywords"
               content="프로젝트 구름톡, 구름톡, 블랙베리, 블랙베리OS, 블랙베리OS10, 블랙베리OS10이하, 카카오톡, 카톡, 카카오톡 구동, 카카오톡 구동 불가, 카카오톡 구동 불가능, 카카오톡 구동 불가능한 기기, 카카오톡 구동 불가능한 블랙베리, 카카오톡 구동 불가능한 블랙베리OS, 카카오톡 구동 불가능한 블랙베리OS10, 카카오톡 구동 불가능한 블랙베리OS10이하, 카카오톡 구동 불가능한 블랙베리OS10이하 기기, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리 기기, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리OS, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리OS 기기, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리OS10, 카카오톡 구동 불가능한 블랙베리OS10이하 블랙베리OS10이하,
               "
            />
            <meta
               property="og:title"
               content="프로젝트 구름톡 - 다시 한번 블랙베리를 위대하게."
            />
            <meta
               property="og:description"
               content="프로젝트 구름톡은 현재 블랙베리OS 10 이하의 기기에서 지원이 중단된 카카오톡 등의 앱을 구동하기 위해 시작된 프로젝트입니다."
            />
            <meta
               property="og:image"
               content="http://cloudtalk.co.kr/thumbnail.png"
            />
            <meta property="og:url" content="http://cloudtalk.co.kr" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="프로젝트 구름톡" />
         </Helmet>
         <GlobalNav />
         <Main>
            <HeroSection isMobile={isMobile} />
            <Pricing isMobile={isMobile} />
            <Section
               title={
                  <>
                     ‘프로젝트 구름톡’을
                     <br /> 소개합니다.
                  </>
               }
               description={
                  <>
                     ‘프로젝트 구름톡’은 현재 블랙베리OS 10{isMobile && <br />}{" "}
                     이하의 기기에서 지원이 중단된
                     {!isMobile && <br />} 카카오톡 등의{isMobile && <br />}{" "}
                     앱을 구동하기 위해 시작된 프로젝트입니다.
                  </>
               }
            >
               <SampleImage src={SampleImg} alt="sample" />
            </Section>
            <Section
               title="‘프로젝트 구름톡’의 원리"
               description={
                  <>
                     <div>
                        프로젝트 구름톡은 집안에 개인의 미니 서버를
                        {isMobile && <br />} 설치하고 그 서버에서 구동되는
                        카카오톡을 <br />
                        원격 스트리밍 하는 방식입니다.
                        {isMobile && (
                           <>
                              <br />
                              <br />
                           </>
                        )}{" "}
                        서버 설치는 최초 1회만 해두면{isMobile && <br />}{" "}
                        집안에서는 물론 밖에서도 사용가능합니다.
                     </div>
                     <div
                        style={{
                           marginTop: isMobile ? "0.88rem" : "1.13rem",
                           color: "#B1B1B1",
                           textAlign: "center",
                           fontSize: isMobile ? "0.75rem" : "1.125rem",
                           fontStyle: "normal",
                           fontWeight: "500",
                           lineHeight: "1.5rem",
                           letterSpacing: isMobile ? "-0.015rem" : "-0.0225rem",
                        }}
                     >
                        (사용시 기기에 Wi-Fi나 데이터 네트워크가 연결되어 있어야
                        합니다.)
                     </div>
                  </>
               }
            >
               <iframe
                  style={{ borderRadius: "1.875rem" }}
                  width={isMobile ? "288" : "1074"}
                  height={isMobile ? "366" : "716"}
                  src="https://www.youtube.com/embed/teIAg66WgTM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
               ></iframe>
            </Section>
            <Section
               title="구매 / 배송 / 설치 과정"
               description={
                  <span
                     style={{
                        textAlign: "center",
                        fontSize: isMobile ? "1rem" : "1.25rem",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "1.5rem",
                        letterSpacing: "-0.025rem",
                     }}
                  >
                     구매 및 배송 과정과{isMobile && <br />} 사용시 최초 1회
                     필요한 설치 과정입니다.
                  </span>
               }
            >
               <FlowChart>
                  {flow.map((item, index) => (
                     <>
                        <FlowBox key={index}>{item}</FlowBox>
                        {index !== flow.length - 1 && <Chevron key={index} />}
                     </>
                  ))}
               </FlowChart>
            </Section>
         </Main>
         <Footer />
      </>
   );
}

export default App;
