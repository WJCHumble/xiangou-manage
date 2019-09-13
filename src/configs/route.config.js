import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PrimaryLayout from '../pages/primarylayout'

export default () => (
	<BrowserRouter>
		<Route path="/" component={ PrimaryLayout }/>
	</BrowserRouter>
	)