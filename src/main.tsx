import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@context'
import { App } from '@/App'
import '@/index.scss'
import '@/sass/App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
