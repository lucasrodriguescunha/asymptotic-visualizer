import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

export const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='min-h-screen flex flex-col bg-background'>
        <Header />
        <main className='flex-1'>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}