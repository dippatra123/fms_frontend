import React from "react";

const MyTransaction = () => {
  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>My Tranaction </h5>
        </div>

        <div className="card-body p-4">
          <form>
            <div className="row g-2">
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Account Number</label>
                <select className="form-select">
                  <option value="">Select Account Number</option>
                  <option value="User1">Acc 001</option>
                  <option value="User2">Acc 002</option>
                  <option value="User3">Acc 003</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Tranaction Status</label>
                <select className="form-select">
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Posting From Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Posting To Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn  pt-btn-reset px-4">
                    Reset
                  </button>

                  <button type="submit" className="btn pt-btn-save px-4">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="table-responsive mt-2 p-3 card-body ">
          <h6 className="fw-semibold mb-2">My Posted Tranction</h6>

          <table className="table table-sm table-bordered table-hover custom-table ">
            <thead className="table-info">
              <tr>
                <th>Transaction ID</th>
                <th>Ref Transaction ID</th>
                <th>Posting Date</th>
                <th>Amount</th>
                <th>From Account</th>
                <th>To Account</th>
                <th>Purpose</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-underline fst-italic"
                  >
                    Hyperlink to open popup
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-underline fst-italic"
                  >
                    Hyperlink to open popup
                  </button>
                </td>
                <td>26-Jul-2026</td>
                <td>01-Jul-2026</td>
                <td>26-Jul-2026</td>
                <td>Admin</td>
                <td>26-Jul-2026</td>
                <td>Admin</td>
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

export default MyTransaction;
