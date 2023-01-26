import { useContext } from 'react';
import ExtendedThemeContext from 'context/ExtendedTheme.context';

export default function useExtendedTheme() {
  const state = useContext(ExtendedThemeContext);
  if (!state) {
    throw new Error(
      'useExtendedTheme is being used outside of ExtendedThemeProvider'
    );
  }
  return state;
}
