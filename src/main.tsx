/** @format */

import React from 'react'
import { createRoot } from 'react-dom/client'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
/* Theme variables */
import './theme/variables.css'
/* my styles */
import './styles/sf-pro-display-font.css'
import './styles/global.css'
import './styles/fonts.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'




const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
