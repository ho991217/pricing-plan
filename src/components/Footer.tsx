import styled from "styled-components";
import Logo from "./Logo";
import { useMediaQuery } from "../useMediaQuery";

const Wrapper = styled.footer`
   background: ${({ theme }) => theme.colors.primary};
   color: #fff;
   font-size: 1.3125rem;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   letter-spacing: -0.0525rem;
   flex-shrink: 0;
`;

const Container = styled.div`
   position: sticky;
   z-index: 100;
   top: 0;
   margin: 0 auto;
   max-width: 1078px;
   width: 100%;
   height: 115px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${({ theme }) => theme.media} {
      justify-content: center;
   }
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
   font-size: 1rem;
   gap: 2.19rem;
   letter-spacing: -0.02rem;
   font-weight: 500;
   line-height: normal;
`;

const menuItems = [
   {
      name: "원격 지원 문의",
      link: "#",
   },
   {
      name: "온라인 설명서",
      link: "#",
   },
   {
      name: "카카오톡 문의",
      link: "#",
   },
];

const Footer = () => {
   const { isMobile } = useMediaQuery();
   return (
      <Wrapper>
         <Container>
            <Logo theme="light" />
            <Menu>
               {!isMobile &&
                  menuItems.map((item, index) => (
                     <li key={index}>
                        <a href={item.link}>{item.name}</a>
                     </li>
                  ))}
            </Menu>
         </Container>
      </Wrapper>
   );
};

export default Footer;
