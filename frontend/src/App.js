import './App.css';
import Quickstart from './components/Quickstart';
import ChannelData from './components/ChannelData';
import GenerateInvoice from './components/GenerateInvoice'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Lightning Quickstart</h1>
      </header>
      <div className="App-body">
        <ul>
          <li><p>Setting up a full-stack lightning project is hard.</p></li>
          <li><p>This project intends to help new developers bootstrap a fullstack lightning app within the context of a hackathon</p></li>
          <li><p>The repo contains the bones to a full-stack react application using bitcoin lightning.</p></li>
        </ul>
        <Quickstart />
        <ChannelData />
        <GenerateInvoice />
      </div>
    </div>
  );
}

export default App;
