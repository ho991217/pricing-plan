import { styled } from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";

import PlusIcon_1 from "../assets/plus_icon.svg";
import PlusIcon_2 from "../assets/plus_icon_2.svg";
import CheckIcon from "../assets/check.svg";
import WhiteCheckIcon from "../assets/check_white.svg";
import ResponsiveLayout from "../components/ResponsiveLayout";

const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (min-width: 769px) {
      gap: 1.6rem;
   }
`;

const Title = styled.h2`
   color: ${({ theme }) => theme.colors.primary};
   text-align: center;
   font-size: 2.1875rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: -0.04375rem;
   ${({ theme }) => theme.media} {
      text-align: center;
      font-size: 1.625rem;
      letter-spacing: -0.0325rem;
      margin-bottom: 0.75rem;
   }
`;

const SubTitle = styled.span`
   text-align: center;
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   letter-spacing: -0.025rem;
   ${({ theme }) => theme.media} {
      color: #000;
      text-align: center;
      font-size: 1rem;
      letter-spacing: -0.02rem;
   }
`;

const SelectContainer = styled.div`
   margin: 3.06rem 0 3.37rem 0;
   ${({ theme }) => theme.media} {
      margin: 2.19rem 0;
      width: 20rem;
      height: 3rem;
      flex-shrink: 0;
   }
   border-radius: 3.125rem;
   background: #fff;
   box-shadow: 0px 12px 40px 0px rgba(197, 191, 214, 0.24);
   width: 19.625rem;
   height: 4.25rem;
   flex-shrink: 0;
   display: flex;
   justify-content: space-around;
   align-items: center;
   :first-child {
      color: #fff;
      border-radius: 3.125rem;
      background: #5f30e2;
   }
`;

const Select = styled.div`
   text-align: center;
   display: grid;
   place-items: center;
   font-size: 1.125rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: -0.0225rem;
   width: 9.25rem;
   height: 3.5rem;
   flex-shrink: 0;
   cursor: pointer;
   ${({ theme }) => theme.media} {
      width: 9.42675rem;
      height: 2.47056rem;
      flex-shrink: 0;
      font-size: 0.875rem;
      letter-spacing: -0.0175rem;
   }
`;

const PricingContainer = styled.div`
   display: flex;
   gap: 3.5rem;
   ${({ theme }) => theme.media} {
      flex-direction: column;
      gap: 3.19rem;
   }
`;

const PricingCard = styled.div`
   width: 20rem;
   height: 40rem;
   ${({ theme }) => theme.media} {
      height: 34.75rem;
   }
   flex-shrink: 0;
   border: 1px solid #ececf1;
   border-radius: 1.25rem;
   background: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding: 2.4rem 0;
`;

const Icon = styled.img`
   width: 4.25rem;
   height: 4.3125rem;
   margin-bottom: 1.81rem;
`;

const PricingCardTitle = styled.h3`
   text-align: center;
   font-size: 1.625rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: -0.0325rem;
   margin-bottom: 0.81rem;
   ${({ theme }) => theme.media} {
      font-size: 1.5rem;
      letter-spacing: -0.03rem;
      margin-bottom: 0.62rem;
   }
`;

const PricingCardPrice = styled.h2`
   text-align: center;
   font-size: 3.375rem;
   font-style: normal;
   font-weight: 800;
   line-height: normal;
   letter-spacing: -0.0675rem;
   margin-bottom: 0.81rem;
   ${({ theme }) => theme.media} {
      font-size: 2.625rem;
      letter-spacing: -0.0525rem;
      margin-bottom: 0.38rem;
   }
`;

const PricingCardDescription = styled.span`
   text-align: center;
   font-size: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: 1.5rem; /* 150% */
   letter-spacing: -0.02rem;
   margin-bottom: 2.5rem;
   ${({ theme }) => theme.media} {
      font-size: 0.875rem;
      letter-spacing: -0.0175rem;
      margin-bottom: 2.19rem;
   }
