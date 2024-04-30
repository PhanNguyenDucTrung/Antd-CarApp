import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Summary = () => {
    const selectedTime = useSelector(state => state.serviceReducer.selectedTime);
    const selectedDate = useSelector(state => state.serviceReducer.selectedDate);
    const store = useSelector(state => state.serviceReducer.selectedStore);
    const make = useSelector(state => state.serviceReducer.make);
    const year = useSelector(state => state.serviceReducer.year);
    const model = useSelector(state => state.serviceReducer.model);
    const comment = useSelector(state => state.serviceReducer.comment);
    const firstName = useSelector(state => state.serviceReducer.firstName);
    const lastName = useSelector(state => state.serviceReducer.lastName);
    const email = useSelector(state => state.serviceReducer.email);
    const phone = useSelector(state => state.serviceReducer.phone);
    return (
        <div style={{ margin: '0 auto', width: 400 }}>
            <div
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: '20px',

                    borderRadius: '5px',
                }}>
                <h5 style={{ margin: '0px', color: '#606fa6', display: 'flex', justifyContent: 'space-between' }}>
                    DROP OFF ATT <NavLink to='/date'>Edit</NavLink>
                </h5>
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
                        <i className='fa-regular fa-clock'></i>{' '}
                        {new Date(selectedDate).toLocaleString('en-US', { month: 'long' })}{' '}
                        {new Date(selectedDate).getDate()}, {new Date(selectedDate).getFullYear()} at {selectedTime}
                    </p>
                </div>
            </div>

            <div
                style={{
                    marginTop: '20px',
                    backgroundColor: '#f0f0f0',
                    padding: '20px',
                    color: '#000001',
                    borderRadius: '5px',
                }}>
                <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Repair Summary <NavLink to='/booking'>Edit</NavLink>
                </h4>
                <p>
                    <i className='fa-solid fa-car'></i> {year} {make} {model}
                </p>
                <div>
                    <i className='fa-solid fa-comment'></i> Let the shop know what's wrong
                    <p>
                        <span style={{ marginRight: '5px', marginLeft: '15px' }}>•</span>
                        <span
                            style={{
                                color: '#85949e',
                            }}>
                            {' '}
                            {comment}
                        </span>
                    </p>
                </div>
            </div>

            <div
                style={{
                    marginTop: '20px',
                    backgroundColor: '#f0f0f0',
                    padding: '20px',
                    color: '#000001',
                    borderRadius: '5px',
                }}>
                {' '}
                <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Contact Infomation
                    <NavLink to='/contact'>Edit</NavLink>
                </h4>
                <p>
                    {lastName} {firstName}
                </p>
                <p> {phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Summary;
