import styled from "styled-components";
import Logo from "./Logo";

const Container = styled.nav`
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
   {
      name: "커뮤니티",
      link: "#",
   },
   {
      name: "공지사항",
      link: "#",
   },
];

const GlobalNav = () => {
   return (
      <Container>
         <Logo />
         <Menu>
            {menuItems.map((item, index) => (
               <li key={index}>
                  <a href={item.link}>{item.name}</a>
               </li>
            ))}
         </Menu>
      </Container>
   );
};

export default GlobalNav;
