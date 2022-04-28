import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"

import {Provider} from 'react-redux'
import store from './redux/store'

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<Provider store={store}><App /></Provider>)
