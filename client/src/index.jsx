import { createRoot } from 'react-dom/client'
import Root from './root'

const rootElem = document.getElementById('app')
if (rootElem) {
  const root = createRoot(rootElem)
  root.render(<Root />)
}
