import App from '../../App'
import Details from '../../components/Details'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <Main />
}