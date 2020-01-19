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
                  <th>Projects</th>
                  <th>Start Date & Date</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CKM</td>
                  <td>Oct 5 to Oct 10</td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td>Other 1</td>
                  <td>Oct 5 to Oct 10</td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td>Other 2</td>
                  <td>Oct 5 to Oct 10</td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td> Other 3</td>
                  <td>Oct 5 to Oct 10</td>
                  <td>
                    <span className="badge day">-2</span>
                  </td>
                </tr>
                <tr>
                  <td> Other 3</td>
                  <td>Oct 5 to Oct 10</td>
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

export default Projects;
