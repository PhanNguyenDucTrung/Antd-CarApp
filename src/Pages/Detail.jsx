import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
    return (
        <div
            style={{
                maxWidth: '1000px',
                margin: '0 auto',
            }}>
            {/* shop photos */}
            <div className='shop-photos'>
                <img src='https://via.placeholder.com/150' alt='shop' />
                <img src='https://via.placeholder.com/150' alt='shop' />
            </div>

            {/* shop info */}
            <div className='shop-overview'>
                <div className='left'>
                    {/* main overview */}
                    <div>
                        <div>
                            <span>⭐ 4.3</span> <span> 21 reviews</span>
                        </div>
                        <h2>Shop Name</h2>
                        <p
                            style={{
                                fontWeight: 400,
                                fontSize: '18px',
                            }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At possimus nobis eos culpa.
                            Nulla, consequatur.
                        </p>
                        <p>2703 10th St</p>
                        <p>Berkeley, CA 94710</p>
                        <div
                            style={{
                                fontWeight: 500,
                                color: '#0096d1',
                            }}>
                            <span>Get Directions</span>
                            <span
                                style={{
                                    marginInline: '10px',
                                    borderRight: '1px solid #edf0f5',
                                }}></span>
                            <span>Streetview</span>
                        </div>
                        <p>0031231231312</p>
                        <p
                            style={{
                                fontWeight: 500,
                                color: '#0096d1',
                            }}>
                            website.com
                        </p>
                    </div>

                    {/* shop features */}

                    <div className='shop-features'>
                        <h2>Shop Features</h2>
                        <div>
                            <h3 className='feature-title'>Features Title</h3>
                            <p
                                style={{
                                    fontSize: '14px',
                                }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus est blanditiis
                                alias, dolore tempore nisi.
                            </p>
                        </div>
                    </div>

                    {/* about the shop */}
                    <div>
                        <h2>About the shop</h2>
                        <p
                            style={{
                                fontSize: '14px',
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius pariatur exercitationem,
                            molestiae quia odit cum nesciunt aperiam iure aliquid ipsum ducimus laudantium non provident
                            adipisci fuga officiis. Repellat, eaque!
                        </p>
                    </div>

                    {/* Message from the shop */}
                    <div>
                        <h2>Message from the shop</h2>
                        <p
                            style={{
                                fontSize: '14px',
                            }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nihil tempora iste, laborum
                            minima minus delectus itaque excepturi ipsum facere repudiandae dolorem! Dicta neque earum
                            quidem eos necessitatibus voluptate obcaecati iusto. Perspiciatis praesentium magnam ex
                            possimus voluptate perferendis excepturi?
                        </p>
                        <div>
                            <button
                                style={{
                                    backgroundColor: '#0096d1',
                                    color: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    fontWeight: 500,
                                    border: 'none',
                                    cursor: 'pointer',
                                }}>
                                Send Message
                            </button>

                            <button
                                style={{
                                    backgroundColor: 'white',
                                    color: '#0096d1',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    fontWeight: 500,
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginLeft: '20px',
                                }}>
                                Visit Website
                            </button>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <div
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '5px',
                            padding: '20px',
                        }}>
                        <p
                            style={{
                                fontWeight: 500,
                            }}>
                            Soonest available time:
                        </p>
                        <p
                            style={{
                                fontWeight: 600,
                                color: 'black',
                            }}>
                            Mon, May 06, 2024 at 8:30 am
                        </p>
                        <button
                            style={{
                                display: 'block',
                                width: '100%',
                                backgroundColor: '#0096d1',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontWeight: 500,
                                border: 'none',
                                cursor: 'pointer',
                            }}>
                            Book Appointment
                        </button>
                        <a
                            href='#'
                            style={{
                                color: '#0096d1',
                                display: 'block',
                                padding: '10px 20px',
                                fontWeight: 500,
                            }}>
                            Check Availability
                        </a>
                    </div>
                    <div
                        style={{
                            backgroundColor: '#edf0f5',
                            padding: '20px',
                            borderRadius: '5px',
                            marginTop: '20px',
                        }}>
                        <p
                            style={{
                                color: 'black',
                                fontWeight: 500,
                            }}>
                            Don&apos;t know what&apos;s wrong?
                        </p>
                        <p
                            style={{
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '16px',
                            }}>
                            This shop can help you diagnose your issue, no matter what sound, smoke, or smell you are
                            facing
                        </p>
                    </div>
                </div>
            </div>

            {/* Comments */}
            <div className='comment-section'>
                <h3
                    style={{
                        fontSize: '20px',
                        fontWeight: 500,
                    }}>
                    Overall Rating
                </h3>
                <p>⭐ 4.3 (21 reviews)</p>
                <div className='comments'>
                    <div className='comment'>
                        <div className='user-info'>
                            <p
                                style={{
                                    fontWeight: 500,
                                }}>
                                Username
                            </p>
                            <p>Car name</p>
                        </div>
                        <div className='comment-detail'>
                            <p
                                style={{
                                    fontWeight: 500,
                                }}>
                                <span> Rating: ⭐⭐⭐⭐</span>
                                <span> Jul 26, 2019</span>
                            </p>
                            <p className='comment-content'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempore?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;
