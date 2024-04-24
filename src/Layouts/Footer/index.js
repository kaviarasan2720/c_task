import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
       © 2022
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.42andmore.com" target="_blank" rel="">
        42andmore
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
