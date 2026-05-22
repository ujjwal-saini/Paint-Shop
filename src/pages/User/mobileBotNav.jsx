import React from 'react'
import { Link } from 'react-router-dom'

function MobileBotNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md sm:hidden z-50">
      <div className="flex items-center justify-around py-3">

        <Link to={'/'} className="flex flex-col items-center text-sm">
          <span>🏠</span>
          <span>Home</span>
        </Link>

        <Link to={'shop'} className="flex flex-col items-center text-sm">
          <span>🛍️</span>
          <span>Shop</span>
        </Link>

        <Link to={'whatapp'} className="flex flex-col items-center text-sm">
          <span>💬</span>
          <span>WhatsApp</span>
        </Link>

        <Link to={'profile'} className="flex flex-col items-center text-sm">
          <span>👤</span>
          <span>Profile</span>
        </Link>

      </div>
    </div>
  )
}

export default MobileBotNav