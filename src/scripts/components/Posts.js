import DataStore from 'flux/stores/DataStore.js';
import ContentEditable from 'react-contenteditable';

// require("css-loader!./src/scripts/components/Posts.css");

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}

    this.updateTitle = this.updateTitle.bind(this)
    this.updateContent = this.updateContent.bind(this)
    
  }

  updateTitle(e){
    this.setState({html: e.target.value});
  }
  
  updateContent(e){
    this.setState({html: e.target.value});
  }

  render() {
    return (
      (<div>
        <p><i>Click on any item to edit</i></p>
        {this.state.allPosts.map((data, i) =>
          <div key={data.id} ref={data.id}>
            <ContentEditable
              tagName = 'h2'
              id = { data.id }
              className = "post_title"
              html={data.title.rendered}
              disabled={false}      
              onChange={this.updateTitle} 
            />

            <ContentEditable  
              tagName = 'p'
              className = "post_content" 
              id = { data.id }      
              html={data.content.rendered}
              disabled={false}      
              onChange={this.updateContent}
            /> 
            <hr />
          </div>
        )}
      </div>      
      )
    );    
  }
}

export default Posts;