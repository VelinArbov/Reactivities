import { observable, action } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { Activity } from "../layout/models/Activity";

class ActivityStore {
    @observable activities : Activity[] = [];
    @observable loadingInitial = false;

    @action loadActivities = () => {
        this.loadingInitial = true;
        agent.Activities.list()
        .then((activities) => {
        activities.forEach((activity: Activity) => {
          activity.date = activity.date.split(".")[0];
          this.activities.push(activity);
        });
      })
      .finally(() => this.loadingInitial = false);
    }

}

export default createContext(new ActivityStore());