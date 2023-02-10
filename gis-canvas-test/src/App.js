import React, { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef(null)
  const [data, setData] = useState([
    0,
    50,
    100,
    150,
    200,
    250,
    300,
    350,
    400,
    450,
  ])

  const randomDots = Math.ceil(1 + Math.random() * (10 - 1))

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.moveTo(0, data[0])
    for (let i = 1; i <= randomDots; i++) {
      ctx.lineTo(i * (canvas.width / (data.length - 1)), data[i])
    }
    ctx.stroke()
  }, [data, randomDots])

  const handleClick = () => {
    const newData = [...data]
    for (let i = 0; i < newData.length; i++) {
      newData[i] = Math.random() * 450
    }
    setData(newData)
  }

  return (
    <>
      <h1 className="text">created by Moskvin Tikhon</h1>
      <div className="container">
        <canvas
          ref={canvasRef}
          width={450}
          height={450}
          onClick={handleClick}
        />
      </div>
    </>
  )
}

export default App
