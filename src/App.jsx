import { BrowserRouter, Routes, Route } from 'react-router-dom';

import VehicleEdit from './Pages/VehicleEdit.jsx';
import History from './Pages/History.jsx';
import Test from './Pages/Test.jsx';

// import 'antd/dist/antd.css';
import './styles.css';
import MainTemplate from './Templates/MainTemplate.jsx';
import Refueling from './Pages/AddNew/Refueling.jsx';
import Service from './Pages/AddNew/Service.jsx';
import Reminders from './Pages/Reminders.jsx';
import Reports from './Pages/Reports.jsx';
import Users from './Pages/Users.jsx';
import Settings from './Pages/Settings.jsx';
import Reminder from './Pages/AddNew/Reminder.jsx';
import Vehicles from './Pages/Vehicles.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes path='' element={<MainTemplate />}>
                <Route path='/' element={<MainTemplate />}>
                    <Route path='/history' element={<History />} />
                    <Route path='/vehicles' element={<Vehicles />} />
                    <Route path='/vehicle/edit' element={<VehicleEdit />} />
                    <Route path='/reminders' element={<Reminders />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/refueling/create' element={<Refueling />} />
                    <Route path='/service/create' element={<Service />} />
                    <Route path='/reminder/create' element={<Reminder />} />
                </Route>

                <Route path='*' element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
