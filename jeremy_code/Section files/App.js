import logo from './logo.svg';
import './App.css';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <Section>
        {"Details"}
        {"These are words that go here"}
      </Section>
      <Section>
        {"myFancyPic.png"}
        {"The picture description"}
      </Section>
      <Section>
        {"The picture description"}
        {"myFancyPic.png"}
      </Section>
      <Section>
        {"user"}
        {".first_name"}
        {".last_name"}
      </Section>
      <Section>
        {"user"}
        {{first_name: undefined}}
        {{last_name: undefined}}
      </Section>
    </div>
  );
}

export default App;
