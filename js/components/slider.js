export function slider() {
    const slider = document.createElement('section');
    slider.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />


    <header>
        <!-- site logo -->
        <h1>
         Site logo 🙄
        </h1>
    </header>
    <section class="image-slider-container">
        <div class="image-slider-heading">
            <h2 class="image-slider-title">
             Popular movies 🤩
            </h2> 
            <div class="swiper-pagination"></div>
        </div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slide-con">
                        <img src="https://images.saymedia-content.com/.image/t_share/MTg3OTY1NTY5MzY0OTI4Mjk4/best-adventure-movies-2000s.jpg"
                            alt="">
                        <div class="slide-details">
                            <div class="movie-info">
                                <h2 class="movie-name" title="">
                                    Thor in the infinte warfare
                                </h2>
                                <span class="movie-full-time" title="">
                                    2h 24m
                                </span>
                                <span class="movie-views" title="">
                                    
                                </span>
                            </div>
                            <div class="movie-btns">
                                <a href="#" class="imdb-rate" title="">

                                    IMDB 8/10

                                </a>
                                <a href="#" class="like" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                        <path fill="currentColor"
                                            d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87Z"
                                            class="clr-i-solid clr-i-solid-path-1" />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg>
                                </a>
                                <a href="#" class="show-movie" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                        <path fill="currentColor"
                                            d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-con"><img
                            src="https://www.cineglobe.de/wp-content/uploads/2022/07/1844268.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg"
                            alt="">
                            <div class="slide-details">
                                <div class="movie-info">
                                    <h2 class="movie-name" title="">
                                        Thor in the infinte warfare
                                    </h2>
                                    <span class="movie-full-time" title="">
                                        2h 24m
                                    </span>
                                    <span class="movie-views" title="">
                                        
                                    </span>
                                </div>
                                <div class="movie-btns">
                                    <a href="#" class="imdb-rate" title="">
    
                                        IMDB 8/10
    
                                    </a>
                                    <a href="#" class="like" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                            <path fill="currentColor"
                                                d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87Z"
                                                class="clr-i-solid clr-i-solid-path-1" />
                                            <path fill="none" d="M0 0h36v36H0z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="show-movie" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-con"><img
                            src="https://m.media-amazon.com/images/M/MV5BMWQ3N2EzNjYtMzgwYS00YjdmLThmOTUtMzc4NDUxZjZkY2RhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg"
                            alt="">
                            <div class="slide-details">
                                <div class="movie-info">
                                    <h2 class="movie-name" title="">
                                        Thor in the infinte warfare
                                    </h2>
                                    <span class="movie-full-time" title="">
                                        2h 24m
                                    </span>
                                    <span class="movie-views" title="">
                                        
                                    </span>
                                </div>
                                <div class="movie-btns">
                                    <a href="#" class="imdb-rate" title="">
    
                                        IMDB 8/10
    
                                    </a>
                                    <a href="#" class="like" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                            <path fill="currentColor"
                                                d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87Z"
                                                class="clr-i-solid clr-i-solid-path-1" />
                                            <path fill="none" d="M0 0h36v36H0z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="show-movie" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-con">
                        <img src="https://fr.web.img2.acsta.net/pictures/20/11/17/16/44/3495622.jpg" alt="">
                        <div class="slide-details">
                            <div class="movie-info">
                                <h2 class="movie-name" title="">
                                    Thor in the infinte warfare
                                </h2>
                                <span class="movie-full-time" title="">
                                    2h 24m
                                </span>
                                <span class="movie-views" title="">
                                    
                                </span>
                            </div>
                            <div class="movie-btns">
                                <a href="#" class="imdb-rate" title="">

                                    IMDB 8/10

                                </a>
                                <a href="#" class="like" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                        <path fill="currentColor"
                                            d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87Z"
                                            class="clr-i-solid clr-i-solid-path-1" />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg>
                                </a>
                                <a href="#" class="show-movie" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                        <path fill="currentColor"
                                            d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide-con">
                        <img src="https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_FMjpg_UX1000_.jpg"
                            alt="">
                            <div class="slide-details">
                                <div class="movie-info">
                                    <h2 class="movie-name" title="">
                                        Thor in the infinte warfare
                                    </h2>
                                    <span class="movie-full-time" title="">
                                        2h 24m
                                    </span>
                                    <span class="movie-views" title="">
                                        
                                    </span>
                                </div>
                                <div class="movie-btns">
                                    <a href="#" class="imdb-rate" title="">
    
                                        IMDB 8/10
    
                                    </a>
                                    <a href="#" class="like" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                                            <path fill="currentColor"
                                                d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87Z"
                                                class="clr-i-solid clr-i-solid-path-1" />
                                            <path fill="none" d="M0 0h36v36H0z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="show-movie" title="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M240 128a16.1 16.1 0 0 1-7.7 13.7l-144 87.9a15.5 15.5 0 0 1-16.1.3A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9a15.5 15.5 0 0 1 16.1.3l144 87.9A16.1 16.1 0 0 1 240 128Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
   <script>
        new Swiper(".swiper", {
            loop: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            speed: 500,
            pagination: {
                el: '.swiper-pagination',
                clickable: true, 
            
            },
  
            breakpoints	: {
            768: {
                centeredSlides: false,
             coverflowEffect:{

          depth: 0, 

          rotate: 0, 

          stretch : -10, 

         

         } 
            }
            },
             autoplay: {
              delay: 3000,
             },
         coverflowEffect:{
          depth: 80, 
          rotate: 50, 
          stretch : 20, 
         
         } 
        })
    </script>
    `;
}