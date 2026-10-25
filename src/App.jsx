import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/ielts" element={<CoursePage course="ielts" />} />
        <Route path="/courses/oet" element={<CoursePage course="oet" />} />
        <Route path="/courses/pte" element={<CoursePage course="pte" />} />
        <Route path="/courses/spoken-english" element={<CoursePage course="spoken-english" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
