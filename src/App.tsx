import { Helmet, HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import { allRoutes } from './routes/AllRoutes'

const queryClient = new QueryClient()

// const helmetData = new HelmetData({})

const App = () => {
    return (
        <HelmetProvider context={{}}>
            <QueryClientProvider client={queryClient}>
                <Helmet>
                    <meta
                        property='og:title'
                        content='R10 Score - Resultados en vivo'
                    />
                    <meta property='og:type' content='website' />
                    <meta
                        property='og:url'
                        content={'https://erick-rimac-seguros.vercel.app/'}
                    />
                    <meta
                        property='og:image'
                        content={`${'https://erick-rimac-seguros.vercel.app'}/r10.webp`}
                    />
                    <meta property='og:image:type' content='image/webp' />
                    <meta property='og:image:width' content='600' />
                    <meta property='og:image:height' content='315' />
                    <meta
                        property='og:image:alt'
                        content='Una tienda virtual con acceso a login'
                    />
                    <meta property='og:site_name' content='R10 Score' />
                    <meta
                        property='og:image:secure_url'
                        content={`${'https://erick-rimac-seguros.vercel.app'}/r10.webp`}
                    />
                    <meta property='og:locale' content='es' />
                </Helmet>
                <RouterProvider router={allRoutes} />
            </QueryClientProvider>
        </HelmetProvider>
    )
}

export default App
