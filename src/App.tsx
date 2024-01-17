import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopContextProvider from './context/ShopContext';
import MainSection from './pages/MainSection';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import ShopCollections from './pages/ShopCollections';
import Footer from './ui/components/Footer';
import Header from './ui/components/Header';
import NavigationBar from './ui/components/NavigationBar';
import './ui/styles/app.css';

function App() {
  return (
      <ShopContextProvider>
    <div>
      <BrowserRouter>
        <Header />
        <NavigationBar />

        <Routes>
          <Route path='/' element={<MainSection />}/>
          <Route path='/camisetas' element={<ShopCategory category="camisetas" />}/>
          <Route path='/calcas' element={<ShopCategory category="calcas" />}/>
          <Route path='/acessorios' element={<ShopCategory category="acessorios" />}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/colecao' element={<ShopCollections />}>
            <Route path=':colecaoId' element={<ShopCollections />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
        </ShopContextProvider>
  )
}

export default App
