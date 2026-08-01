import React, { useState } from "react";
import "./NewEmployee.css";
const EmployeeDetails = () => {
  const initialForm = {
    name: "",
    surname: "",
    email: "",
    address: "",
    phoneNo: "",
    responsibilities: "",
    salary: "",
    joiningDate: "",
    salaryEscalation: "",
    paymentStartDate: "",
    pan: "",
    aadharNo: "",
    bankName: "",
    branchName: "",
    accountNo: "",
    ifscCode: "",
    paymentFrom: "",
    highestQualification: "",
    employeeId: "EMP0001",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Employee Details</h5>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-2">
              {/* Row 1 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Phone No</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Joining Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </div>

              {/* Row 3 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Salary Escalation</label>
                <input
                  type="number"
                  className="form-control"
                  name="salaryEscalation"
                  value={formData.salaryEscalation}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Payment Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="paymentStartDate"
                  value={formData.paymentStartDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">PAN</label>
                <input
                  type="text"
                  className="form-control"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Aadhar No</label>
                <input
                  type="text"
                  className="form-control"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Bank Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Branch Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="branchName"
                  value={formData.branchName}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Account No</label>
                <input
                  type="text"
                  className="form-control"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">IFSC Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Payment From</label>
                <select
                  className="form-select"
                  name="paymentFrom"
                  value={formData.paymentFrom}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Cash</option>
                  <option>Bank</option>
                  <option>UPI</option>
                </select>
              </div>

              {/* Row 6 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Highest Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Employee ID</label>
                <input
                  type="text"
                  className="form-control readonly"
                  value={formData.employeeId}
                  readOnly
                />
              </div>

              {/* Row 7 */}
              <div className="col-md-4 mb-0">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-0">
                <label className="form-label">Responsibilities</label>
                <textarea
                  className="form-control"
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="col-12 mt-0">
                <hr />

                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn pt-btn-reset px-4"
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

export default EmployeeDetails;
