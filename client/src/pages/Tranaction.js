import React, { useState } from "react";
import "./tranaction.css";
const Tranaction = () => {
  const initialState = {
    accountNo: "",
    status: "",
    postedBy: "",
    fromDate: "",
    toAccount: "",
    transactionType: "",
    transactionId: "",
    toDate: "",
  };

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Transaction Data:", formData);
  };

  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Transaction</h5>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Account No</label>
                <input
                  className="form-control"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Matched</option>
                  <option>Un-Matched</option>
                </select>
              </div>

              {/* From Account */}
              <div className="col-md-4">
                <label className="form-label">Posted By</label>
                <select
                  className="form-select"
                  name="postedBy"
                  value={formData.postedBy}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Transaction From Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">To Account</label>
                <select
                  className="form-select"
                  name="toAccount"
                  value={formData.toAccount}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Transaction Type</label>
                <select
                  className="form-select"
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Transaction ID</label>
                <input
                  type="number"
                  className="form-control"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Transaction To Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn  pt-btn-reset px-4"
                    onClick={handleReset}
                  >
                    Reset
                  </button>

                  <button type="submit" className="btn pt-btn-save px-4">
                    Export
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
          <table className="table table-sm table-bordered table-hover">
            <thead className="table-info">
              <tr>
                <th>Transaction ID</th>
                <th>Ref Transaction ID</th>
                <th>From Account</th>
                <th>To Account</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th>Status</th>
                <th>Type</th>
                <th>Posted By</th>
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
        </div>
        <div className="table-responsive mt-2 p-3 card-body">
          <h5 className="fw-bold mb-2">Suggested Unmatched Transactions</h5>

          <table className="table table-sm table-bordered table-hover">
            <thead className="table-info">
              <tr>
                <th>Reference Transaction ID</th>
                <th>Transaction ID</th>
                <th>From Account</th>
                <th>To Account</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th>Type</th>
                <th>Posted BY</th>
                <th>Suggestion</th>
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
        </div>
      </div>
    </div>
  );
};

export default Tranaction;
