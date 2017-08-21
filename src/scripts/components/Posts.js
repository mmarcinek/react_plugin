import DataStore from 'flux/stores/DataStore.js';
import ContentEditable from 'react-contenteditable';

// require("css-loader!./src/scripts/components/Posts.css");

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({html: e.target.value});
  }

  render() {
    return (
      (<div>
        <p><i>Click on any item to edit</i></p>
        {this.state.allPosts.map((data, i) =>
          <div key={data.id}>
            <h2 className="post_title">
              <ContentEditable
                html={data.title.rendered} 
                disabled={false}      
                onChange={this.handleChange} 
              />
            </h2>  
            <div className="post_content">
            <ContentEditable         
              html={data.content.rendered} 
              disabled={false}      
              onChange={this.handleChange}
            /> 
            </div>
            <hr />
          </div>
        )}
      </div>      
      )
    );    
  }
}

export default Posts;