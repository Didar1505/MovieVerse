import React from 'react';
import '../card-style.css'


const MovieCard = ({ movie }) => {
  const { title, release_date, overview, poster_path } = movie;

  return (
        <div class="example-2 card">
            <div class="wrapper"
            style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+poster_path})`}}>
                <div class="header">
                    <div class="date">
                        <span class="day">{release_date}</span>
                    </div>
                    <ul class="menu-content">
                        <li>
                            <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                        <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                    </ul>
                </div>
                <div class="data">
                    <div class="content">
                        <h1 class="title"><a href="#">{title}</a></h1>
                        <p class="text">{overview.slice(0,140)+"..."}</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default MovieCard
