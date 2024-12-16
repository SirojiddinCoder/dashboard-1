import React from 'react';

const Balance = () => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        {/* Umumiy Balans */}
        <div className="col-md-4">
          <div
            className="card text-white bg-primary mb-3 shadow"
            style={{ height: '100%' }}
          >
            <div className="card-body">
              <h5 className="card-title">Umumiy balans</h5>
              <h2 className="fw-bold">500000 So'm</h2>
            </div>
          </div>
        </div>

        {/* Jami Daromad */}
        <div className="col-md-4">
          <div className="card border-light shadow mb-3" style={{ height: '100%' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Jami Daromad</h5>
              <p className="fs-4">500000 So'm</p>
              <button className="btn btn-primary w-100">Kirimlar</button>
            </div>
          </div>
        </div>

        {/* Jami Harajatlar */}
        <div className="col-md-4">
          <div className="card border-light shadow mb-3" style={{ height: '100%' }}>
            <div className="card-body">
              <h5 className="card-title fw-bold">Jami Harajatlar</h5>
              <p className="fs-4">0 So'm</p>
              <button className="btn btn-primary w-100">Chiqimlar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
