import { ProductsPage } from './assets/Components/ProductsPage'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'

function App() {

  return (
    <>
      <ChakraProvider>
        <ProductsPage/>
      </ChakraProvider>
    </>
  )
}

export default App
