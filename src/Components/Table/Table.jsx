import React, { useState } from 'react';
import { Table as BootstrapTable, Form } from 'react-bootstrap';


const initialData = [
  { id: 1, category: 'Food', amount: 150 },
  { id: 2, category: 'Transport', amount: 50 },
  { id: 3, category: 'Shopping', amount: 200 },
  { id: 4, category: 'Food', amount: 100 },
  { id: 5, category: 'Others', amount: 300 },
];

const ExpenseTable = () => {
  const [category, setCategory] = useState('All');
  const [data, setData] = useState(initialData);


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    if (selectedCategory === 'All') {
      setData(initialData);
    } else {
      setData(initialData.filter((item) => item.category === selectedCategory));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Xarajatlar Jadvali</h2>

      {/* Select filter */}
      <Form.Group controlId="categorySelect" className="mb-3">
        <Form.Label>Kategoriya bo'yicha filter</Form.Label>
        <Form.Control as="select" value={category} onChange={handleCategoryChange}>
          <option value="All">Barchasi</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </Form.Control>
      </Form.Group>

      {/* Responsive Table */}
      <div className="table-responsive">
        <BootstrapTable striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Kategoriya</th>
              <th>Summasi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.category}</td>
                <td>${row.amount}</td>
              </tr>
            ))}
          </tbody>
        </BootstrapTable>
      </div>
    </div>
  );
};

export default ExpenseTable;
