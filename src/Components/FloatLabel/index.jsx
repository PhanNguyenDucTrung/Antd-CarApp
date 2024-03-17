import { useState } from 'react';

import { Form } from 'antd';

import './index.css';

const FloatLabel = props => {
    const [focus, setFocus] = useState(false);
    const { children, label, value } = props;
    console.log('value', value);

    const labelClass = focus || (value && value.length !== 0) ? 'label label-float' : 'label';

    return (
        <Form.Item className='float-label' onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
            {children}
            <label className={labelClass}>{label}</label>
        </Form.Item>
    );
};

export default FloatLabel;
