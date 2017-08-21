import DataStore from 'flux/stores/DataStore.js'

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}
    
    this.editTitle = this.editTitle.bind(this)
    this.editContent = this.editContent.bind(this)
  }

  editTitle(titleId){
    console.log(titleId.target);
  }

  editContent(contentId){
    console.log(contentId.target);
  }


  render() {
    return (
      (<div>
        <p><i>Click on any item to edit</i></p>
        {this.state.allPosts.map((data, i) =>
          <div key={data.id}>
            <h2 id={data.id + "_title"} dangerouslySetInnerHTML={{ __html: data.title.rendered  }} onClick={this.editTitle}></h2>       
            <p id={data.id + "_content"} dangerouslySetInnerHTML={{ __html: data.content.rendered  }} onClick={this.editContent}></p>
          </div>    
        )}
      </div>      
      )
    );    
  }
}

export default Posts;