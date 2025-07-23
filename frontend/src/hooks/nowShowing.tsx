import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setNowShowing } from '../redux/slices/movies';

function nowShowing(){
    const dispatch = useDispatch();
    const nowShowing = useSelector(state => state.movies.nowShowing);
    useEffect(()=>{
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmQ5NThlYjZhNWRmOWQyOTc0MzY1NWY0NTlmN2Y5NCIsIm5iZiI6MTcyNzY0Njc1Ni45Mjk5OTk4LCJzdWIiOiI2NmY5Y2MyNDE0MGZiZjZhMWE1ZjhiYmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.N2lxBGNiZv_ld60xtIHNcEJOPlczXw5KRldIXOC78co'
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => dispatch(setNowShowing(json.results)))
          .catch(err => console.error(err));    },
          []);
    return nowShowing;
}

export default nowShowing;