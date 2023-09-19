import { CustomSelect, HeaderContainer, InputsContainer, SwitchContainer } from "./styles"
import logoImg from '../../assets/iconoir_book.svg'
import Switch from 'react-switch'
import { useState } from "react"

interface HeaderPorps {
  theme: string
  handleChangeTheme: () => void
  handleChangeFontFamily: (front: string) => void
}

export default function Header({ theme, handleChangeTheme, handleChangeFontFamily } : HeaderPorps) {
  const [ulClass, setUlClass] = useState('')
  const [selectedFont, SetSelectedFont] = useState('Sans Serif')

  function changeFont(font: string) {
    setUlClass('')
    if (selectedFont !== font) {
      SetSelectedFont(font)
      handleChangeFontFamily(font)
    }
  }
  
  return (
    <HeaderContainer aria-level={1} role="heading">
      <img src={logoImg} alt="Logo" />
      <InputsContainer>

        <CustomSelect>
          <div className="select-btn" onClick={() => setUlClass(state => state === '' ? 'active' : '')}>
            <span className="select-btn-text">{selectedFont}</span>
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#A445ED" strokeWidth="1.5"/>
            </svg>
          </div>           
          <ul className={ulClass}>
            <li onClick={() => changeFont('Sans Serif')}>Sans Serif</li>
            <li onClick={() => changeFont('Serif')}>Serif</li>
            <li onClick={() => changeFont('Mono')}>Mono</li>
          </ul>
        </CustomSelect>

        <hr />

        <SwitchContainer>
          <Switch 
            onChange={handleChangeTheme}
            checked={theme === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#A445ED"
            onHandleColor="#FFFFFF"
            height={20}
            width={40}
            handleDiameter={14}
            aria-label="Switch Theme"
          />
          
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke={theme === 'light' ? '#757575': '#A445ED'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </SwitchContainer>

      </InputsContainer>
    </HeaderContainer>
  )
}
