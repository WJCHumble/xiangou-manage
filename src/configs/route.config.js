import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PrimaryLayout from '../pages/layout'

export default () => (
	<BrowserRouter>
		<Route path="/" component={ PrimaryLayout }/>
	</BrowserRouter>
	)