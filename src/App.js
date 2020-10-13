import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        avatar="https://randomuser.me/api/portraits/women/75.jpg"
        name="Grace Franklin"
        online={true}
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/men/44.jpg"
        name="Warren Hernandez"
        online={false}
      />
      <Contact 
        avatar="https://randomuser.me/api/portraits/women/0.jpg"
        name="Rhonda Adams"
        online={true}
      />
    </div>
  );
}

export default App;
