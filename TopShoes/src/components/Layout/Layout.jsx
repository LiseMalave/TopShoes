import React from 'react'
import { LayoutContainer } from './Layout'

function Layout({children}) {
  return (
    <div>
    <LayoutContainer>
      {children}
    </LayoutContainer>
    </div>
  )
}

export default Layout