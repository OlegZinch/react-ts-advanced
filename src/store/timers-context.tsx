import { createContext, useContext, useReducer, type ReactNode } from 'react'

type Timer = {
  name: string
  duration: number
}

type TimersState = {
  timers: Timer[]
  isRunning: boolean
}

const initialState: TimersState = {
  timers: [],
  isRunning: true,
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext() {
  const timersCtx = useContext(TimersContext)

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!')
  }

  return timersCtx
}

type TimersContextProviderProps = {
  children: ReactNode
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  useReducer(reducer, initialState)

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  }

  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
