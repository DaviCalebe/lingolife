import { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Loading from './components/loading/loading.tsx';

const App = () => { // Removed React.FC
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeoutId);
    }, [location.pathname]);

    return (
        <>
            {loading ? <Loading /> :  <Outlet />}
        </>
    );
};

export default App;