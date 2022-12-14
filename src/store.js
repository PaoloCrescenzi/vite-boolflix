import {reactive} from "vue";
import axios from "axios";

export const store = reactive ({SearchText:"", Movies:[], Series:[]})
// export function
// call(){
//   axios.get ('https://api.themoviedb.org/3/search/movie?', {params:{
//     language: "it-IT",
//     api_key: "b87490d8045dfe2258fcde335abc7cc0",
//     query: store.SearchText
//   }})
//   .then(resp => {
//     store.Movies = resp.data.results
//     console.log(store.Movies)
//   })
// }

