import { Routes, Route } from 'react-router-dom'
import Loading from '@/components/Loading'
import { lazy, Suspense } from 'react'
import Layout from '@/layout'
import Login from '@/pages/login'

const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}
const Router = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={lazyLoad(lazy(async () => import('@/pages/home/index')))}></Route>
        <Route path='/*' element={lazyLoad(lazy(async () => import('@/pages/admin/index')))}></Route>
      </Route>
    </Routes>
  )
}

export default Router