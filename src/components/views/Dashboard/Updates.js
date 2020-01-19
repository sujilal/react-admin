import React from "react";
import { Tabs, Timeline, Button } from "antd";
const { TabPane } = Tabs;

const Updates = () => {
  return (
    <div class="col-md-3">
      <div className="card">
        <div className="card-header border-transparent">
          <h3 className="card-title"> Updates </h3>
          <div className="card-tools">
            <Button type="primary">Messages</Button>
            <Button>Knowledge</Button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Unread" key="1">
              <Timeline>
                <Timeline.Item>
                  Production server down{" "}
                  <span class="timeine-seen"> just now </span>{" "}
                </Timeline.Item>
                <Timeline.Item>
                  Production server down{" "}
                  <span class="timeine-seen"> just now </span>{" "}
                </Timeline.Item>
                <Timeline.Item>
                  Server Down <span class="timeine-seen"> 14 mins </span>{" "}
                </Timeline.Item>
                <Timeline.Item>
                  Break Time <span class="timeine-seen">20 mins </span>{" "}
                </Timeline.Item>
              </Timeline>
            </TabPane>
            <TabPane tab="All" key="2">
              <Timeline>
                <Timeline.Item>
                  Production server down{" "}
                  <span class="timeine-seen"> just now </span>{" "}
                </Timeline.Item>
                <Timeline.Item>
                  Production server down{" "}
                  <span class="timeine-seen"> just now </span>{" "}
                </Timeline.Item>
              </Timeline>
            </TabPane>
          </Tabs>
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
};

export default Updates;
