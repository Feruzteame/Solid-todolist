import { useMode } from '../components/ThemeMode'

export default function Theme() {
    const [mode, { toggleMode }] = useMode();

  return(
    <button onclick={toggleMode}>
      { mode() ? 'Light' : 'Dark' }
    </button>
  )
}