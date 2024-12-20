import ReactDOM from "react-dom/client"

import { AuthProvider } from "./app/context/AuthContext"
import Apollo from "./graphql/Apollo"
import App from './app/App'
import './global/styles/global.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Apollo>
      <App />
    </Apollo>
  </AuthProvider>
)