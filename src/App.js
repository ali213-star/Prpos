import logo from './logo.svg';
import './App.css';
import Pofilcompoment from'./Profile/Pofilcompoment'
import Child from './Profile/Child'
import Image from './Profile/Image'

const handleAlert = () => {
  alert(`this is the User`)
  }
function App() {
  return (
    <div className="App">
    <Pofilcompoment title='ali sadraoui'
    Bio= 'I am full stack developer Stack Web developer active curious dynamic passionate about programming and web developùent  Im  motivated I always try to do my best and learn the engineering profession with a solid basis through several academic and professional projects'
    Profession = 'SERVICIMA Company management solution Design development and deployment of micro-services with NodeJS Front-end design and development using Angular'>
   
    <div>
  
    </div>
    </Pofilcompoment>
<Image>image</Image>
   <Child handleAlert= {handleAlert} />
    </div>
  );
}

export default App;
