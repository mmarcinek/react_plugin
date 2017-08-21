import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
  render() {
    let allData = DataStore.getAll();
 
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: allData.posts[0].title.rendered  }}></h2>       
        <div dangerouslySetInnerHTML={{ __html: allData.posts[0].content.rendered  }}></div>
      </div>
    );
  }
}

export default Home;