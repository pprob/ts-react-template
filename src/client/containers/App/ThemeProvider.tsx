import React, {createContext} from 'react';
import {useSelector} from 'react-redux';
import {Themes} from '../../redux/global/enums';
import {themeSelector} from '../../redux/global/selectors';

export const ThemeContext = createContext(Themes.Light);

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({children}: Props) => {
  const theme = useSelector(themeSelector);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
