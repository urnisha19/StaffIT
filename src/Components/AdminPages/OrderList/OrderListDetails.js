import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const OrderListDetails = ({ order }) => {
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td>
                <FormControl>
                    <Select
                        value={status}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            {order.status === 'Pending' && <span style={{ color: 'red' }}>Pending</span>}
                            {order.status === 'Ongoing' && <span style={{ color: '#FFBD3E' }}>Ongoing</span>}
                            {order.status === 'Done' && <span style={{ color: 'green' }}>Done</span>}
                        </MenuItem>
                        <MenuItem value={'Pending'} style={{ color: 'red' }}>Pending</MenuItem>
                        <MenuItem value={'Ongoing'} style={{ color: '#FFBD3E' }}>Ongoing</MenuItem>
                        <MenuItem value={'Done'} style={{ color: 'green' }}>Done</MenuItem>
                    </Select>
                </FormControl>
            </td>
        </tr>
    );
};

export default OrderListDetails;