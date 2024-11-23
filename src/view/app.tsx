import browserRouter from '@/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
    return <RouterProvider router={browserRouter} />;
}

export default App;
