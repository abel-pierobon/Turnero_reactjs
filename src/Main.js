import Carga from './Carga';
import Disponibles from './Disponibles';
import { Route, Routes } from 'react-router-dom';
import Vista from './Vista';



function Main() {
    return (
            <main className='p-2 grow mx-10'>
            <Routes>
                <Route path="/" element={<Vista/>} />
                <Route path="/carga" element={<Carga/>}/>
                <Route path="/disponibles" element={<Disponibles/>}/>
            </Routes>
            </main>
    )
}
export default Main