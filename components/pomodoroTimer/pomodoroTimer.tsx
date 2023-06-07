'use client';

import React from 'react';
import * as dayjs from 'dayjs';



import { Button } from '../ui/button';
import { Progress } from "../ui/progress";


const PomodoroTimer = () => {
  const [time, setTime] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const [active, setActive] = React.useState(0)



  return (
    <div className="m-2">
      <div className="flex justify-between">
        <Button variant={active === 0 ? 'default' : 'outline'} onClick={() => setActive(0)}>
          Pomodoro
        </Button>
        <Button variant={active === 1 ? 'default' : 'outline'} onClick={() => setActive(1)}>
          Short Break
        </Button>
        <Button variant={active === 2 ? 'default' : 'outline'} onClick={() => setActive(2)}>
          Long Break
        </Button>
      </div>
      <p className="text-2xl">
        {time}
      </p>
      <Progress value={99}/>
    </div>
  )
}

export default PomodoroTimer