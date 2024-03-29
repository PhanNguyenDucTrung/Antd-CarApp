import { useState } from 'react';
import { Form, Layout, Button, Divider } from 'antd';
import { Radio } from 'antd';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { Input, Select } from 'antd';
import FloatLabel from '../../Components/FloatLabel';

// import { useForm } from 'antd/lib/form/Form';
const { Header, Content, Footer } = Layout;
import cars from '../../assets/cars.json';
const { TextArea } = Input;
const { Option } = Select;
const carOptions = cars.map(car => ({
    value: car.slug,
    label: (
        <div>
            <img src={`../../carlogo/${car.image}`} alt={car.name} style={{ width: '30px', marginRight: '10px' }} />
            {car.name}
        </div>
    ),
}));
const Service = () => {
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [place, setPlace] = useState('1234');
    const [serviceType, setServiceType] = useState('1234');
    const [money, setMoney] = useState('1234');
    const [fuelType, setFuelType] = useState('1234');
    const [odometer, setOdometer] = useState('1234');
    const [comments, setComments] = useState('1234');

    // gửi dữ liệu lên server
    const onFinish = values => {
        console.log('Received values of form:', values);

        const data = {
            name: name,
            fuelType: fuelType,
            odometer: odometer,
        };

        fetch('http://localhost:3000/vehicles', {
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
                            <Input onChange={e => setPlace(e.target.value)} value={place} />
                        </FloatLabel>
                    </div>

                    <Divider />
                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-wrench'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Type of Service' name='serviceType' value={serviceType}>
                            <Select showSearch onChange={value => setServiceType(value)} value={serviceType}>
                                <Option value='service1'>Service 1</Option>
                                <Option value='service2'>Service 2</Option>
                                <Option value='service3'>Service 3</Option>
                                <Option value='service4'>Service 4</Option>
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
                                <Option value='jack'>Compressed natural gas</Option>
                                <Option value='lucy'>Electrical</Option>
                                <Option value='tom'>Liquefied petroleum gas</Option>
                                <Option value='jerry'>Liquids</Option>
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
