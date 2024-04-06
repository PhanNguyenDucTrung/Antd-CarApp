import { useState} from 'react';
import { Form, Layout, Button, Divider } from 'antd';
// import { Radio } from 'antd';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { Input, Select } from 'antd';
import FloatLabel from '../../Components/FloatLabel';
// http://localhost:3000/carTracking/service/api/
import {  useSelector } from 'react-redux';


const { Header, Content, Footer } = Layout;

const { TextArea } = Input;
const { Option } = Select;

const Service = () => {
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [place, setPlace] = useState('1234');
    const [serviceType, setServiceType] = useState('1234');
    const [money, setMoney] = useState('1234');
    const [fuelType, setFuelType] = useState('1234');
    const [odometer, setOdometer] = useState('1234');
    const [comments, setComments] = useState('1234');

    const fuelData = useSelector((state) => state.serviceReducer.serviceData.FUEL_DATA);
    const serviceData = useSelector((state) => state.serviceReducer.serviceData.SERVICE_DATA);
    const placeData = useSelector((state) => state.serviceReducer.serviceData.PLACE_DATA);
    const vehicleId = useSelector(state => state.serviceReducer.selectedRow.vehicle_id);
    console.log(vehicleId);
    console.log(fuelData);
    console.log(placeData);





    // gửi dữ liệu lên server
    const onFinish = values => {
        console.log('Received values of form:', values);

        const data = {
            name: name, // Assuming 'name' is defined somewhere else
            fuelType: fuelType,
            odometer: odometer,
            time: time, // Filling the rest based on your requirements
            date: date,
            place: place,
            serviceType: serviceType,
            cost: money,
            comments: comments
        };
// http://localhost:3000/carTracking/service/api/:vehicle_id
        fetch(`http://localhost:3000/carTracking/service/api/${vehicleId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Layout style={{ backgroundColor: '#fff' }}>
            <Header>Header</Header>
            <Content>
                <Form className='example' onFinish={onFinish}>
                    <h3>Example</h3>
                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-calendar'></i>
                        </div>

                        <FloatLabel label='Date' name='date' value={date} className='label-float'>
                            <DatePicker
                                value={date}
                                onChange={date => setDate(date)}
                                style={{ width: '100%', padding: '12px 12px 8px 11px' }}
                            />
                        </FloatLabel>
                    </div>

                    {/* time */}
                    <div className='form-group'>
                        <div className='form-icon'></div>

                        <FloatLabel label='Time' name='time' value={time} className='label-float'>
                            <TimePicker
                                onChange={value => setTime(value)}
                                value={time}
                                format='HH:mm'
                                style={{ width: '100%', padding: '12px 12px 8px 11px' }}
                            />
                        </FloatLabel>
                    </div>

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-tachometer'></i>
                        </div>
                        <FloatLabel label='Odometer' name='odometer' value={odometer}>
                            <Input type='number' onChange={e => setOdometer(e.target.value)} value={odometer} />
                        </FloatLabel>
                    </div>

                    <Divider />

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-map-marker-alt'></i>
                        </div>
                        <FloatLabel label='Place' name='place' value={place}>
                            <Select showSearch onChange={value => setPlace(value)} value={place}>
                                {placeData.map(place => (
                                    <Option key={place.PLACE_ID} value={place.PLACE_NAME}>{place.PLACE_NAME}</Option>
                                ))}
                            </Select>
                        </FloatLabel>
                    </div>

                    <Divider />
                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-wrench'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Type of Service' name='serviceType' value={serviceType}>
                            <Select showSearch onChange={value => setServiceType(value)} value={serviceType}>
                                {serviceData.map(service => (
                                    <Option key={service.SERVICE_ID} value={service.SERVICE_TYPE}>{service.SERVICE_TYPE}</Option>
                                ))}
                            </Select>
                        </FloatLabel>
                    </div>
                    <Divider />

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-gas-pump'></i>
                        </div>
                        <FloatLabel label='Fuel type' name='fuelType' value={fuelType}>
                            <Select showSearch onChange={value => setFuelType(value)} value={fuelType}>
                                {fuelData.map(place => (
                                    <Option key={place.FUEL_ID} value={place.FUEL_NAME}>{place.FUEL_NAME}</Option>
                                ))}
                            </Select>
                        </FloatLabel>
                    </div>

                    <Divider />
                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-dollar-sign'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Money' name='money' value={money}>
                            <Input type='number' onChange={e => setMoney(e.target.value)} value={money} />
                        </FloatLabel>
                    </div>

                    <Divider />

                    <div className='form-group'>
                        <div className='form-icon'></div>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Submit
                            </Button>
                        </Form.Item>
                    </div>

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-comment'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Comments' name='comments' value={comments}>
                            <TextArea rows={4} onChange={e => setComments(e.target.value)} value={comments} />
                        </FloatLabel>
                    </div>
                </Form>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};
export default Service;
