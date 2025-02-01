"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Lottie from "react-lottie-player"
import lottieAnimation from "../public/animation.json"

export default function NotFound() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white ">
      <div className="w-full max-w-md">
        {isClient && <Lottie loop animationData={lottieAnimation} play style={{ width: "100%", height: "100%" }} />}
      </div>
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Oops! Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
      >
        Go Back Home
      </Link>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}

