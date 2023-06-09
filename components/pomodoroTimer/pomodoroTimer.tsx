"use client"

import React from "react"
import { duration } from "@/utils/pomodoroTimerUtils"
import * as dayjs from "dayjs"

import { Button } from "../ui/button"
import { Progress } from "../ui/progress"

interface Timer {
  [index: string]: number
}

const timer: Timer = {
  Pomodoro: 25,
  ShortBreak: 5,
  LongBreak: 15,
}

const PomodoroTimer = () => {
  const [time, setTime] = React.useState(25 * 60)
  const [isRunning, setIsRunning] = React.useState(false)
  const [active, setActive] = React.useState("Pomodoro")

  const buttonOptions = ["Pomodoro", "Short Break", "Long Break"]

  const switchMode = (mode: string) => {
    setActive(mode)
    setTime(timer[mode.replace(" ", "")] * 60)
  }
  const updateClock = () => {
    console.log("updateClock")
    setTime((prev) => prev - 1)
  }

  return (
    <div className="mx-auto mt-5 flex w-6/12 min-w-min max-w-xl flex-col items-center justify-center rounded-xl bg-transparent/20 py-5">
      <div className="flex justify-between">
        {buttonOptions.map((option) => {
          return (
            <Button
              className="md:mx-1"
              key={option}
              variant={active === option ? "default" : "outline"}
              onClick={() => switchMode(option)}
            >
              <span className="whitespace-nowrap">{option}</span>
            </Button>
          )
        })}
      </div>
      <div className="my-10">
        <p className="mb-5 font-mono text-8xl font-bold">{duration(time)}</p>
        <Progress value={9} />
      </div>
      <Button
        variant={isRunning ? "outline" : "default"}
        className="rounded-md px-16 py-2 text-2xl hover:animate-pulse"
        onClick={() => updateClock()}
      >
        Start
      </Button>
    </div>
  )
}

export default PomodoroTimer
