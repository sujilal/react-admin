import React from "react";
import { Button } from "antd";

const Queries = () => {
  return (
    <div class="col-md-9">
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">
            Overdue Tasks{" "}
            <span>
              <b>08</b>{" "}
            </span>
          </h3>
          <div className="card-tools">
            <Button type="primary">Employee</Button>
            <Button>Employer</Button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table m-0">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Employer Queries</th>
                  <th>TAT 0 - 8</th>
                  <th>TAT 8 - 16</th>
                  <th>TAT 16 - 24</th>
                  <th>TAT 24+</th>
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
                  <td>01</td>
                  <td>02</td>
                  <td>00</td>
                  <td>00</td>
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
                  <td>01</td>
                  <td>02</td>
                  <td>00</td>
                  <td>00</td>
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
                  <td>01</td>
                  <td>02</td>
                  <td>00</td>
                  <td>00</td>
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
                  <td>01</td>
                  <td>02</td>
                  <td>00</td>
                  <td>00</td>
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

export default Queries;
