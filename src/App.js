import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
      <Video 
      likes={100}
      messages={200}
      shares={300}
      name="gabriel"
      description="Gato goleiro"
      music="musica"
      url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      />
     <Video 
      likes={143}
      messages={355}
      shares={865}
      name="jose"
      description="bird"
      music="Clap your hands"
      url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
      />

      </div>
    </div>
  );
}

export default App;
