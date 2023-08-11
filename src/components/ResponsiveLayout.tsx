import { ReactNode, cloneElement, useEffect, useState } from "react";
import { useMediaQuery } from "../useMediaQuery";

/**
 * 두개의 컴포넌트를 받아서, 화면 크기에 따라 다른 컴포넌트를 렌더링하는 컴포넌트
 * 첫번째는 모바일 화면에서 렌더링할 컴포넌트
 * 두번째는 데스크탑 화면에서 렌더링할 컴포넌트
 * @param param0
 * @returns
 */
const ResponsiveLayout = ({
   children,
}: {
   children: [ReactNode, ReactNode];
}) => {
   const { isMobile } = useMediaQuery();

   return (
      <>
         {isMobile
            ? cloneElement(children[1] as React.ReactElement, {
                 children: children[0],
              })
            : children[1]}
      </>
   );
};

export default ResponsiveLayout;
