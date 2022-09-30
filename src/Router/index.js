import React from "react"
import { Routes, Route } from 'react-router-dom'

import Home from "../Scenes/Home/index.js"
import Dashboard from "../Scenes/Dashboard/index.js"
import Error from '../Scenes/Error/index.js'


export default function AppRouter() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard/:id' element={<Dashboard />} />
            <Route path='/*' element={<Error />} />
        </Routes>
        </>
    )
}

