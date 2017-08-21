import DataStore from 'flux/stores/DataStore.js';
// require("css-loader!./src/scripts/components/Posts.css");

class Posts extends React.Component {
  constructor(){
    super();
    let allData = DataStore.getAll();
    let allPosts = allData.posts;
    this.state = {allPosts}
    this.state.showEdit = {display: 'false'}
    
    this.showEdit = this.showEdit.bind(this)
  }

  showEdit(id){
    console.log(id.target);
  }

  render() {
    return (
      (<div>
        <p><i>Click on any item to edit</i></p>
        {this.state.allPosts.map((data, i) =>
          <div key={data.id}>
            <h2 id={data.id + "_title"} dangerouslySetInnerHTML={{ __html: data.title.rendered  }} onClick={this.showEdit}></h2>       
            <p id={data.id + "_content"} dangerouslySetInnerHTML={{ __html: data.content.rendered  }} onClick={this.showEdit}></p>
            <hr/>          
          </div>    
        )}
      </div>      
      )
    );    
  }
}

export default Posts;