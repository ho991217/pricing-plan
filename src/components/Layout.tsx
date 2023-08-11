import { HTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.section`
   max-width: 1078px;
   margin: 0 auto;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

interface LayoutProps extends HTMLAttributes<HTMLElement> {
   children?: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
   return <Container {...props}>{children}</Container>;
};

export default Layout;
