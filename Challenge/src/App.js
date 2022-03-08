import React from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
         {
          name: "Patrick Pang",
          number: "704-444-4444",
          birthDate: "04-05-2002",
        },
        {
          name: "Justin McNeil",
          number: "704-333-3333",
          birthDate: "03-13-1600",
        },
        {
          name: "Reginald Johnson",
          number: "704-555-5555",
          birthDate: "12-09-1970",
        },
        {
          name: "Dylan Trimble",
          number: "704-777-7777",
          birthDate: "01-20-1800",
        },
      ]
    };
  }
  render() {
    return this.state.people.map(function (person, index) {
      return <BasicInfo key={index} person={person} />;
    })
  }
}

export default App;
