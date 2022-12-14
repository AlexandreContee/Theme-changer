import { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'

export default function Home() {

  type Value = 'Tema escuro' | 'Tema claro'

  const [value, setValue] = useState('Tema escuro')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode ? setValue('Tema claro') : setValue('Tema escuro')
  }

  return (
    <div className={`${isDarkMode ? ' dark ' : ''}`}>
      <Container className={`
        flex justify-center items-center flex-col
        h-screen
        bg-gray-100 text-gray-800
        dark:bg-gray-800 dark:text-white
        `}>
        <h1 className='p-4 text-3xl font-light text-black dark:text-gray-200'>
          Mude de temas
        </h1>
        <h2>{value}</h2>
        <Button className={`
          cursor-pointer
          p-5 rounded-xl
          bg-gray-300
          dark:bg-gray-700 dark:text-gray-300
        `}
          text='Mudar de tema'
          onClick={handleThemeChange}
        />
      </Container>
    </div>
  )
}
