import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
import { IActivity } from "./models/Activity";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("https://localhost:5001/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  },[]);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export default App;
