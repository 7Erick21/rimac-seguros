import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import { allRoutes } from './routes/AllRoutes'

const queryClient = new QueryClient()

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={allRoutes} />
        </QueryClientProvider>
    )
}

export default App
