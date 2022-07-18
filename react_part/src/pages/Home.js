import { useState } from "react";
import React, { useEffect } from "react";
import { WorkoutDetails } from "../components/WorkoutDetails";

export const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  //creating an empty array as the second argument here, it will only fire the useEffect hook once, at first when rendered
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};
