/*
 Created by Ruslan on 23.06.2022 (morehome@mail.ru)
 */
import React, { FC } from 'react';

interface AsyncModuleProps {
  scope: string;
  host: string;
  history?: any;
}

const useAsyncModule: FC<AsyncModuleProps> = ({ scope, host, history }) => {
  // console.log(host, 'HOST');
  // const [isLoaded, error] = loadScript(host);
  //
  // if (error) {
  //   return <ErrorComponent />;
  // }
  //
  // useEffect(() => {
  //   console.log(isLoaded);
  //   if (isLoaded) {
  //     // @ts-ignore
  //     window[`render${scope}`](`${scope}-container`, history);
  //   }
  //
  //   return () => {
  //     // @ts-ignore
  //     window?.[`unmount${scope}`]?.(`${scope}-container`);
  //   };
  // }, [isLoaded]);
  //
  return <main id={`${scope}-container`} />;
};

export default useAsyncModule;
