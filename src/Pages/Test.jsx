import { Radio } from 'antd';
import { useSelector } from 'react-redux';
import { selectMovies } from '../redux/reducers/moviesReducer';

const Test = () => {
    const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 },
    ];

    const movies = useSelector(selectMovies);
    console.log(movies);

    return (
        <>
            <Radio.Group defaultValue={1}>
                {options.map(option => (
                    <Radio key={option.value} value={option.value} className='custom-radio'>
                        {option.label}
                    </Radio>
                ))}
            </Radio.Group>
        </>
    );
};
export default Test;



[
  {
    "SERVICE_TYPE": "Tire pressure",
    "ODEMTER": "1234KM",
    "DATE": "4/9/2024",
    "PLACE": "1234",
    "TOTAL_PRICE": "1234VND"
  },
  {
    "SERVICE_TYPE": "Wheel alignment",
    "ODEMTER": "1234KM",
    "DATE": "4/9/2024",
    "PLACE": "1234",
    "TOTAL_PRICE": "1234VND"
  },
  {
    "REFUELLING_ID": "6617564a659b669d3fba6c62",
    "DATE": "4/9/2024",
    "FUEL_OBJECT": [
      {
        "_id": "6617564a659b669d3fba6c5e",
        "fuel_type": "Premium Petrol",
        "fuel_capacity": 400,
        "fuel_price": 300,
        "total_cost": 120000,
        "__v": 0
      },
      {
        "_id": "6617564a659b669d3fba6c5f",
        "fuel_type": "Mid-Grade Petrol",
        "fuel_capacity": 17,
        "fuel_price": 32,
        "total_cost": 544,
        "__v": 0
      }
    ],
    "ODOMTER": "300KM",
    "GAS_STATION": "Gas Station A",
    "TOTAL_PRICE": "120544VND"
  },
  {
    "REFUELLING_ID": "66176af80c9d8b20650962ea",
    "DATE": "4/9/2024",
    "FUEL_OBJECT": [
      {
        "_id": "66176af80c9d8b20650962e8",
        "fuel_type": "Diesel",
        "fuel_capacity": 5345,
        "fuel_price": 500,
        "total_cost": 2672500,
        "__v": 0
      }
    ],
    "ODOMTER": "34KM",
    "GAS_STATION": "Gas Station C",
    "TOTAL_PRICE": "2672500VND"
  },
  {
    "REFUELLING_ID": "66176bca2ce41b8512d2ae05",
    "DATE": "4/1/2024",
    "FUEL_OBJECT": [
      {
        "_id": "66176bca2ce41b8512d2ae03",
        "fuel_type": "Diesel",
        "fuel_capacity": 5345,
        "fuel_price": 500,
        "total_cost": 2672500,
        "__v": 0
      }
    ],
    "ODOMTER": "34KM",
    "GAS_STATION": "Gas Station C",
    "TOTAL_PRICE": "2672500VND"
  }
]
