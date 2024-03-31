import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'
import ErrorBoundary from './pages/ErrorBoundary'

export default function App() {
  // throw new Error()
  return (
    <div>
      <Header />
      <Hero />
      <ErrorBoundary>
      <Body />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
