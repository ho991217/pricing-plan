import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Hamberger from "../assets/hamberger.svg";
import ResponsiveLayout from "./ResponsiveLayout";

const Wrapper = styled.nav<{ isTop: boolean; mobileMenuOpen: boolean }>`
   position: sticky;
   z-index: 100;
   top: 0;
   background-color: ${({ isTop, mobileMenuOpen }) =>
      !isTop || mobileMenuOpen ? "#fff" : "transparent"};
   transition: background-color 0.3s ease-in-out;
`;

const Container = styled.div`
   margin: 0 auto;
   max-width: 1078px;
   width: 100%;
   height: 115px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${({ theme }) => theme.media} {
      padding: 0 1.25rem;
   }
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
   font-size: 1rem;
   color: #384555;
   gap: 2.19rem;
   letter-spacing: -0.02rem;
   font-weight: 500;
   line-height: normal;
`;

const MobileMenu = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-end;
   padding: 0 1.25rem;
   padding-top: 1.5rem;
   list-style: none;
   margin-bottom: 2.5rem;
   gap: 1.63rem;
   padding-bottom: 69px;
   li {
      color: #000;
      text-align: right;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem; /* 150% */
      letter-spacing: -0.02rem;
   }
`;

const menuItems = [
   {
      name: "원격 지원 문의",
      link: "http://pf.kakao.com/_alKEG",
   },
   {
      name: "온라인 설명서",
      link: "#",
   },
   {
      name: "카카오톡 문의",
      link: "http://pf.kakao.com/_alKEG",
   },
   {
      name: "커뮤니티",
      link: "https://cafe.naver.com/blackberrytalk",
   },
   {
      name: "공지사항",
      link: "https://cafe.naver.com/blackberrytalk",
   },
];

const GlobalNav = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isTop, setIsTop] = useState(true);
   const onScroll = () => {
      if (window.scrollY > 0) {
         setIsTop(false);
      } else {
         setIsTop(true);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <Wrapper isTop={isTop} mobileMenuOpen={mobileMenuOpen}>
         <Container>
            <Logo />
            <Menu>
               <ResponsiveLayout>
                  <>
                     <img
                        style={{ width: "2.1875rem", height: "2.1875rem" }}
                        src={Hamberger}
                        alt="hamberger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     />
                  </>
                  <>
                     {menuItems.map((item, index) => (
                        <li key={index}>
                           <a href={item.link}>{item.name}</a>
                        </li>
                     ))}
                  </>
               </ResponsiveLayout>
            </Menu>
         </Container>
         {mobileMenuOpen && (
            <MobileMenu>
               {menuItems.map((item, index) => (
                  <li key={index}>
                     <a href={item.link}>{item.name}</a>
                  </li>
               ))}
            </MobileMenu>
         )}
      </Wrapper>
   );
};

export default GlobalNav;
