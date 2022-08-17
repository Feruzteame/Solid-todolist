import { createSignal, createContext, useContext } from 'solid-js';

const ModeContext = createContext();

export function ThemeModeProvider(props) {

  const [mode, setMode] = createSignal(props.mode);

  function lightMode() {
    document.body.style.backgroundColor = 'whitesmoke';
  }
  function darkMode() {
    document.body.style.backgroundColor = 'darkgray';
  }

  const modeTheme = [
    mode,
    {
      toggleMode(){
        if(mode) {
          setMode('Light');
          darkMode();
        }else{
          setMode('Dark');
          lightMode();
        }
      },
    }
  ]

  return(
    <ModeContext.Provider value={ modeTheme }>
      { props.children }
    </ModeContext.Provider>
  )
}

export function useMode() {
  return useContext(ModeContext);
}