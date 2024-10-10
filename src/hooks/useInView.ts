import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.1) {
  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isIntersecting]
}

export default useInView
