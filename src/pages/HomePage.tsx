import React, { useEffect } from 'react'
import data from '../models/data'

const HomePage = () => {
	useEffect(() => {
		data.start()
		window.addEventListener(data.eventName, e => {
			const event = e as CustomEvent
			console.log(event)
		})

		setTimeout(() => {
			data.stop()
		}, 10001)
	}, [])

	return <div>Hello world!</div>
}

export default HomePage
