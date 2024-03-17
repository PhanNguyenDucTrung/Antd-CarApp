import { Radio } from 'antd';
// import './Test.css';

const Test = () => {
    const options = [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },
        { label: 'Option 3', value: 3 },
        { label: 'Option 4', value: 4 },
    ];

    return (
        <Radio.Group defaultValue={1}>
            {options.map(option => (
                <Radio key={option.value} value={option.value} className='custom-radio'>
                    {option.label}
                </Radio>
            ))}
        </Radio.Group>
    );
};
export default Test;
