import React from "react";

const AccountSummary = () => {
  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Account Summary</h5>
        </div>
        <div className="table-responsive mt-2 p-3 card-body">
          <table className="table table-sm table-bordered table-hover custom-table ">
            <thead className="table-info">
              <tr>
                <th>Account Number</th>
                <th>Owner</th>
                <th>Account Type</th>
                <th>Purpose</th>
                <th>Status</th>
                <th>Current Year Income</th>
                <th>Current Year Expense</th>
                <th>Total Income</th>
                <th>Total Expense</th>
                <th>Current Balance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end mt-1">
            <nav className="d-flex justify-content-center mt-2">
              <ul className="pagination custom-pagination">
                <li className="page-item disabled">
                  <button className="page-link">← Previous</button>
                </li>

                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>

                <li className="page-item">
                  <button className="page-link">2</button>
                </li>

                <li className="page-item">
                  <button className="page-link">3</button>
                </li>

                <li className="page-item">
                  <button className="page-link">4</button>
                </li>

                <li className="page-item">
                  <button className="page-link">5</button>
                </li>

                <li className="page-item">
                  <button className="page-link">Next →</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
