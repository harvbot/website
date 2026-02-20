import { Route, Routes } from 'react-router-dom'
import Frame from './components/Frame'
import CustomersPage from './pages/CustomersPage'
import LandingPage from './pages/LandingPage'
import TransparencyPage from './pages/TransparencyPage'
import VendorProfilePlaceholderPage from './pages/VendorProfilePlaceholderPage'
import VendorsDirectoryPage from './pages/VendorsDirectoryPage'
import VendorsPage from './pages/VendorsPage'

export default function App() {
  return (
    <Frame>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/our-vendors" element={<VendorsDirectoryPage />} />
        <Route path="/our-vendors/:vendorSlug" element={<VendorProfilePlaceholderPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/transparency/:month" element={<TransparencyPage />} />
      </Routes>
    </Frame>
  )
}
