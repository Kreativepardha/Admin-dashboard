import './App.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner';
import { FloatingDock } from './components/ui/floating-dock';
import { floatingDockLinks } from './constants/links';


function App() {

  
  return (
    <>
    <ErrorBoundary>
      <FloatingDock  items={floatingDockLinks} mobileClassName="translate-y-20" />
      <AppRoutes />
    </ErrorBoundary>
       <Toaster richColors position="top-center" />
    </>
  )
}

export default App
