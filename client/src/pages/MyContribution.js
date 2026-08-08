import React from "react";

const MyContribution = () => {
  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>My Contribution </h5>
        </div>

        <div className="card-body p-4">
          <form>
            <div className="row g-2 ">
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member ID</label>
                <input type="text" className="form-control" readOnly />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Contribution Type</label>
                <select className="form-select">
                  <option value="">Select Contribution Type</option>
                  <option value="Type1">Type 1</option>
                  <option value="Type2">Type 2</option>
                  <option value="Type3">Type 3</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Dew From Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Dew To Date</label>
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
        <div className="table-responsive mt-2 p-3 card-body">
          <h6 className="fw-semibold mb-2">Contribution History</h6>

          <table className="table table-sm table-bordered table-hover custom-table ">
            <thead className="table-info">
              <tr>
                <th>Received Account No</th>
                <th>Contribution Type</th>
                <th>Raise Date</th>
                <th>Received Date</th>
                <th>Due Date</th>
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

export default MyContribution;
