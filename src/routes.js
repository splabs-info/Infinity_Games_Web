import DeepSeaDivers from 'games/DeepSeeDivers';
import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DeepSeaDivers from './games/DeepSeeDivers';
import ClientLayout from './layouts';
import ComingSoon from './pages/ComingSoon';
import Homepage from './pages/Homepage';
import NotFound from './pages/Page404';

const MiniGames = React.lazy(() => import('pages/MiniGamesPage'));
// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <ClientLayout />,
            children: [
                { path: '/', element: <Homepage /> },
                {
                    path: '/games',
                    element: (
                        <Suspense>
                            <MiniGames />
                        </Suspense>
                    ),
                },
            ],
        },
        { path: 'games/deep-sea-divers', element: <DeepSeaDivers /> },
        { path: '404', element: <NotFound /> },
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
