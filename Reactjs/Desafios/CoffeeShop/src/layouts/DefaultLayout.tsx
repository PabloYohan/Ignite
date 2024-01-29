import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <h1>Logo</h1>
      <Outlet />
    </>
  )
}
