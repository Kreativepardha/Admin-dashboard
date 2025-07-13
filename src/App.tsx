import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner';

function App() {

  return (
    <>
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
       <Toaster richColors position="top-center" />
    </>
  )
}

export default App
