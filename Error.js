import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Error() {
 return <>
 <Hero >
  <Banner title="404 error" subtitle="no such page available">
  <Link to= "/" className="btn-primary">Home page </Link>
  </Banner>
 </Hero>
 </>
  
 
}
