import { Table, Spin, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarServiceData, setSelectedRows } from '../redux/reducers/serviceReducer';

const buttonStyle = {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    marginLeft: '10px',
};
const Vehicles = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    localStorage.setItem('id', id);
    const navigate = useNavigate();
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setSelectedRows(selectedRows))
        },
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/carTracking/service/api/');
                const data = await response.json();
                dispatch(setCarServiceData(data));
            } catch (error) {
                console.error('Error fetching service data:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [dispatch]);

    const columns = [
        {
            width: 120,
            title: 'Số thứ tự',
            dataIndex: 'vehicle_id',
            key: 'vehicle_id',
            sorter: (a, b) => a.index - b.index,
        },
        {
            title: 'Nickname',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Nhà sản xuất',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
            sorter: (a, b) => a.manufacturer.localeCompare(b.manufacturer),
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            sorter: (a, b) => a.model.localeCompare(b.model),
        },
        {
            title: 'Last Update',
            dataIndex: 'last_updated', // changed from 'lastUpdate' to 'last_updated'
            key: 'last_updated', // changed from 'lastUpdate' to 'last_updated'
            sorter: (a, b) => new Date(a.last_updated) - new Date(b.last_updated), // changed from 'lastUpdate' to 'last_updated'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status),
        },
        {
            width: 150,
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span style={{ display: 'flex' }}>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            handleEdit(record);
                            navigate(`/vehicle/edit/${record.vehicle_id}`);
                        }}>
                        <EditOutlined />
                    </button>
                    <button style={buttonStyle} onClick={() => handleDelete(record)}>
                        <DeleteOutlined />
                    </button>
                </span>
            ),
        },
    ];


    const [data, setData] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/carTracking/vehicle/api/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                const dataWithKey = jsonData.VEHICLE_DATA.map(item => ({ key: item.vehicle_id, ...item }));
                setData(dataWithKey);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            // Perform any cleanup here if necessary
        };
    }, []);

    const handleDelete = record => {
        console.log('Delete', record);
        // Add your delete logic here
    };

    const handleEdit = record => {
        console.log('Edit', record);
        // Add your edit logic here
    };
    if (!data) {
        return <Spin />;
    }

    return (
        <>
            <Button type='primary' onClick={() => navigate('/vehicle/new')}>
                Add New
            </Button>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                style={{
                    minHeight: '100vh',
                    width: '100%',
                }}
            />

        </>
    );
};

export default Vehicles;
