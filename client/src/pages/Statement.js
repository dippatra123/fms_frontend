import React, { useState } from "react";

const Statement = () => {
  const [fromdata, setFromData] = useState({
    accountNo: "",
    financialYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const { accountNo, financialYear } = fromdata;

    if (!accountNo) {
      alert("Please select Account No.");
      return;
    }

    if (!financialYear) {
      alert("Please select Financial Year.");
      return;
    }

    console.log(fromdata);
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Statement</h5>
        </div>

        <div className="card-body p-4">
          <div className="search-card">
            <div className="search-item">
              <label className="form-label fw-semibold">Account No.</label>

              <select
                className="form-select"
                value={fromdata.accountNo}
                name="accountNo"
                onChange={handleChange}
              >
                <option value="">Select Account</option>
                <option value="ACC001">ACC001</option>
                <option value="ACC002">ACC002</option>
                <option value="ACC003">ACC003</option>
              </select>
            </div>

            <div className="search-item">
              <label className="form-label fw-semibold">Financial Year</label>

              <select
                className="form-select"
                value={fromdata.financialYear}
                name="financialYear"
                onChange={handleChange}
              >
                <option value="">Select Financial Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>

            <div className="search-btn">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Old Uploads */}
        <div className="table-responsive mt-2 p-3 card-body">
          <h5 className="fw-bold mb-2">Old Uploads</h5>

          <table className="table table-sm table-bordered table-hover">
            <thead className="table-info">
              <tr>
                <th>Account No</th>
                <th>Owner</th>
                <th>Uploaded Date</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Uploaded By</th>
                <th>Overall TXN Status</th>
                <th>File Name</th>
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
                <td>Completed</td>
                <td>
                  <button className="btn btn-sm btn-primary">Download</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex justify-content-end mt-1">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button type="button" className="page-link border-0 bg-white">
                    Previous
                  </button>
                </li>

                <li className="page-item">
                  <button type="button" className="page-link border-0 bg-white">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Statement Upload */}
        <div className="table-responsive mt-2 p-3 card-body">
          <h5 className="fw-bold mb-2">Statement Upload</h5>

          <table className="table table-sm table-bordered table-hover">
            <thead className="table-info">
              <tr>
                <th>Account No</th>
                <th>Last Statement Uploaded Date</th>
                <th>Statement Uploaded To Date</th>
                <th>Statement</th>
                <th>Template</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ACC001</td>
                <td>26-Jul-2026</td>
                <td>31-Jul-2026</td>
                <td>
                  <button className="btn btn-success btn-sm">Download</button>
                </td>
                <td>
                  <button className="btn btn-secondary btn-sm">Template</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statement;
