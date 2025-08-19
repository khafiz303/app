import {Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'

export default function App() {
  return(
   <Routes>
    {/* <Route path="login" element={}/>
    <Route path="dachboard" element={}/>
    <Route path="profile" element={}/>
    <Route path="create" element={}/> */}
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}


