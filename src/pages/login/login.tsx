/** @format */

import { useIonRouter } from '@ionic/react'
import WelcomeScreen from '../../components/screens/welcome-screen'

const Login = () => {
	const ionRouter = useIonRouter()
	return (
		<>
			<WelcomeScreen onSubmit={() => ionRouter.push('/login/details')} />
		</>
	)
}

export default Login
