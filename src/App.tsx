import AboutMe, { Person } from './components/AboutMe';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import PhotoCard, {PhotoCardType} from './components/PhotoCard';
import './App.css';

const me: Person = {
  name: 'Todd Albert',
  age: 47,
  awesome: true,
}

const card: PhotoCardType = {
  photo: 'https://lh3.googleusercontent.com/ogw/AOh-ky34t5fd0w9ldRPKMVEIsV_xbcSYNHplZ9kVirThwQ=s32-c-mo',
  user: 'Todd Albert',
  mainPhoto: 'https://images.unsplash.com/photo-1666292332843-5f820521f007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODExNjcxNA&ixlib=rb-4.0.3&q=80&w=1080',
  description: 'elephant',
  likeCount: 99,
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello TypeScript</h1>
       <AboutMe person={me}/>
       <Counter />
       <Greeting firstName='Peter' lastName='Lewandaski' />
       <Greeting firstName='Todd' lastName='Albert' />
       <PhotoCard card={card} />

      </header>
    </div>
  );
}

export default App;
