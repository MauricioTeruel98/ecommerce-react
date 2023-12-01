import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import ProductPage from './pages/ProductPage';
import PaymentPage from './pages/PaymentPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ProductPage />
            }
        ]
    },
    {
        path: '/payment',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <PaymentPage />
            }
        ]
    }
])

export default router;