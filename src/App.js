
import './App.css';
import Section from './Section';

function App() {





  return <div>
    <Section right>

    </Section>
    <Section left>

    </Section>
    <Section bottom>

    </Section>
    <Section>

    </Section>
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
}



export default App;
