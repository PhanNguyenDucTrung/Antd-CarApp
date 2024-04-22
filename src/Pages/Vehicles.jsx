import { Table, Spin, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarServiceData, setSelectedRows, setSelectedRowKeys, setUserId, setVehicles, setAddNewVehicle } from '../redux/reducers/serviceReducer';
import { Modal } from 'antd';
import axios from 'axios';
import { message } from 'antd';
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
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const newVehicle = useSelector((state) => state.serviceReducer.addNewVehicle);
    const vehicles = useSelector(state => state.serviceReducer.vehiclesData);
    const selectedRowKeys = useSelector(state => state.serviceReducer.selectedRowKeys);


    if (id) {
        localStorage.setItem('id', id);
    }



    const rowSelection = {
        selectedRowKeys,

        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(setSelectedRowKeys(selectedRowKeys));
            dispatch(setSelectedRows(selectedRows));
        },
    };

    // Tải data tĩnh cho selection
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
                    <button style={buttonStyle} onClick={() => showDeleteConfirm(record)}>
                        <DeleteOutlined />
                    </button>
                </span>
            ),
        },
    ];



    const fetchDataVehicles = async () => {
        try {

            const response = await fetch(`http://localhost:3000/carTracking/vehicle/api/${id}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData);
            const dataWithKey = jsonData.VEHICLE_DATA.map(item => ({ key: item.vehicle_id, ...item }));
            dispatch(setVehicles(dataWithKey))
            if (dataWithKey.length === 1) {

                dispatch(setSelectedRowKeys([dataWithKey[0].key]));
            }
            if (dataWithKey.length > 1) {

                console.log('Setting selected rows:', [dataWithKey[0]]);
                // setSelectedRowKeys([dataWithKey[0].key]);


            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataVehicles();
        if (id) { dispatch(setUserId(id)) }
    }, []);


    const showDeleteConfirm = (record) => {
        Modal.confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
                handleDelete(record);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const handleDelete = async (record) => {
        console.log('Delete', record);
        const apiUrl = `http://localhost:3000/carTracking/vehicle/api/${record.vehicle_id}`;

        try {
            const response = await axios.delete(apiUrl);
            if (response.status === 200) {
                fetchDataVehicles();

                message.success('Vehicle deleted successfully');
            } else {

                message.error('Failed to delete vehicle');

            }
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            message.error('Failed to delete vehicle');

        }
    };

    const handleEdit = record => {
        console.log('Edit', record);
        // Add your edit logic here
    };
    if (!vehicles) {
        return <Spin />;
    }

    if (vehicles.length === 0) {
        console.log('RUN WHEN vehicles 0')
        dispatch(setAddNewVehicle(true))
        navigate('/first-vehicle');

    }

    return (
        <>
            <Button type='primary' onClick={() => navigate('/vehicle/new')}>
                Add New
            </Button>   <Button type='primary' onClick={() => navigate('/testdqwe')}>
                Test
            </Button>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={vehicles}
                style={{
                    minHeight: '100vh',
                    width: '100%',
                }}
            />

        </>
    );
};

export default Vehicles;
