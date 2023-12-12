/** @format */

import React from 'react'
import WelcomeScreen from './../../../components/screens/welcome-screen'
import { useIonRouter } from '@ionic/react'

const ArtistWelcome = () => {
	const ionRouter = useIonRouter()
	return (
		<>
			<WelcomeScreen onSubmit={() => ionRouter.push('/artist-login', 'root', 'replace')} />
		</>
	)
}

export default ArtistWelcome
