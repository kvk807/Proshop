import React from 'react';
import { Form } from 'react-bootstrap';

const SelectQuantity = ({ from, to, qty, handleChangeQty }) => {
  return (
    <Form.Control
      as='select'
      value={qty}
      onChange={(e) => handleChangeQty(+e.target.value)}
      style={{ width: 'unset' }}
    >
      {[
        ...Array.from(
          {
            length: to - from + 1,
          },
          (_, i) => (
            <option key={i + from} value={i + from}>
              {i + from}
            </option>
          )
        ),
      ]}
    </Form.Control>
  );
};

export default SelectQuantity;
