import axios from 'axios';

const AjaxHelpers = {

  findMovie: function() {
    return axios.get('https://api-public.guidebox.com/v1.43/US/b5pWO2d8FjWYHZ7gWXPmUQJGZa2oJK/search/movie/title/TheMatrix/exact');

  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  getMovies: function(movieArray){
    return axios.get('https://api-public.guidebox.com/v1.43/US/b5pWO2d8FjWYHZ7gWXPmUQJGZa2oJK/search/movie/title/+'+ movieArray +'/exact')
  }


}
export default AjaxHelpers;
