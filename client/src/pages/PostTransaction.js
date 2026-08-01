import React, { useState } from "react";
import "./posttransaction.css";
const PostTransaction = () => {
  const initialForm = {
    transactionDate: "",
    transactionType: "",
    fromAccount: "",
    toAccount: "",
    purpose: "",
    transactionAmount: "",
    bill: null,
    receivedPaidTo: "",
    receiptRequired: "No",
    phoneNo: "",
    paymentMethod: "",
    remarks: "",
    transactionStatus: "",
    collectedPaidBy: "",
    transactionId: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleReset = () => {
    setFormData(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Transaction Data:", formData);
  };

  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Post Transaction</h5>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              <div className="col-md-4">
                <label className="form-label">Transaction Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="transactionDate"
                  value={formData.transactionDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Transaction Type</label>
                <select
                  className="form-select"
                  name="transactionType"
                  value={formData.transactionType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Transaction Type</option>
                  <option value="Payment">Payment</option>
                  <option value="Collection">Collection</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>

              {/* From Account */}
              <div className="col-md-4">
                <label className="form-label">From Account</label>
                <select
                  className="form-select"
                  name="fromAccount"
                  value={formData.fromAccount}
                  onChange={handleChange}
                >
                  <option value="">Select From Account</option>
                  <option value="Cash">Cash</option>
                  <option value="Bank">Bank</option>
                  <option value="Petty Cash">Petty Cash</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">To Account</label>
                <select
                  className="form-select"
                  name="toAccount"
                  value={formData.toAccount}
                  onChange={handleChange}
                >
                  <option value="">Select To Account</option>
                  <option value="Cash">Cash</option>
                  <option value="Bank">Bank</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Purpose</label>
                <select
                  className="form-select"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                >
                  <option value="">Select Purpose</option>
                  <option value="Purchase">Purchase</option>
                  <option value="Expense">Expense</option>
                  <option value="Salary">Salary</option>
                  <option value="Collection">Collection</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Transaction Amount</label>
                <input
                  type="number"
                  className="form-control"
                  name="transactionAmount"
                  value={formData.transactionAmount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Bill</label>
                <input
                  type="file"
                  className="form-control"
                  name="bill"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Received From / Paid To</label>
                <input
                  type="text"
                  className="form-control"
                  name="receivedPaidTo"
                  value={formData.receivedPaidTo}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Receipt Required</label>
                <select
                  className="form-select"
                  name="receiptRequired"
                  value={formData.receiptRequired}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone No.</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">
                  Payment / Collection Method
                </label>

                <select
                  className="form-select"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="">Select Method</option>
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Card">Card</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Enter remarks"
                />
              </div>

              {/* Transaction Status - RO */}
              <div className="col-md-4 ">
                <label className="form-label ">Transaction Status</label>
                <input
                  type="text"
                  className="form-control readonly"
                  name="transactionStatus"
                  value={formData.transactionStatus}
                  placeholder="Auto generated"
                  readOnly
                />
              </div>

              {/* Collected / Paid By */}
              <div className="col-md-4">
                <label className="form-label">Collected / Paid By</label>
                <input
                  type="text"
                  className="form-control"
                  name="collectedPaidBy"
                  value={formData.collectedPaidBy}
                  onChange={handleChange}
                  placeholder="Enter employee/person name"
                />
              </div>

              {/* Transaction ID - RO */}
              <div className="col-md-4">
                <label className="form-label">Transaction ID</label>
                <input
                  type="text"
                  className="form-control readonly"
                  name="transactionId"
                  value={formData.transactionId}
                  placeholder="Auto generated"
                  readOnly
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
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostTransaction;
