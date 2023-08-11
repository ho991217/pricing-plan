import styled from "styled-components";

const Container = styled.button<{ variant?: ButtonProps["variant"] }>`
   border-radius: 0.75rem;
   width: 15.625rem;
   height: 3.5rem;
   flex-shrink: 0;
   font-size: 1.0625rem;
   font-style: normal;
   font-weight: 700;
   line-height: 1.5rem; /* 141.176% */
   letter-spacing: -0.02125rem;
   ${({ variant, theme }) => {
      switch (variant) {
         case "fill":
            return `
               background-color: ${theme.colors.primary};
               color: ${theme.colors.white};
            `;
         case "outlined":
            return `
               background-color: ${theme.colors.white};
               color: ${theme.colors.primary};
               border: 1px solid ${theme.colors.primary};
            `;
         case "secondary":
            return `
               background-color: ${theme.colors.secondary};
               color: ${theme.colors.primary};
            `;
         default:
            return "";
      }
   }}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "fill" | "outlined" | "secondary";
   children: string;
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
   return (
      <Container variant={variant} {...props}>
         {children}
      </Container>
   );
};

Button.defaultProps = {
   variant: "fill",
};

export default Button;
