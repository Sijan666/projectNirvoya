import { Routes , Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import RootLayouts from './components/layouts/RootLayouts'
import Loading from './components/Loading'
import ReactLenis from 'lenis/react'

const Home = lazy(() => import('./components/pages/Home'))
const ProductDetails = lazy(() => import('./components/pages/ProductDetails'))
const Allproducts = lazy(() => import('./components/pages/Allproducts'))

function App () {
  const lenisOptions = {
    lerp: 0.05,
    wheelMultiplier: 0.7,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    gestureDirection: 'vertical',
    smoothTouch: false,
    touchMultiplier: 2,
  }

  return (
    <>
      <ReactLenis root options={lenisOptions}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<RootLayouts />}>
              <Route index element={<Home/>} />
              <Route path="/productDetails" element={<ProductDetails/>} />
              <Route path="/allproducts" element={<Allproducts/>} />
            </Route>
          </Routes>
        </Suspense>
      </ReactLenis>
    </>
  )
}

export default App