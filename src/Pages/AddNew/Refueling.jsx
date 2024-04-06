import { useState } from 'react';
import { Form, Layout, Button, Divider } from 'antd';
import { DatePicker } from 'antd';
const { Header, Content, Footer } = Layout;
import { Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
import { TimePicker } from 'antd';
import FloatLabel from '../../Components/FloatLabel';
import moment from 'moment';
import { message } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { useForm } from 'antd/lib/form/Form';

import cars from '../../assets/cars.json';

const carOptions = cars.map(car => ({
    value: car.slug,
    label: (
        <div>
            <img src={`../../carlogo/${car.image}`} alt={car.name} style={{ width: '30px', marginRight: '10px' }} />
            {car.name}
        </div>
    ),
}));
const Refueling = () => {
    const { id } = useParams();
    const [active, setActive] = useState('active');
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setActive(e.target.value);
    };

    const [time, setTime] = useState(moment('12:00', 'HH:mm'));
    const [fields, setFields] = useState([{ fuelCapacity: '', fuelType: '', fuelPrice: '' }]);

    const [date, setDate] = useState(null);

    const [fuelCapacity, setFuelCapacity] = useState('1234');

    const [fuelPrice, setFuelPrice] = useState('');
    const [odometer, setOdometer] = useState('');
    const [comments, setComments] = useState('');
    const fuelData = useSelector((state) => state.serviceReducer.serviceData.FUEL_DATA);

    // gửi dữ liệu lên server
    const onFinish = values => {
        console.log('Received values of form:', values);

        const data = {
            id: id,
            date: date,
            time: time,
            comments: comments,
            fuelPrice: fuelPrice,
            fuelCapacity: fuelCapacity,
            fuelType: fuelType,
            odometer: odometer,
        };
        console.log(data);

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
    const handleInputChange = (event, index, field) => {
        const newFields = [...fields];
        newFields[index][field] = event.target.value;
        setFields(newFields);
    };

    const handleRemoveField = () => {
        const newFields = [...fields];
        newFields.pop();
        setFields(newFields);
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
                            <i className='fa-solid fa-tachometer'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Odometer' name='odometer' value={odometer}>
                            <Input type='number' onChange={e => setOdometer(e.target.value)} value={odometer} />
                        </FloatLabel>
                    </div>

                    <Divider />

                    {fields.map((field, index) => {
                        return (
                            <div key={index}>
                                <div className='form-group'>
                                    <div className='form-icon'>
                                        <i className='fa-solid fa-gas-pump'></i>
                                    </div>
                                    <FloatLabel label='Fuel type' name='fuelType' value={field.fuelType}>
                                        <Select
                                            showSearch
                                            onChange={value =>
                                                handleInputChange({ target: { value } }, index, 'fuelType')
                                            }
                                            value={field.fuelType}>
                                            {fuelData?.map(place => (
                                                <Option key={place.FUEL_ID} value={place.FUEL_NAME}>{place.FUEL_NAME}</Option>
                                            ))}
                                        </Select>
                                    </FloatLabel>
                                </div>

                                <div className='form-group'>
                                    <div className='form-icon'>
                                        <i className='fa-solid fa-dollar-sign'></i>{' '}
                                        {/* Replace with the icon you want to use */}
                                    </div>
                                    <FloatLabel label='Fuel Price' name='fuelPrice' value={field.fuelPrice}>
                                        <Input
                                            type='number'
                                            onChange={e => handleInputChange(e, index, 'fuelPrice')}
                                            value={field.fuelPrice}
                                        />
                                    </FloatLabel>
                                </div>

                                <div className='form-group'>
                                    <div className='form-icon'></div>
                                    <FloatLabel label='Fuel Capacity' name='fuelCapacity' value={field.fuelCapacity}>
                                        <Input
                                            type='number'
                                            onChange={e => handleInputChange(e, index, 'fuelCapacity')}
                                            value={field.fuelCapacity}
                                        />
                                    </FloatLabel>
                                </div>
                            </div>
                        );
                    })}

                    <div className='form-group'>
                        <div className='form-icon'></div>
                        <div>
                            <Button
                                type='primary'
                                onClick={() => {
                                    if (fields.length < 3) {
                                        setFields([...fields, { fuelCapacity: '', fuelType: '', fuelPrice: '' }]);
                                    } else {
                                        message.warning('You can only add up to 3 fuel details.');
                                    }
                                }}
                                style={{
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <i className='fa-solid fa-plus'></i>
                                <span
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        marginLeft: '5px',
                                    }}>
                                    Fuel
                                </span>
                                {/* Replace with the icon you want to use */}
                            </Button>

                            {fields.length > 1 && (
                                <Button
                                    type='primary'
                                    danger
                                    onClick={() => handleRemoveField()}
                                    style={{
                                        marginLeft: '10px',
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                    }}>
                                    <i className='fa-solid fa-minus'></i>
                                </Button>
                            )}
                        </div>
                    </div>

                    <Divider />

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-comment'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Comments' name='comments' value={comments}>
                            <TextArea rows={4} onChange={e => setComments(e.target.value)} value={comments} />
                        </FloatLabel>
                    </div>

                    <div className='form-group'>
                        <div className='form-icon'></div>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};
export default Refueling;
