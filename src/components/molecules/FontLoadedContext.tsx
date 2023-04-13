import { createContext, useEffect, useState } from 'react';

function useFontLoader() {
  const [fontLoaded, setfontLoaded] = useState(false);
  useEffect(() => {
    const WebFontLoader = require('webfontloader');
    WebFontLoader.load({
      google: {
        families: [
          'Jost:100,200,300,400,500,600,700,900:latin&display=swap',
          // 'Playfair Display:ital:1,400;1,900:latin',
        ],
      },
      loading: () => {
        // console.log('Jost Font Loading ');
      },
      active: () => {
        // console.log('Jost Font Active ');
        setfontLoaded(true);
      },
    });
  }, []);
  return fontLoaded;
}

export const FontLoadedContext = createContext<{
  fontLoaded: boolean;
} | null>(null);

function FontLoadedContextComponent({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const fontLoaded = useFontLoader();
  return (
    <FontLoadedContext.Provider value={{ fontLoaded }}>
      {children}
    </FontLoadedContext.Provider>
  );
}

export default FontLoadedContextComponent;
