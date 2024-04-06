import { useState } from 'react';
import { Form, Layout, Button, Divider } from 'antd';
import { DatePicker } from 'antd';
const { Header, Content, Footer } = Layout;
import { Input, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
import { Radio } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import FloatLabel from '../../Components/FloatLabel';
import { useSelector } from 'react-redux';


const Reminder = () => {
    const onFinish = values => {
        console.log('Received values of form:', values);

        const data = {
            name: name,
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
    }; const serviceData = useSelector((state) => state.serviceReducer.serviceData.SERVICE_DATA);
    const [comments, setComments] = useState('1234');
    const [serviceType, setServiceType] = useState('');
    const [odometer, setOdometer] = useState('1234');
    const [time, setTime] = useState(moment('12:00', 'HH:mm'));
    const [contactMethod, setContactMethod] = useState('');
    const [date, setDate] = useState(null);
    return (
        <Layout style={{ backgroundColor: '#fff' }}>
            <Header>Header</Header>
            <Content>
                <Form className='example' onFinish={onFinish}>
                    <h3>Example</h3>

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-phone'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel
                            label='Contact Method'
                            name='contactMethod'
                            value={contactMethod}
                            className='label-float'>
                            <Radio.Group onChange={e => setContactMethod(e.target.value)} value={contactMethod}>
                                <Radio value='phone'>Phone</Radio>
                                <Radio value='email'>Email</Radio>
                                <Radio value='both'>Both</Radio>
                            </Radio.Group>
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
                            <i className='fa-solid fa-tachometer'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Odometer' name='odometer' value={odometer}>
                            <Input type='number' onChange={e => setOdometer(e.target.value)} value={odometer} />
                        </FloatLabel>
                    </div>

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-clock'></i> {/* Replace with the icon you want to use */}
                        </div>
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

                    <Divider />

                    <div className='form-group'>
                        <div className='form-icon'>
                            <i className='fa-solid fa-comment'></i> {/* Replace with the icon you want to use */}
                        </div>
                        <FloatLabel label='Comments' name='comments' value={comments}>
                            <TextArea
                                rows={4}
                                onChange={e => setComments(e.target.value)}
                                maxLength={200}
                                value={comments}
                            />
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
export default Reminder;
