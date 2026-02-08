import { useEffect, useRef, useState } from 'react'
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx'
import Container from './UI/Container.tsx'

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const { isRunning } = useTimersContext()

  useEffect(() => {
    let timer: number

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime
          }
          return prevTime - 50
        })
      }, 50)

      interval.current = timer
    } else if (interval.current) {
      clearInterval(interval.current)
      interval.current = null
    }

    return () => clearInterval(timer)
  }, [isRunning])

  useEffect(() => {
    if (remainingTime <= 0 && interval.current !== null) {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [remainingTime])

  const formattedremainingTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress value={remainingTime} max={duration * 1000} />
      </p>
      <p>{formattedremainingTime}</p>
    </Container>
  )
}
