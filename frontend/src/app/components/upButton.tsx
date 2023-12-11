import React, { useEffect, useState } from 'react'
import UpArrowIcon from './upArrowIcon'

export default function UpButton() {
  const [visible, setVisible] = useState(false)

  function scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 720 && setVisible(true)
      window.scrollY < 720 && setVisible(false)
    }
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      data-visible={visible}
      className="border-newOrange-600 fixed bottom-2 right-2 z-10 flex h-12 w-12 scale-0 items-center justify-center rounded-full border transition-transform duration-150 data-[visible=true]:scale-100"
    >
      <button className="rounded-full font-semibold" onClick={scrolltoTop}>
        <UpArrowIcon />
      </button>
    </div>
  )
}
