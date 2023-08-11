import { ReactComponent as DarkLogoSvg } from "../assets/logo.svg";
import { ReactComponent as LightLogoSvg } from "../assets/logo_white.svg";

interface LogoProps {
   theme?: "light" | "dark";
}

const Logo = ({ theme }: LogoProps) => {
   const onClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };
   return theme === "light" ? (
      <LightLogoSvg
         onClick={onClick}
         style={{ cursor: "pointer", width: "10.25rem" }}
      />
   ) : (
      <DarkLogoSvg
         onClick={onClick}
         style={{ cursor: "pointer", width: "10.25rem" }}
      />
   );
};

Logo.defaultProps = {
   theme: "dark",
};

export default Logo;
