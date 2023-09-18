import { useState } from "react";

import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";

import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import NoDefinitionFound from "./components/NoDefinitionFound";
import Welcome from "./components/Welcome";

export interface SearchResultProps {
  word: string,
  phonetics: {
    text: string,
    audio: string
  }[],
  meanings: {
    partOfSpeech: string,
    definitions: {
      definition: string,
      example?: string
    }[],
    synonyms: string[],
  }[],
  sourceUrls: string
}

export interface NotFoundProps {
  title: string,
  message: string,
  resolution: string
}

function App() {
  const initialValue = {
    word: '',
    phonetics: [{
      text: '',
      audio: ''
    }],
    meanings: [],
    sourceUrls: ''
  }
  const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'

  const [theme, setTheme] = useState(initialTheme)
  const [fontFamily, setFontFamily] = useState("'Inter', sans-serif")
  const [ wasFound, setWasFound ] = useState<boolean | null>(null)

  const [result, setResult] = useState<SearchResultProps>({} as SearchResultProps)
  const [notFoundResult, setNotFoundResult] = useState<NotFoundProps>({} as NotFoundProps)

  function handleChangeFontFamily(font: string) {
    if (font === 'Sans Serif') {
      setFontFamily("'Inter', sans-serif")
    } else if (font === 'Serif') {
      setFontFamily("'Lora', serif")
    } else if (font === 'Mono') {
      setFontFamily("'Inconsolata', monospace")
    } else {
      setFontFamily('sans-serif')
    }
  }

  function handleChangeTheme() {
    setTheme((state) => state === 'light' ? 'dark' : 'light')
  }

  function handleSetResult(data: SearchResultProps[]) {
    const dataResult:SearchResultProps = initialValue
    
    let foundPhonetic = false    
    data.map((result) => {
      dataResult.word = result.word

      // This if is to avoid getting too many phonetics result. Just one phonetic is enough. Sometimes the api return an array with more than one object, resulting in more than one phonetics.
      if (foundPhonetic === false) {
        result.phonetics.map((phonetic) => {
          if (phonetic.audio.length > 0 && phonetic.audio.includes('us')) {
            dataResult.phonetics[0] = {
              text: phonetic.text,
              audio: phonetic.audio
            }
            foundPhonetic = true;
          }
        })
      } 

      result.meanings.map((meaning) => {
        dataResult.meanings.push({
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions,
          synonyms: meaning.synonyms
        })
      })

      dataResult.sourceUrls = result.sourceUrls
    })
    console.log(dataResult)
    setWasFound(true)
    setResult(dataResult);
  }

  function handleNoDefinitionFound(notFoundObj: NotFoundProps) {
    setNotFoundResult({
      title: notFoundObj.title,
      message: notFoundObj.message,
      resolution: notFoundObj.resolution
    })
    setWasFound(false)
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle fontFamily={fontFamily} />
      
      <Header theme={theme} handleChangeTheme={handleChangeTheme} handleChangeFontFamily={handleChangeFontFamily} />
      <Search handleSetResult={handleSetResult} handleNoDefinitionFound={handleNoDefinitionFound}/>
      
      {
        result.word === undefined && wasFound === null ? (
          <Welcome />
        ) : (
            wasFound === false ? (
              <NoDefinitionFound notFoundResult={notFoundResult} />
            ) : (
              <Result result={result} />
            )
        )
      }
      
    </ThemeProvider>
  );
}

export default App;
