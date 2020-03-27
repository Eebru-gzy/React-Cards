import React from 'react';
import Ui from '../src/components/ui'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
     data: [],
     images: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200",
      "https://source.unsplash.com/random/350x200"
     ]
    };
  }

  async componentDidMount() {
    const api = fetch('https://jsonplaceholder.typicode.com/users')
    const data = await api;
    const jason = await data.json();
      
    this.setState({
    data: [...this.state.data, ...jason]
    });
  };   

      render() { 
        return ( 
          <div>
            <Ui data={this.state.data} images={this.state.images} />
          </div>
          
     );
  }
}
 
export default App;
