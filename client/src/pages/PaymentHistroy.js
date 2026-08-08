import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const PaymentHistroy = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5 className="mb-0">Payment History</h5>
        </div>

        <div className="card-body p-4">
          <from>
            <div className="row g-1">
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member ID</label>
                <select className="form-select">
                  <option value="">Select Member ID</option>
                  <option value="Member1">Member 1</option>
                  <option value="Member2">Member 2</option>
                  <option value="Member3">Member 3</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Purpose</label>
                <select className="form-select">
                  <option value="">Select Purpose</option>
                  <option value="Purpose1">Purpose 1</option>
                  <option value="Purpose2">Purpose 2</option>
                  <option value="Purpose3">Purpose 3</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Paid From Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Paid To Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 my-0 py-0">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button type="reset" className="btn pt-btn-reset px-4 ">
                    Reset
                  </button>

                  <button type="submit" className="btn  btn-primary search-btn">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="me-2"
                    />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </from>
        </div>
        <div className="table-responsive mt-2 p-3 card-body">
          <h5 className="fw-bold mb-2">Payment History</h5>

          <table className="table table-sm custom-table table-bordered table-hover">
            <thead className="table-info">
              <tr>
                <th>Name </th>
                <th>Payment Type</th>
                <th>Raise Date </th>
                <th>Paid Date</th>
                <th>Dew Date</th>
                <th>Status</th>
                <th>Raised By</th>
                <th>Amount</th>
                <th>Transaction ID</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ACC001</td>
                <td>Finance</td>
                <td>26-Jul-2026</td>
                <td>01-Jul-2026</td>
                <td>26-Jul-2026</td>
                <td>Admin</td>
                <td>26-Jul-2026</td>
                <td>Admin</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-underline fst-italic"
                  >
                    Hyperlink to open popup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <small className="text-muted">
                Showing <strong>1-10</strong> of <strong>125</strong> records
              </small>
            </div>

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

export default PaymentHistroy;
