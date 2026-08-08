import React from "react";

const NewVendor = () => {
  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>New Vendor</h5>
        </div>

        <div className="card-body p-4">
          <form>
            <div className="row g-2">
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Vendor Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Email id</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Upi id</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Gst no</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Purpose</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">status</label>
                <select className="form-select" name="transactionType" required>
                  <option value="">Select status</option>
                  <option value="Payment">Pending</option>
                  <option value="Collection">Compleated</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Payment From</label>
                <select className="form-select" name="transactionType" required>
                  <option value="">Select status</option>
                  <option value="Payment">Pending</option>
                  <option value="Collection">Compleated</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Contact Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Branch Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Ifsc Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Vendor ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorName"
                  required
                />
              </div>
              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btnpt-btn-reset px-4">
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

export default NewVendor;
