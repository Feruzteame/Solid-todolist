import { createSignal, createContext, useContext } from 'solid-js';

const ModeContext = createContext();

const modeProps = {
  light: {
    bgColor: 'white',
    textColor: 'black',
    buttonColor: 'rgb(99 102 241)'
  },
  dark: {
    bgColor: 'black',
    textColor: 'lightgray',
    buttonColor: 'orange'
  }
}

export function ThemeModeProvider(props) {

  const [isLight, setIsLight] = createSignal(props.mode || true);

  const setModeProps = () => {
    const button = document.body.getElementsByClassName('button')

    document.body.style.backgroundColor = modeProps[isLight() ? 'light' : 'dark'].bgColor;
    document.body.style.color = modeProps[isLight() ? 'light' : 'dark'].textColor;

    for (const [key, value] of Object.entries(button)) {
      value.style.backgroundColor = modeProps[isLight() ? 'light' : 'dark'].buttonColor;
    }
  }


  const modeTheme = [
    isLight,
    {
      toggleMode() {
        setIsLight(!isLight())
        setModeProps()
      }
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