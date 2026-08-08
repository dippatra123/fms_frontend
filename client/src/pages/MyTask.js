import React from "react";

const MyTask = () => {
  return (
    <div className="container-fluid ">
      <div className="card shadow border-0">
        <div className="card-header">
          <h5>My Task</h5>
        </div>

        <div className="card-body p-4">
          <form>
            <div className="row g-2">
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">WI ID</label>
                <input type="text" className="form-control readonly" readOnly />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Raised Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Assigned By</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Task Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Assigned To</label>
                <select className="form-select">
                  <option value="">Select Assigned User</option>
                  <option value="User1">User1</option>
                  <option value="User2">User2</option>
                  <option value="User3">User3</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-xl-4">
                <label className="form-label">Comment</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn  pt-btn-reset px-4">
                    Reset
                  </button>

                  <button type="submit" className="btn pt-btn-save px-4">
                    Save
                  </button>
                  <button type="submit" className="btn pt-btn-save px-4">
                    open transaction
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="table-responsive mt-2 p-3 card-body">
          <h6 className="fw-semibold mb-2">My work Item</h6>

          <table className="table table-sm table-bordered table-hover custom-table ">
            <thead className="table-info">
              <tr>
                <th>WI ID</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Created On</th>
                <th>Pending Day</th>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive mt-2 p-3 card-body">
          <h6 className="fw-semibold mb-2">WI History</h6>

          <table className="table table-sm table-bordered table-hover custom-table ">
            <thead className="table-info">
              <tr>
                <th>History ID</th>
                <th>Created On </th>
                <th>Created By</th>
                <th>Comment</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ACC001</td>
                <td>Finance</td>
                <td>26-Jul-2026</td>
                <td>01-Jul-2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
