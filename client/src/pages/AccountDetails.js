import React, { useState } from "react";
import "./accountDetails.css";

const AccountDetails = () => {
  const [accountNo, setAccountNo] = useState("");
  const [businessDate, setBusinessDate] = useState("");

  const [accountDetails, setAccountDetails] = useState({
    accountNo: "",
    businessDate: "",
    accountType: "",
    owner: "",
    status: "",
    purpose: "",
    financialYear: "",
    currentBalance: "",
    totalIncome: "",
    totalExpense: "",
    financialYearIncome: "",
    financialYearExpense: "",
  });

  const handleSearch = () => {
    if (!accountNo) {
      alert("Please select Account No.");
      return;
    }

    setAccountDetails({
      accountNo,
      businessDate,
      accountType: "Current Account",
      owner: "Finance Department",
      status: "Active",
      purpose: "Business Expenses",
      financialYear: "2026-2027",
      currentBalance: "125000.00",
      totalIncome: "450000.00",
      totalExpense: "325000.00",
      financialYearIncome: "300000.00",
      financialYearExpense: "210000.00",
    });
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5 className="fw-bold mb-0">Account Details</h5>
        </div>

        <div className="card-body">
          <div className="search-card">
            <div className="search-item">
              <label className="form-label fw-semibold">Account No.</label>

              <select
                className="form-select"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              >
                <option value="">Select Account</option>
                <option value="ACC001">ACC001</option>
                <option value="ACC002">ACC002</option>
                <option value="ACC003">ACC003</option>
              </select>
            </div>

            <div className="search-item">
              <label className="form-label fw-semibold">Business Date</label>

              <input
                type="date"
                className="form-control"
                value={businessDate}
                onChange={(e) => setBusinessDate(e.target.value)}
              />
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

        <div className="container mt-4">
          {/* Details */}
          <div className="card shadow-sm mb-3 custom-card">
            <div className="custom-card-header">Details</div>

            <div className="table-responsive">
              <table className="table table-bordered table-sm mb-0 custom-table">
                <tbody style={{ fontSize: "14px" }}>
                  <tr>
                    <td>Account No</td>
                    <td>{accountDetails.accountNo}</td>

                    <td>Business Date</td>
                    <td>{accountDetails.businessDate}</td>
                  </tr>

                  <tr>
                    <td>Account Type</td>
                    <td>{accountDetails.accountType}</td>

                    <td>Owner</td>
                    <td>{accountDetails.owner}</td>
                  </tr>

                  <tr>
                    <td>Status</td>
                    <td>
                      <span className="badge bg-success">
                        {accountDetails.status}
                      </span>
                    </td>

                    <td>Purpose</td>
                    <td>{accountDetails.purpose}</td>
                  </tr>

                  <tr>
                    <td>Financial Year</td>
                    <td>{accountDetails.financialYear}</td>

                    <td>Current Balance</td>
                    <td>₹{accountDetails.currentBalance}</td>
                  </tr>

                  <tr>
                    <td>Total Income</td>
                    <td>₹{accountDetails.totalIncome}</td>

                    <td>Total Expense</td>
                    <td>₹{accountDetails.totalExpense}</td>
                  </tr>

                  <tr>
                    <td>Financial Year Income</td>
                    <td>₹{accountDetails.financialYearIncome}</td>

                    <td>Financial Year Expense</td>
                    <td>₹{accountDetails.financialYearExpense}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Attributes & Events */}
          <div className="card shadow-sm mb-4 custom-card">
            <div className="custom-card-header">Attributes & Events</div>

            <div className="table-responsive">
              <table className="table table-bordered table-sm mb-0 custom-table">
                <thead>
                  <tr>
                    <th>Attribute Name</th>
                    <th>Value</th>
                    <th>Event Name</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody style={{ fontSize: "14px" }}>
                  <tr>
                    <td>Priority</td>
                    <td>High</td>
                    <td>Created</td>
                    <td>26-Jul-2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Linked Work Items */}
          <div className="card shadow-sm custom-card">
            <div className="custom-card-header">Linked Work Items</div>

            <div className="table-responsive">
              <table className="table table-bordered table-sm mb-0 custom-table">
                <thead>
                  <tr>
                    <th>WI ID</th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th>Created On</th>
                    <th>Pending Day</th>
                  </tr>
                </thead>

                <tbody style={{ fontSize: "14px" }}>
                  <tr>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link text-decoration-none fw-semibold p-0"
                      >
                        WI-0001
                      </button>
                    </td>

                    <td>Sample Task</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>

                    <td>John Doe</td>

                    <td>26-Jul-2026</td>

                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center p-3 border-top">
          <small className="text-muted">
            Hyperlink WI ID to open Work Item Details
          </small>

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-secondary btn-sm">
              Previous
            </button>

            <button type="button" className="btn btn-primary btn-sm px-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
