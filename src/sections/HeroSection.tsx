import { styled } from "styled-components";
import Layout from "../components/Layout";
import Button from "../components/Button";

import PhoneSrc from "../assets/phone_2x.png";

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Gradient = styled.div`
   position: absolute;
   z-index: -1;
   top: 0;
   left: 0;
   width: 100%;
   height: 60rem;
   background: radial-gradient(
         100% 100% at 13.65% 88.98%,
         #c1e9fe 0%,
         rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
         100% 100% at 25.26% 21.66%,
         #e4cbf0 0%,
         rgba(255, 255, 255, 0) 100%
      ),
      #fff;
`;

const Title = styled.h1`
   font-size: 3rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: -0.06rem;
   margin-bottom: 1.5rem;
   strong {
      color: ${({ theme }) => theme.colors.primary};
   }
`;

const SubTitle = styled.span`
   font-size: 1.3125rem;
   font-style: normal;
   font-weight: 500;
   line-height: 1.6875rem; /* 128.571% */
   letter-spacing: -0.02625rem;
   margin-bottom: 2.06rem;
`;

const Image = styled.img.attrs({ loading: "lazy" })`
   width: 37.22094rem;
   height: 37.22094rem;
   transform: translateX(14rem);
`;

const HeroSection = () => {
   return (
      <Layout
         style={{
            flexDirection: "row",
            height: "calc(60rem-115px)",
            alignItems: "center",
         }}
      >
         <Gradient />
         <Container>
            <Title>
               다시 한번 <br />
               <strong>블랙베리를</strong> 위대하게.
            </Title>
            <SubTitle>
               블랙베리 카카오톡 프로젝트 확장형 <br /> 프로젝트 구름톡 1.0 슈퍼
               얼리버드 진행중!
            </SubTitle>
            <Button>사전 예약</Button>
         </Container>
         <Image src={PhoneSrc} alt="블랙베리 폰" />
      </Layout>
   );
};

export default HeroSection;
