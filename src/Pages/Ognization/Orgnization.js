import './Orgnization.css'
import { Departments, TopOfNewsPage } from 'sections'

const Orgnization = () => {
  return (
    <div>
<TopOfNewsPage img={require('../../Assest/images/original.jpg')} title="Orgnization Page" content="this web site for Organizations to manage" valid={true}/>
    <h2 className='rec'>Recent Works</h2>

    <Departments/>
    </div>
  )
}

export default Orgnization