import { styled } from "styled-components";
import Layout from "../components/Layout";
import MiniLogo from "../assets/logo_mini.svg";

const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Logo = styled.img`
   width: 3.625rem;
   height: 2.0625rem;
   flex-shrink: 0;
   margin-bottom: 2.06rem;
`;

const Title = styled.h2`
   text-align: center;
   font-size: 2.1875rem;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   letter-spacing: -0.04375rem;
   margin-bottom: 1.75rem;
`;

const Description = styled.span`
   text-align: center;
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 500;
   line-height: 1.5rem; /* 120% */
   letter-spacing: -0.025rem;
   margin-bottom: 4.56rem;
`;

interface SectionProps {
   title: string;
   description: string | JSX.Element;
   children?: React.ReactNode;
}

const Section = ({ title, description, children }: SectionProps) => {
   return (
      <Layout style={{ marginTop: "10rem" }}>
         <TitleContainer>
            <Logo src={MiniLogo} alt="mini logo" />
            <Title>{title}</Title>
            <Description>{description}</Description>
         </TitleContainer>
         {children}
      </Layout>
   );
};

export default Section;
