import { Input, Select } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const { Option } = Select;
const Booking = () => {
    const store = useSelector(state => state.serviceReducer.selectedStore);
    const selectedTime = useSelector(state => state.serviceReducer.selectedTime);
    const selectedDate = useSelector(state => state.serviceReducer.selectedDate);
    return (
        <div
            style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                borderRadius: '5px',
            }}>
            <div
                style={{
                    width: '600px',
                }}>
                <h3>Tell us about your vehicle</h3>
                {/* select year */}{' '}
                {/* <Select placeholder='Select a vehicle' style={{ width: 200 }}>
                    {store.vehicles.map(vehicle => (
                        <Option key={vehicle.id} value={vehicle.id}>
                            {vehicle.make} {vehicle.model}
                        </Option>
                    ))}
                </Select> */}{' '}
                <h4>Make</h4>
                <div className='mt-3'>
                    <h4>Year</h4>
                    <div className='custom-select'>
                        <Select placeholder='Select a year' style={{ width: 200, color: '#ffffff' }}>
                            {Array.from({ length: 31 }, (_, i) => 2022 - i).map(year => (
                                <Option key={year} value={year}>
                                    {year}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className='mt-3'>
                    <h4>Model</h4>
                </div>
                <p style={{ fontWeight: 500 }}>Desribe the issues you're having with your vehicle</p>
                <p>Let the shop know what's wrong, so they can provide accurate care</p>
                <Input placeholder='Enter your comment here' />
            </div>{' '}
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', alignSelf: 'self-start', borderRadius: '5px' }}>
                <h5 style={{ margin: '0px', color: '#606fa6' }}>DROP OFF ATT</h5>
                <div
                    style={{
                        marginTop: '10px',
                        display: 'flex',
                        gap: '10px',
                    }}>
                    <div>
                        <img
                            src={
                                store?.shop_images[0] ||
                                'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                            }
                            style={{
                                width: '120px',
                                height: '150px',
                                borderRadius: '5px',
                            }}
                            alt='avatar'
                        />
                    </div>
                    <div style={{ color: '#000000' }}>
                        <p>
                            <b>{store?.shop_name}</b>
                            <span
                                style={{
                                    marginLeft: '10px',
                                }}>
                                {store?.shop_reputation_star}⭐({store?.shop_reviewers.length} reviews)
                            </span>
                        </p>
                        <p>{store?.shop_address}</p>
                        <p>{store?.shop_phone}</p>
                        <p>Opens {store?.open_time && new Date(store?.open_time).toDateString()}</p>
                    </div>
                </div>
                {/* Drop of time */}

                <div style={{ color: '#000001' }}>
                    <h4>Drop off time</h4>
                    <p>
                        {new Date(selectedDate).toLocaleString('en-US', { month: 'long' })}{' '}
                        {new Date(selectedDate).getDate()}, {new Date(selectedDate).getFullYear()} at {selectedTime}
                    </p>
                </div>

                <hr />
                <div>
                    <NavLink
                        to={`/booking`}
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            backgroundColor: '#0098d4',
                            color: '#ffffff',
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 500,
                        }}>
                        Continue to Contact Info <i className='fa-solid fa-arrow-right ms-2'></i>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Booking;
