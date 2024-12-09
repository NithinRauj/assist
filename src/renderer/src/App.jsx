import AnimatedLoader from './components/AnimatedLoader';

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className="home-root">
      <h1>Assist</h1>
      <AnimatedLoader />
    </div>
  );
}

export default App;
