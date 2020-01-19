import React from "react";

const Projects = () => {
  return (
    <div class="col-md-3">
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title">
            {" "}
            Projects{" "}
            <span>
              <b>09</b>
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
                  <th>Order ID</th>
                  <th>Item</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CKM</td>
                  <td>Call of Duty IV</td>
                  <td>
                    <span className="badge badge-success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <td>Other 1</td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Other 2</td>
                  <td>iPhone 6 Plus</td>
                  <td>
                    <span className="badge badge-danger">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td> Other 3</td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="badge badge-info">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td> Other 3</td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="badge badge-info">Processing</span>
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

export default Projects;
