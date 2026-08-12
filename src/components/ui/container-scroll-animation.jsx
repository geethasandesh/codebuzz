import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export function ContainerScroll({ titleComponent = null, caption = null, children, className = '' }) {
  const reduce = useReducedMotion()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleRange = isMobile ? [0.86, 1] : [1.08, 1]
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [32, 0])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : scaleRange)
  const translate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80])

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[36rem] items-start justify-center p-2 pt-0 sm:h-[42rem] md:h-[48rem] md:p-8 md:pt-0 ${className}`}
    >
      <div
        className="relative w-full py-0 md:py-2"
        style={{ perspective: '1200px' }}
      >
        {titleComponent ? (
          <ScrollHeader translate={translate}>{titleComponent}</ScrollHeader>
        ) : null}

        <motion.div
          style={
            reduce
              ? {
                  boxShadow:
                    '0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.08)',
                }
              : {
                  rotateX: rotate,
                  scale,
                  transformOrigin: 'center bottom',
                  transformPerspective: 1200,
                  boxShadow:
                    '0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.08)',
                }
          }
          className="mx-auto -mt-2 h-[26rem] w-full max-w-5xl rounded-[1.5rem] border-[3px] border-[#111] bg-[#1a1a1a] p-[10px] will-change-transform sm:-mt-3 sm:h-[30rem] sm:rounded-[1.75rem] md:h-[36rem] md:rounded-[1.85rem] md:border-4 md:p-3"
        >
          <div className="h-full w-full overflow-hidden rounded-[1.1rem] bg-white sm:rounded-[1.25rem]">
            {children}
          </div>
        </motion.div>

        {caption ? (
          <div className="relative z-10 mt-5 text-center sm:mt-6">{caption}</div>
        ) : null}
      </div>
    </div>
  )
}

function ScrollHeader({ translate, children }) {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
      {children}
    </motion.div>
  )
}
