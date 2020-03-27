import React from 'react';
import Ui from '../src/components/ui'



class App extends React.Component {

  constructor() {
    super()
    this.state = {
     data: [],
     images: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/men/74.jpg",
      "https://randomuser.me/api/portraits/men/84.jpg",
      "https://randomuser.me/api/portraits/women/54.jpg",
      "https://randomuser.me/api/portraits/women/41.jpg",
      "https://randomuser.me/api/portraits/men/18.jpg",
      "https://randomuser.me/api/portraits/men/17.jpg",
      "https://randomuser.me/api/portraits/women/16.jpg",
      "https://randomuser.me/api/portraits/women/12.jpg",
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
