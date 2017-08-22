import DataStore from 'flux/stores/DataStore.js';
import DataActions  from 'flux/actions/DataActions.js';
import ContentEditable from 'react-contenteditable';

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}

    this.editTitle = this.editTitle.bind(this)
    this.editContent = this.editContent.bind(this)
    this.delete = this.delete.bind(this)
  }

  editTitle(e, data){    
    this.setState({html: e.target.value});
    let updateObj = {
      title: e.target.value,
      content: data.content
    }
    DataActions.updatePost(data.id, updateObj)
  }
  
  editContent(e, data){
    this.setState({html: e.target.value});
    let updateObj = {
      title: data.title,
      content: e.target.value
    }
    DataActions.updatePost(data.id, updateObj)    
  }

  delete(e, data){
    let updateObj = {
      title: data.title,
      content: data.content
    }
    DataActions.deletePost(data.id, updateObj)
  }

  render() {
    return (
      (<div>
        <p className="edit-instructions"><i>Click on any item to edit</i></p>
        {this.state.allPosts.map((data, i) =>
          <div key={data.id} ref={data.id} className="post-wrapper">
            <ContentEditable
              tagName='h2'
              className='post-title'
              html={data.title.rendered}
              disabled={false}      
              onChange={(e) => this.editTitle(e, data)} 
            />
            <hr className="title-break"/>
            <div className='post-content'>
              <ContentEditable  
                tagName = 'p'
                html={data.content.rendered}
                disabled={false}      
                onChange={(e) => this.editContent(e, data)}
              /> 
            </div>
            <button className="delete-btn" onClick={(e) => this.delete(e, data)}>Delete</button>
            <hr className="post-divider"/>
          </div>
        )}
      </div>      
      )
    );    
  }
}

export default Posts;