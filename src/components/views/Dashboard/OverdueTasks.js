import React from "react";

const OverdueTasks = () => {
  return (
    <div class="col-md-5">
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">
            Overdue Tasks{" "}
            <span>
              <b>08</b>{" "}
            </span>
          </h3>
          <div className="card-tools">{/* progress */}</div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table m-0">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                    NEC Technologies
                  </td>

                  <td>Payroll to be Processed</td>
                  <td>
                    <span className="badge  overdue">Overdue</span>
                  </td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                    Oracle
                  </td>
                  <td>Compliance Report</td>
                  <td>
                    <span className="badge  overdue">Overdue</span>
                  </td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                    Advanced Millennium…
                  </td>
                  <td>Payroll Deliverable</td>
                  <td>
                    <span className="badge due">Due</span>
                  </td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                    Advanced Millennium…
                  </td>
                  <td>Payroll Deliverable</td>
                  <td>
                    <span className="badge due">Due</span>
                  </td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.table-responsive */}
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
};

export default OverdueTasks;
