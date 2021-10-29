import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mainstyle.css'
import Navbar from './components/Navbar'
import MovieListWithSearch from './components/MovieListWithSearch'
import Footer from './components/Footer'
import MovieList from './components/MovieList'

import { Container } from 'react-bootstrap'





function App() {
  return (

   <>

<Navbar/>

<Container fluid>

{/* <h4 class="pt-4">Search a movie</h4> */}
{/* <MovieListWithSearch/> */}
<h4 class="pt-4">movies</h4>
<MovieList query = "" / >
<h4 class="pt-4">movies clone</h4>
<MovieList  query = "" />

</Container>


   
   
   <Footer/>
   </>
  )
}

export default App;