`;

const PricingCardList = styled.ul`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   list-style-image: url(${CheckIcon});
   gap: 1.25rem;
   li {
      padding-left: 1.37rem;
      font-size: 1.0625rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem; /* 141.176% */
      letter-spacing: -0.02125rem;
   }
   li::marker {
      transform: translateY(1rem);
   }
   margin-bottom: 3.5rem;

   ${({ theme }) => theme.media} {
      gap: 0.75rem;
      margin-bottom: 2.44;
   }
`;

const SuperEarlyBird = () => {
   return (
      <PricingCard style={{ background: "#5F30E2", color: "#fff" }}>
         <Icon src={PlusIcon_2} alt="아이콘" />
         <PricingCardTitle style={{ color: "#fff" }}>
            슈퍼 얼리버드
         </PricingCardTitle>
         <PricingCardPrice>₩ 75,000</PricingCardPrice>
         <PricingCardDescription>
            (배송비 포함 / 20 수향 한정)
         </PricingCardDescription>
         <PricingCardList style={{ listStyleImage: `url(${WhiteCheckIcon})` }}>
            <li>제일 저렴한 얼리버드</li>
            <li>초도 물량 발송</li>
            <li>무료 네트워크 원격 설정</li>
            <li>원격 지원 (유료)</li>
         </PricingCardList>
         <Button variant="secondary">사전 예약</Button>
      </PricingCard>
   );
};

const EarlyBird = () => {
   return (
      <PricingCard>
         <Icon src={PlusIcon_1} alt="아이콘" />
         <PricingCardTitle>얼리버드</PricingCardTitle>
         <PricingCardPrice>₩ 95,000</PricingCardPrice>
         <PricingCardDescription>
            (배송비 포함 / 20 수향 한정)
         </PricingCardDescription>
         <PricingCardList>
            <li>슈퍼 얼리버드 이후</li>
            <li>초도 물량 발송</li>
            <li>네트워크 설정 설명서</li>
            <li>원격지원 (유료)</li>
         </PricingCardList>
         <Button variant="outlined">오픈 예정</Button>
      </PricingCard>
   );
};

const Normal = () => {
   return (
      <PricingCard>
         <Icon src={PlusIcon_1} alt="아이콘" />
         <PricingCardTitle>일반 구매</PricingCardTitle>
         <PricingCardPrice>₩ 125,000</PricingCardPrice>
         <PricingCardDescription>
            (배송비 포함 / 50 수향 한정)
         </PricingCardDescription>
         <PricingCardList>
            <li>일반 구매가</li>
            <li>일반 물량 발송</li>
            <li>네트워크 설정 설명서</li>
            <li>원격 지원 (유료)</li>
         </PricingCardList>
         <Button variant="outlined">오픈 예정</Button>
      </PricingCard>
   );
};

const Pricing = ({ isMobile }: { isMobile: boolean }) => {
   return (
      <Layout
         style={{
            marginTop: isMobile ? "7.94rem" : "18.72rem",
            marginBottom: isMobile ? "7.87rem" : "10rem",
         }}
      >
         <TitleContainer>
            <Title>
               '프로젝트 구름톡'{isMobile && <br />} : 슈퍼 얼리버드 진행중!
            </Title>
            <SubTitle>
               현재 슈퍼 얼리버드 기간이며 초도 물량 20대{isMobile && <br />}{" "}
               현재 배송까지 1개월 내외로 예정되어 있습니다.
            </SubTitle>
         </TitleContainer>
         <SelectContainer>
            <Select>설치형</Select>
            <Select
               onClick={() => {
                  alert("준비중인 서비스 입니다.");
               }}
            >
               구독형
            </Select>
         </SelectContainer>
         <ResponsiveLayout>
            <PricingContainer>
               <SuperEarlyBird />
               <EarlyBird />
               <Normal />
            </PricingContainer>

            <PricingContainer>
               <EarlyBird />
               <SuperEarlyBird />
               <Normal />
            </PricingContainer>
         </ResponsiveLayout>
      </Layout>
   );
};

export default Pricing;
