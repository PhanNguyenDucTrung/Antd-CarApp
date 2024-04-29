import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

const Test = () => {
    const mapRef = useRef(null);
    const [markers, setMarkers] = useState([]);
    const stores = [
        {
            _id: '6623be8e8c5bdc3ffcd572c1',
            shop_images: [
                'https://storage.googleapis.com/rp-production-public-content/jcr587tax0uxwkqj136ehb43e4yd',
                'https://storage.googleapis.com/rp-production-public-content/TT1KNaGpBcTX7u8tPUCMququ ',
            ],
            shop_website: 'https://www.oceanworksberkeley.com/',
            shop_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            shop_short_description: 'Lorem ipsum dolor sit amet.',
            shop_name: 'Oceanworks',
            shop_address: '123 Main St, City, Country',
            shop_distance: 5,
            open_time: '2024-04-20T02:00:00.000Z',
            soonest_booking_time: '2024-04-20T01:00:00.000Z',
            soonest_booking_date: '2024-04-20T00:00:00.000Z',
            shop_phone: 1234567890,
            shop_free_dates: ['2024-04-22T00:00:00.000Z', '2024-04-25T00:00:00.000Z'],
            shop_reputation_star: 5,
            shop_reviewers: [1, 2, 34, 5],
            shop_appointments: [],
            shop_coordinate: [10.872109651019828, 106.62046779388074],
            __v: 0,
        },
        {
            _id: '6623be8e8c5bdc3ffcd572c2',
            shop_images: ['https://storage.googleapis.com/rp-production-public-content/x15uimo8l7ktwo27tldid76iprum'],
            shop_website: 'https://www.example.com/shop2',
            shop_description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
            shop_short_description: 'Sed ut perspiciatis unde omnis iste.',
            shop_name: 'Shop 2',
            shop_address: '456 Elm St, City, Country',
            shop_distance: 7,
            open_time: '2024-05-20T02:00:00.000Z',
            soonest_booking_time: '2024-04-20T02:00:00.000Z',
            soonest_booking_date: '2024-04-20T00:00:00.000Z',
            shop_phone: 9876543210,
            shop_free_dates: [],
            shop_reputation_star: 0,
            shop_reviewers: [],
            shop_appointments: [],
            shop_coordinate: [10.861437842870101, 106.63181186716584],
            __v: 0,
        },
    ];
    const handleStoreClick = store => {
        const latitude = parseFloat(store.shop_coordinate[0]);
        const longitude = parseFloat(store.shop_coordinate[1]);
        if (mapRef.current && latitude && longitude) {
            const map = mapRef.current;

            map.flyTo([latitude, longitude], 19);
            setTimeout(() => {
                map.invalidateSize();
            }, 100);
        } else {
            console.error('Invalid store object:', store);
        }
    };
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([10.771663, 106.669631], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);


            const markers = stores.map(item => {
                const latitude = parseFloat(item.shop_coordinate[0]);
                const longitude = parseFloat(item.shop_coordinate[1]);

                const icon = L.divIcon({
                    className: 'custom-icon',
                    html: `<div>${item.shop_reputation_star} ⭐</div>`,
                    iconSize: [60, 36],
                    popupAnchor: [1, -34],
                });

                const popupContent = `
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            height: '300px',
                            alignItems: 'center',
                            padding: '10px',
                            border: '1px solid #ccc',
                            marginBottom: '10px',
                        }}
                    >
                        <div
                            style="
                                width: 300px;
                                overflow: 'hidden';
                                border-radius: 5px;
                          "
                        >
                            <img
                                src=${item.shop_images[0]}
                                alt=${item.shop_name}
                                style="
                                    width: 100%;
                                    objectFit: 'cover';
                                "
                            />
                        </div>
                        <div style={{
                            height: '100%',
                            alignItems: 'flex-start', // Add this line
                        }}>
                            <div style="display: flex; justify-content: space-between; align-items: center">
                                <h2 style="margin-top: 0">${item.shop_name}</h2>
                                <p style="margin-top: 0">${item.shop_reputation_star} ⭐(${item.shop_reviewers.length})</p>
                            </div>
            
                            <p style="
                                margin:0;
                                margin-top: 5px;
                            ">${item.shop_description}</p>
                            <p style="
                            margin:0;
                            margin-top: 5px;
                        ">${item.shop_address}</p>
                            <p><i class="fa-regular fa-clock"></i> Opens: ${new Date(item.open_time).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    weekday: 'short'
                })}</p>
                            <p style="margin-top: 5px"><i class="fa-solid fa-phone"></i> ${item.shop_phone}</p>
                            <p style="margin-top: 5px"><i class="fa-solid fa-bolt-lightning"></i> Soonest availability ${new Date(item.soonest_booking_date).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    weekday: 'short'
                })}</p>
                            
                    <div style="
                                margin-top: 5px;
                                color: #ffffff;
                                padding: 12px 20px;
                                background-color: rgb(0, 150, 209);
                                text-align: center;
                                border-radius: 4px;
                            ">Check Availability</div>
                        </div>
                    </div>
                `

                return L.marker([latitude, longitude], { icon })
                    .addTo(mapRef.current)
                    .bindPopup(popupContent)
                    .openPopup();
            });


            // stores.forEach(item => {
            //     const latitude = parseFloat(item.shop_coordinate[0]);
            //     const longitude = parseFloat(item.shop_coordinate[1]);

            //     const icon = L.divIcon({
            //         className: 'custom-icon',
            //         html: `<div>${(item.shop_reputation_star)} ⭐</div>`,
            //         iconSize: [30, 26],
            //         iconAnchor: [12, 41],
            //         popupAnchor: [1, -34],
            //     });

            //     const marker = L.marker([latitude, longitude], { icon })
            //         .addTo(mapRef.current)
            //         .bindPopup(`<b>${item.shop_name}</b><br>${item.shop_description}`);

            //     setMarkers(prevMarkers => [...prevMarkers, marker]);
            // });

            const group = new L.featureGroup(markers);
            mapRef.current.fitBounds(group.getBounds());
        }
        mapRef.current.on('moveend', function handleMoveEnd() {
            let count = 0;

            // Temporarily remove the event handler
            mapRef.current.off('moveend', handleMoveEnd);

            // Close all popups first
            markers.forEach(marker => marker.closePopup());

            markers.forEach(marker => {
                // Stop if we've already opened two popups
                if (count >= 2) {
                    return;
                }

                // Get the current map view
                const bounds = mapRef.current.getBounds();

                // Check if the marker is within the map view
                if (bounds.contains(marker.getLatLng())) {
                    // Open the marker's popup
                    marker.openPopup();

                    // Increment the counter
                    count++;
                }
            });

            // Add the event handler back
            mapRef.current.on('moveend', handleMoveEnd);
        });
    }, [mapRef, markers]);
    return (
        <div style={{ display: 'flex', width: '100%', height: '680px', margin: 'auto', width: '1400px' }}>
            <div id='map' style={{ flex: '1', minWidth: '880px' }}></div>
            <div style={{ flex: '1', overflowY: 'auto' }}>
                <div style={{
                    paddingLeft: '7px',
                    fontSize: '28px'
                }}>
                    {(stores.length === 0 && <p>No stores found</p>) || <p>Found {stores.length} stores nearby</p>}
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}>
                    {stores.map(store => (
                        <div
                            key={store._id}
                            style={{
                                display: 'flex',
                                gap: '10px',
                                height: '300px',
                                alignItems: 'center',
                                padding: '10px',
                                border: '1px solid #ccc',
                                marginBottom: '10px',
                            }}
                            onClick={() => handleStoreClick(store)}>
                            <div
                                style={{
                                    width: '360px',
                                    height: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '5px',
                                }}>
                                <img
                                    src={store.shop_images[0]}
                                    alt={store.shop_name}
                                    style={{
                                        width: '360px',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <div style={{
                                height: '100%',
                                alignItems: 'flex-start', // Add this line
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h2 style={{ marginTop: 0 }}>{store.shop_name}</h2>
                                    <p style={{ marginTop: 0 }}>{store.shop_reputation_star} ⭐({store.shop_reviewers.length})</p>
                                </div>

                                <p style={{
                                    margin: 0
                                }}>{store.shop_description}</p>
                                <p>{store.shop_address}</p>
                                <p><i className="fa-regular fa-clock"></i> Opens: {new Date(store.open_time).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                    weekday: 'short'
                                })}</p>
                                <p><i className="fa-solid fa-phone"></i> {store.shop_phone}</p>
                                <p><i className="fa-solid fa-bolt-lightning"></i> Soonest availability {new Date(store.soonest_booking_date).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                    weekday: 'short'
                                })}</p>
                                <div style={{
                                    padding: '12px 20px'
                                    , backgroundColor: 'rgb(0, 150, 209)',
                                    textAlign: 'center',
                                    borderRadius: '4px'
                                }}>Check Availability</div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};
export default Test;
