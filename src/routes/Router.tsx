import { Route, Routes } from 'react-router-dom'
import { Employees } from '../pages/Employees'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Employees />} />
      </Route>
    </Routes>
  )
}
