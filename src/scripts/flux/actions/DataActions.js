import axios from 'axios';
import alt   from 'flux/alt/alt.js';

class DataActions {

  constructor() {
    const appUrl = 'http://michaelmarcinek.com'; // Wordpress installation url

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts?per_page=5`; // Endpoint for getting Wordpress Posts
    this.updatePostsEndPoint = `${appUrl}/wp-json/wp/v2/posts/`; // Endpoint for editing/deleting posts 
  }

  // Method for getting data from the provided end point url
  apiGet(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      }); 
    });     
  }

  // Method for updating data to the provided end point url
  apiPost(endpoint, postObject) {
    axios.post(endpoint, {
      postObject
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  apiDelete(endpoint){
    axios.delete(endpoint)
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
      console.log(error)
    })
  }

  // Method for getting Pages data
  getPages(cb){
    this.apiGet(this.pagesEndPoint).then((response)=>{
    this.getPosts(response, cb)
    });
    return true;
  }

  // Method for getting Posts data
  getPosts(pages, cb){
    this.apiGet(this.postsEndPoint).then((response)=>{
      const posts     = response
      const payload   = { pages, posts };

      this.getSuccess(payload); // Pass returned data to the store
      cb(payload); // This callback will be used for dynamic rout building
    });
    return true;
  }

  // This returnes an object with Pages and Posts data together
  // The Alt Store will listen for this method to fire and will store the returned data
  getSuccess(payload){
    return payload;
  }

  // Method to build post title 
  updatePost(id, obj){
    let updateUrl = this.updatePostsEndPoint + `${id}`
    let postObject = {
      title: obj.title,
      content: obj.content
    }
    this.apiPost(updateUrl, postObject)
  }

  deletePost(id, updateObj){
    let deleteURl = this.updatePostsEndPoint + `${id}`;   
    this.apiDelete(this.updateDeleteEndPoint, updateObj)
  }
}

export default alt.createActions(DataActions);

