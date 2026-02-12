import { useState } from 'react'
import AIFashion from './pages/HomePage'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function AppContent() {
  return (
    <>
      <AIFashion />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
