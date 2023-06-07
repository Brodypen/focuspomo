"use client"

import React from "react"
import * as dayjs from "dayjs"

import { Button } from "../ui/button"
import { Progress } from "../ui/progress"

const PomodoroTimer = () => {
  const [time, setTime] = React.useState(0)
  const [isRunning, setIsRunning] = React.useState(false)
  const [active, setActive] = React.useState("Pomodoro")

  const buttonOptions = ["Pomodoro", "Short Break", "Long Break"]

  return (
    <div className="mx-auto mt-5 flex w-6/12 min-w-min max-w-xl flex-col items-center justify-center rounded-xl bg-transparent/20 py-5">
      <div className="flex justify-between">
        {buttonOptions.map((option) => {
          return (
            <Button
              className="md:mx-1"
              key={option}
              variant={active === option ? "default" : "outline"}
              onClick={() => setActive(option)}
            >
              <span className="whitespace-nowrap">{option}</span></Button>
          )
        })}
      </div>
      <div className="my-10">
        <p className="mb-5 text-8xl font-bold">25:00</p>
        <Progress value={9} />
      </div>
      <Button variant={isRunning ? "outline" : "default"} className="rounded-md px-16 py-2 text-2xl hover:animate-pulse">Start</Button>
    </div>
  )
}

export default PomodoroTimer
