import React from "react";

import NotificationCard from "./Notification/NotificationCard";
import Alert from "./Notification/notificationComponent/Alert";


const Notification = () => {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* Alerts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Alert</h2>
        <Alert variant="primary" onClose={() => {}}>
          A simple primary alert with an example link.
        </Alert>
        <Alert variant="secondary" onClose={() => {}}>
          A simple secondary alert with an example link.
        </Alert>
        <Alert variant="success" onClose={() => {}}>
          A simple success alert with an example link.
        </Alert>
        <Alert variant="danger" onClose={() => {}}>
          A simple danger alert with an example link.
        </Alert>
        <Alert variant="warning" onClose={() => {}}>
          A simple warning alert with an example link.
        </Alert>
        <Alert variant="light" onClose={() => {}}>
          A simple light alert with an example link.
        </Alert>
        <Alert variant="dark" onClose={() => {}}>
          A simple dark alert with an example link.
        </Alert>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Notification</h2>
        <p className="text-sm text-gray-500 mb-6">
          Notifications with usage text from Bootstrap. Read more details here.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <NotificationCard color="success" label="Success" />
          <NotificationCard color="warning" label="Warning" />
          <NotificationCard color="danger" label="Danger" />
          <NotificationCard color="secondary" label="Secondary" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
