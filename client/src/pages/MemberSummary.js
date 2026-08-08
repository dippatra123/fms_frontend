import React, { useState } from "react";

const MemberSummary = () => {
  const initialForm = {
    memberId: "",
    memberName: "",
    memberEmail: "",
    memberPhone: "",
    memberResponsibility: "",
    contributionPaid: "",
    contributionDue: "",
    paidToDate: "",
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

    console.log("Member Summary:", formData);

    // Call your API here
    // fetch("/api/member-summary", {...})
  };

  return (
    <div className="container-fluid">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>Members Summary</h5>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-2 ">
              {/* Member ID */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberId"
                  value={formData.memberId}
                  onChange={handleChange}
                  placeholder="Enter Member ID"
                />
              </div>

              {/* Member Name */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberName"
                  value={formData.memberName}
                  onChange={handleChange}
                  placeholder="Enter Member Name"
                />
              </div>

              {/* Email */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="memberEmail"
                  value={formData.memberEmail}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
              </div>

              {/* Phone */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberPhone"
                  value={formData.memberPhone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                />
              </div>

              {/* Responsibility */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Member Responsibility</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberResponsibility"
                  value={formData.memberResponsibility}
                  onChange={handleChange}
                  placeholder="Enter Responsibility"
                />
              </div>

              {/* Contribution Paid */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Contribution Paid</label>
                <input
                  type="number"
                  className="form-control"
                  name="contributionPaid"
                  value={formData.contributionPaid}
                  onChange={handleChange}
                  placeholder="Enter Amount"
                />
              </div>

              {/* Contribution Due */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Contribution Due</label>
                <input
                  type="number"
                  className="form-control"
                  name="contributionDue"
                  value={formData.contributionDue}
                  onChange={handleChange}
                  placeholder="Enter Due Amount"
                />
              </div>

              {/* Paid To Date */}
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Paid To Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="paidToDate"
                  value={formData.paidToDate}
                  onChange={handleChange}
                />
              </div>

              {/* Buttons */}
              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn pt-btn-recol-12"
                    onClick={handleReset}
                  >
                    Reset
                  </button>

                  <button type="submit" className="btn pt-btn-save px-4">
                    View WI
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="table-responsive p-3">
          <h5 className="fw-bold mb-3">Linked Work Items</h5>

          <table className="table table-bordered table-hover table-sm">
            <thead className="table-info">
              <tr>
                <th>WI ID</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Assigned To</th>
                <th>Created On</th>
                <th>Pending Days</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>WI001</td>
                <td>Finance Approval</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td>Admin</td>
                <td>07-Aug-2026</td>
                <td>5</td>
              </tr>

              <tr>
                <td>WI002</td>
                <td>Document Verification</td>
                <td>
                  <span className="badge bg-success">Completed</span>
                </td>
                <td>Manager</td>
                <td>05-Aug-2026</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <small className="text-muted">
              Showing <strong>1-2</strong> of <strong>25</strong> records
            </small>

            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item disabled">
                  <button className="page-link">Previous</button>
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
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSummary;
