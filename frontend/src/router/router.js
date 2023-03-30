import { Routes, Route } from 'react-router-dom';
import { Home, Result } from '../pages';

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/result" element={<Result/>} />
        </Routes>
    );
}

export default Router;