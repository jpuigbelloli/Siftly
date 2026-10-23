'use client'

import { useEffect, useState } from 'react'

export function Greeting() {
  const [greeting, setGreeting] = useState('Good day')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 17) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return <>{greeting}</>
}

export function FormattedDate() {
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    )
  }, [])

  return <>{date}</>
}