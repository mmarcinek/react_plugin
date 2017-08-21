import DataStore from 'flux/stores/DataStore.js';
import ContentEditable from 'react-contenteditable';

// require("css-loader!./src/scripts/components/Posts.css");

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}

    this.editTitle = this.editTitle.bind(this)
    this.editContent = this.editContent.bind(this)
  }

  editTitle(e, data){    
    this.setState({html: e.target.value});
  }
  
  editContent(e, data){
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
              className = 'post_title'
              html={data.title.rendered}
              disabled={false}      
              onChange={(e) => this.editTitle(e, data)} 
            />
            <ContentEditable  
              tagName = 'p'
              className = 'post_content'    
              html={data.content.rendered}
              disabled={false}      
              onChange={(e) => this.editContent(e, data)}
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