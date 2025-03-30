// Movie database (simulated)
const movieDatabase = {
    'avengers-endgame': {
        title: 'KKN: Di Desa Penari',
        year: '2022',
        duration: '2h 55m',
        rating: '8.7',
        genres: ['Horror', 'Mystery', 'Thriller'],
        synopsis: 'A group of students encounter strange and terrifying events during their community service in a remote village. This film is an extended version of 2022s KKN di Desa Penari.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/wyRVXRygEOPpjTIcDz3z7ZXLZ45.jpg',
        streamUrl: 'https://cyyroro04xrqr.premilkyway.com/hls2/01/00424/v8izxqfc5dvo_h/index-v1-a1.m3u8?t=vCU5zEIhAo28CIHMJbxJ7QuH7CqmF7EkfICzB5CZ0OY&s=1743347924&e=129600&f=2122535&srv=jtkd5kf4kett&i=0.4&sp=500&p1=jtkd5kf4kett&p2=jtkd5kf4kett&asn=24203'
    },
    'joker': {
        title: 'Badarawuhi Di Desa Penari',
        year: '2024',
        duration: '2h 2m',
        rating: '5.7',
        genres: ['Horror', 'Mistery', 'Thriller'],
        synopsis: 'Mila must return a mystical bracelet to the "Dancing Village," unaware that Badarawuhi - a mysterious, mythical being who rules the village - awaits her.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/A4kY5RKiPJ0sRknU4NojItr93Jr.jpg',
        streamUrl: 'https://cukooifnwbux.premilkyway.com/hls2/01/04553/l0laisi6i5km_n/index-v1-a1.m3u8?t=coTRHyThrLsYyKfb1rHM_jIAvw2alpzQ0giRVCW6S1k&s=1743351629&e=129600&f=22768180&srv=dwjdqozeoybz&i=0.4&sp=500&p1=dwjdqozeoybz&p2=dwjdqozeoybz&asn=24203'
    },
    '-1883': {
        title: 'Dilan 1983: Wo Ai Ni',
        year: '2024',
        duration: '1h 55m',
        rating: '7.8',
        genres: ['Drama', 'Romance'],
        synopsis: 'The continuation of  and Milea\'s love story in 1991.  is now a military academy cadet while Milea continues her studies in Bandung. Their love is tested by distance and circumstances.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/7teKNxqnTJ0wu8QYlJURqGBQrOw.jpg',
        streamUrl: 'https://vwyn3lxe5fv5.premilkyway.com/hls2/01/07574/yxhlufr4lcas_n/index-v1-a1.m3u8?t=iB2L7n5JiK-dVewEqhFdi0IPFfq0h2hrBlkwLI7vWwk&s=1743351481&e=129600&f=44994556&srv=meuzahgd24x5v&i=0.4&sp=500&p1=meuzahgd24x5v&p2=meuzahgd24x5v&asn=24203'
    },
    'agak-laen': {
        title: 'Agak Laen',
        year: '2024',
        duration: '1h 45m',
        rating: '7.2',
        genres: ['Comedy', 'Horror'],
        synopsis: 'A group of friends who run a horror-themed tourist attraction accidentally capture real supernatural occurrences on camera, leading to unexpected consequences.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/zoKAggBy8xUEFEHfAXTBvMlLeKy.jpg',
        streamUrl: 'https://poo1xkur32.cdn-centaurus.com/hls2/01/04044/qhb477zlnzkp_n/index-v1-a1.m3u8?t=BUrJSMVeftlQL3qnUjRmeIDooFvmRBdazJ6YFKnK7f0&s=1743379093&e=129600&f=44281077&srv=r2665bh0dckt&i=0.4&sp=500&p1=r2665bh0dckt&p2=r2665bh0dckt&asn=24203'
        
    },
    'kangmak': {
        title: 'Kang Mak (From Pee Mak)',
        year: '2024',
        duration: '122 min',
        rating: '7.2',
        genres: ['Comedy', 'Horror'],
        synopsis: 'A group of friends who run a horror-themed tourist attraction accidentally capture real supernatural occurrences on camera, leading to unexpected consequences.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/h2k58PFM2dQsHXNxb2D471r3BJp.jpg',
        streamUrl: 'https://54pkdcyxbsxbermn.premilkyway.com/hls2/01/07661/8k66gqreyuv8_n/index-v1-a1.m3u8?t=D3Q-KjWZWaVzFVeZRJ0NBSPajciM7d-lMC9_XS627D8&s=1743378620&e=129600&f=38312632&srv=xcjcmoh7mtij&i=0.4&sp=500&p1=xcjcmoh7mtij&p2=xcjcmoh7mtij&asn=24203'
    },
    'milea': {
        title: 'Milea: Suara Dari Dilan',
        year: '2020',
        duration: '1h 50m',
        rating: '7.5',
        genres: ['Drama', 'Romance'],
        synopsis: 'The continuation of the love story between  and Milea. This time, the story is told from Milea\'s perspective, revealing her feelings and thoughts during their relationship.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/tRs5EYnviBBn79lQwGW2JLZp93v.jpg',
        streamUrl: 'https://5nrdhdrayadkaqp2.premilkyway.com/hls2/01/02867/8374s25345g8_n/index-v1-a1.m3u8'
    },
    '-1990': {
        title: 'Dilan 1990',
        year: '2018',
        duration: '1h 50m',
        rating: '8.0',
        genres: ['Drama', 'Romance'],
        synopsis: 'The story of  and Milea\'s love in 1990 when they were in high school. , a unique and charming boy, tries various ways to get closer to Milea, the new girl at school.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/eitRZXfbw6rO0CfP3lPaGgK63qr.jpg',
        streamUrl: 'https://in1rhjc5cqhz.premilkyway.com/hls2/01/08252/kc81uvxqoaf2_n/index-v1-a1.m3u8?t=sXOR6KjM-3SOSNg11pjENkPjQLgJ1L12E5Ft-mv2R08&s=1743367657&e=129600&f=43907939&srv=0wnh534rdgf989&i=0.4&sp=500&p1=0wnh534rdgf989&p2=0wnh534rdgf989&asn=7713'
        
    },
    '-ibu': {
        title: 'Bila Esok Ibu Tiada',
        year: '2024',
        duration: '104 min',
        rating: '8.0',
        genres: ['Drama', 'Family'],
        synopsis: 'It tells the story of a family with four children consisting of 1 boy and 3 girls. The four children are very dependent on their parents, especially their mother. Until one day, these four siblings had to accept the fate of their mother’s passing.',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/id/d/dc/Poster_BEIT.jpg',
        streamUrl: 'https://be6721.rcr72.waw04.cdn255.com/hls2/01/08534/fjxpa33ktz2f_h/index-v1-a1.m3u8?t=-viYnQ875BmId4ZaPcj7IrwU0xCkpSRx0WxiYj1f8Y4&s=1743360566&e=10800&f=42674276&srv=16&asn=24203&sp=4000&p='
        
    },
    '-keluarga': {
        title: 'Keluarga Besar',
        year: '2024',
        duration: '104 min',
        rating: '8.0',
        genres: ['Drama', 'Romance'],
        synopsis: 'Pak Wahyu, who only worked as an electronic equipment repairman in a rented shop, was made dizzy by his wife and two children who are only busy with their own lives. There are rumors that Mrs. Wiwik is a fraud, Agung is a believer in black magic, and Ati is pregnant out of wedlock increasingly widespread in their flats. Pak Wahyu also tried to create a large family they were whole again and loved each other.',
        posterUrl: 'https://filmindonesia.or.id/f/img/movie/poster/keluarga-besar.jpg',
        streamUrl: 'https://be4242.rcr52.ams03.cdn255.com/hls2/02/08598/vzbv8hqvihqc_h/index-v1-a1.m3u8?t=OcfH5PUIM42JbJysxh4hcgX_2Win8y2ExrDlpq-8n2E&s=1743360777&e=10800&f=42994393&srv=31&asn=24203&sp=4000&p='
        
    },
    '-ipar': {
        title: 'Ipar Adalah Maut',
        year: '2024',
        duration: '131 min',
        rating: '7.0',
        genres: ['Drama', 'Romance'],
        synopsis: 'Nisa and Aris’ initially happy household shakes when Nisa’s younger sibling comes to live with them.',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/id/7/79/Poster_IAM.jpg',
        streamUrl: 'https://bk2y7tof8rrl.milocdn.com/hls2/01/03012/ln443snu6z8x_n/index-v1-a1.m3u8?t=82W7QtjzkZ11_2hv7raDeE8_YO_FOcf0djSJyfbw3G0&s=1743361682&e=129600&f=15064949&srv=c3r7vx1sxRdf&i=0.4&sp=500&p1=c3r7vx1sxRdf&p2=c3r7vx1sxRdf&asn=24203'
        
    },
    '-misteri': {
        title: 'Misteri Bilik Korek Api',
        year: '2024',
        duration: '1h 50m',
        rating: '0.0',
        genres: ['Drama', 'Horror'],
        synopsis: 'After discovering a chamber filled with toys and stacks of matchboxes in the orphanage they recently moved into, Dina and the other orphans continue to experience supernatural disturbances in the house. In addition, the arrival of Luna, a new orphan who is no less mysterious than the orphanage they just moved into.',
        posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ8PdDk11vlFAwV_VUw2t7qoBvG3sB1Z_15kx0pBd3UnTWhGmMKyDQmo&s=10',
        streamUrl: 'https://be7713.rcr82.waw05.cdn255.com/hls2/02/08591/wsfaxy17wdj3_h/index-v1-a1.m3u8?t=KuTA7KrmzIxLR-5EglzGGQLY2Npgn14oLHzwgjbx_1Y&s=1743360880&e=10800&f=42994970&srv=26&asn=24203&sp=4000&p='
        
    },
    '-cinta': {
        title: 'Cinta Dalam Ikhlas',
        year: '2024',
        duration: '109 min',
        rating: '8.0',
        genres: ['Drama', 'Romance'],
        synopsis: 'Athar who meets Ara who makes him a better person, but they are still too young and have to pursue their dreams.',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/id/9/98/Cinta-dalam-ikhlas-poster_1.jpg',
        streamUrl: 'https://be2719.rcr22.ams01.cdn255.com/hls2/01/08598/c27py8emw5k6_h/index-v1-a1.m3u8?t=rN1CH3c3AAyOf1PnAfRqFf6vveQvZ6Ycqf9ubSmjFHs&s=1743360991&e=10800&f=42994400&srv=29&asn=24203&sp=4000&p='
        
    },
    '-santet': {
        title: 'Santet Segoro Pitu',
        year: '2024',
        duration: '1h 50m',
        rating: '8.0',
        genres: ['Drama', 'Romance'],
        synopsis: 'The story of  and Milea\'s love in 1990 when they were in high school. , a unique and charming boy, tries various ways to get closer to Milea, the new girl at school.',
        posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KNrtMPLWODHh9i8ohAG16am4twGg0qeNkrFCu8TCnrw_RfMzW6smywzM&s=10',
        streamUrl: 'https://be4242.rcr52.ams03.cdn255.com/hls2/01/08473/ox6ji03mab5n_h/index-v1-a1.m3u8?t=R7zsKufBlBct1FfvF41-1s8mwzREmerT66TRFvS8l7g&s=1743361049&e=10800&f=42465447&srv=38&asn=24203&sp=4000&p='
        
    },
    '-jabang': {
        title: 'Jabang Mayit',
        year: '2025',
        duration: '84 min',
        rating: '8.0',
        genres: ['Drama', 'Horror'],
        synopsis: 'Hujan mysteriously loses her baby. In desperation, she meets Bayu, who offers help. Bayu took her to a shaman. The shaman reveals that Hujan’s baby has been taken by a creature from another world, "Hantu Jabang Mayit", a ghost summoned through dark rituals to target babies of mothers who are not ready to give birth.',
        posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThuRlk1aWz2nvfrF1VX7zva3rXes5FrXbvrg&s',
        streamUrl: 'https://be4242.rcr52.ams03.cdn255.com/hls2/01/08473/v89b144u4kv2_h/index-v1-a1.m3u8?t=cuDj7FZQQ_H9cHr1cTATtOtjhN4ikr0vtCSMdp9JKqM&s=1743361122&e=10800&f=42465464&srv=05&asn=24203&sp=4000&p='
        
    },
    '-perewangan': {
        title: 'Perewangan',
        year: '2025',
        duration: '109 min',
        rating: '4.0',
        genres: ['Horror', 'Mystery' , 'Thriller'],
        synopsis: 'A cursed mirror opens up a supernatural bridge to a demonic force that disturbs and terrorises young Maya and her family.',
        posterUrl: 'https://assets.telkomsel.com/public/2024-11/sinopsis-perewangan.png',
        streamUrl: 'https://be2719.rcr22.ams01.cdn255.com/hls2/02/08389/rirvi5syj3ba_h/index-v1-a1.m3u8?t=-zoNdlgbpFfSJyY2CnNi7AcX7St3OrcC5tjqKS23goM&s=1743361203&e=10800&f=41948867&srv=29&asn=24203&sp=4000&p='
        
    },
    '-kemah': {
        title: 'Kemah Terlarang',
        year: '2024',
        duration: '110 min',
        rating: '6.0',
        genres: ['Horror'],
        synopsis: 'Taken from a true story, a Scout camp in Jogja in 2016. Rini, a first-year student at SMA Pandega, participated in a camp in the Wana Alus forest to prove her strength and get closer to Miko, the head of the committee whom she secretly admired. Although initially prohibited by the village guardian, Mbah Sonto, permission was finally granted on the condition of not disturbing the sacred place. However, during the three days of the camp, inexplicable events occurred. On the night of the peak performance of the drama, Rini, who played the role of Roro Putri, suddenly became possessed by the spirit of the original Roro Putri and triggered a mass possession among the other participants. Chaos ensued, with many victims being injured and some in life-threatening situations. Miko, the troop leader, and Mbah Sonto fought hard to save the students. Can they overcome this supernatural terror and bring all the participants home safely?',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/id/4/4d/Poster_Kemah_Terlarang.jpg',
        streamUrl: 'https://be4242.rcr52.ams03.cdn255.com/hls2/01/08239/l8g67kpbpl0t_h/index-v1-a1.m3u8?t=svoSYJImgos1LeRh7K0QsIeN9uY2S_IFHy_M5dAJL5I&s=1743361514&e=10800&f=41195966&srv=43&asn=24203&sp=4000&p='
        
    },
    '-serbian': {
        title: 'A Serbian Film (18+)',
        year: '2024',
        duration: '104 min',
        rating: '5.5',
        genres: ['Drama', 'Romance'],
        synopsis: 'Retired porn star Milos leads a normal family life trying to make ends meet. Presented with the opportunity of a lifetime to financially support his family for the rest of their lives, Milos must participate in one last mysterious film. From then on, Milos is drawn into a maelstrom of unbelievable cruelty and mayhem.',
        posterUrl: 'https://image.tmdb.org/t/p/w300/cToUzXZ9AcUylfIt8vnXhiy6Y9m.jpg',
        streamUrl: 'https://uk2y0xwy2xup0.premilkyway.com/hls2/01/00354/ubs384hzi2b8_h/index-v1-a1.m3u8?t=5Co6kzGLBUtcA8mTde5rABoUdOcH1wAn8kmx1p2bMak&s=1743361886&e=129600&f=1774352&srv=jubDiYuWLQCqfHI&i=0.4&sp=500&p1=jubDiYuWLQCqfHI&p2=jubDiYuWLQCqfHI&asn=24203'
    }
};

// DOM Elements
const toast = document.getElementById('toast');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const homePage = document.getElementById('home-page');
const moviePage = document.getElementById('movie-page');
const loadingScreen = document.getElementById('loading');
const moviePlayer = document.getElementById('moviePlayer');
const playBtnIcon = document.getElementById('playBtnIcon');
const volumeBtnIcon = document.getElementById('volumeBtnIcon');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Player state
let isPlaying = false;
let isMuted = false;
let retryCount = 0;
const MAX_RETRIES = 3;
let networkErrorTimeout;
let bufferingTimeout;
let currentMovieId = null;

// Improved video player with buffering handling
function setupVideoPlayer() {
    // Clear any existing timeouts
    clearTimeout(networkErrorTimeout);
    clearTimeout(bufferingTimeout);

    // Reset player state
    moviePlayer.preload = 'auto';
    moviePlayer.playsInline = true;
    moviePlayer.controls = false;
    moviePlayer.autoplay = false;

    // Event listeners for better error handling
    moviePlayer.addEventListener('error', handleVideoError);
    moviePlayer.addEventListener('waiting', handleBuffering);
    moviePlayer.addEventListener('playing', handlePlaying);
    moviePlayer.addEventListener('canplay', handleCanPlay);
    moviePlayer.addEventListener('stalled', handleStalled);
}

function handleVideoError() {
    console.error('Video error:', moviePlayer.error);
    if (retryCount < MAX_RETRIES && currentMovieId) {
        retryCount++;
        console.log(`Retrying playback (attempt ${retryCount})...`);
        showMoviePage(currentMovieId);
    } else {
        loadingScreen.style.display = 'none';
        alert('Failed to load video. Please check your connection and try again.');
    }
}

function handleBuffering() {
    console.log('Buffering...');
    loadingScreen.style.display = 'flex';
    
    // Set timeout to detect prolonged buffering
    bufferingTimeout = setTimeout(() => {
        if (!isPlaying && currentMovieId) {
            console.log('Buffering taking too long, attempting recovery...');
            moviePlayer.load(); // Trigger reload
        }
    }, 5000); // 5 seconds
}

function handlePlaying() {
    console.log('Playback started');
    loadingScreen.style.display = 'none';
    clearTimeout(bufferingTimeout);
    isPlaying = true;
}

function handleCanPlay() {
    console.log('Enough data available to play');
    loadingScreen.style.display = 'none';
    clearTimeout(bufferingTimeout);
}

function handleStalled() {
    console.log('Playback stalled, attempting recovery...');
    if (!isPlaying) {
        moviePlayer.load();
    }
}

// Show toast notification
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Show home page
function showHomePage(e) {
    if(e) e.preventDefault();
    homePage.style.display = 'block';
    moviePage.style.display = 'none';
    document.title = 'BiqFlix - Premium Streaming';
    window.scrollTo(0, 0);
    
    // Update active menu item
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('.sidebar-menu a:nth-child(1)').classList.add('active');
}

// Show movies page
function showMoviesPage(e) {
    if(e) e.preventDefault();
    showHomePage();
    
    // Update active menu item
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Show TV shows page
function showTVShowsPage(e) {
    if(e) e.preventDefault();
    alert('TV Shows page would show here in a full implementation');
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Show my list page
function showMyListPage(e) {
    if(e) e.preventDefault();
    alert('My List page would show here in a full implementation');
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Show search page
function showSearchPage(e) {
    if(e) e.preventDefault();
    alert('Search page would show here in a full implementation');
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Show movie page with improved streaming handling
function showMoviePage(movieId) {
    currentMovieId = movieId;
    retryCount = 0;
    loadingScreen.style.display = 'flex';
    
    setupVideoPlayer();

    // Simulate loading delay
    setTimeout(() => {
        const movie = movieDatabase[movieId];
        
        if (movie) {
            // Update movie info
            document.getElementById('movieTitle').textContent = movie.title;
            document.getElementById('movieRating').textContent = `★ ${movie.rating}`;
            document.getElementById('movieYear').textContent = movie.year;
            document.getElementById('movieDuration').textContent = movie.duration;
            document.getElementById('movieSynopsis').textContent = movie.synopsis;
            
            // Update video source
            moviePlayer.poster = movie.posterUrl;
            
            // Clear previous sources
            while (moviePlayer.firstChild) {
                moviePlayer.removeChild(moviePlayer.firstChild);
            }
            
            // Create new source element
            const source = document.createElement('source');
            source.src = movie.streamUrl;
            source.type = 'application/x-mpegURL';
            moviePlayer.appendChild(source);
            
            // Load the new source
            moviePlayer.load();
            
            // Update genres
            const genreContainer = document.getElementById('movieGenre');
            genreContainer.innerHTML = '';
            movie.genres.forEach(genre => {
                const span = document.createElement('span');
                span.textContent = genre;
                genreContainer.appendChild(span);
            });
            
            // Update page title
            document.title = `${movie.title} | BiqFlix`;
            
            // Switch pages
            homePage.style.display = 'none';
            moviePage.style.display = 'block';
            window.scrollTo(0, 0);
            
            // Show toast notification
            showToast();
            
            // Set timeout for network issues
            networkErrorTimeout = setTimeout(() => {
                if (moviePlayer.readyState < 3) { // HAVE_FUTURE_DATA
                    console.log('Network seems slow, attempting recovery...');
                    moviePlayer.load();
                }
            }, 10000); // 10 seconds
        } else {
            loadingScreen.style.display = 'none';
            alert('Movie not found!');
        }
    }, 800);
}

// Player control functions
function togglePlay() {
    if (moviePlayer.paused) {
        moviePlayer.play().then(() => {
            playBtnIcon.classList.remove('fa-play');
            playBtnIcon.classList.add('fa-pause');
            isPlaying = true;
        }).catch(error => {
            console.error('Playback failed:', error);
            // Attempt recovery
            if (currentMovieId) {
                showMoviePage(currentMovieId);
            }
        });
    } else {
        moviePlayer.pause();
        playBtnIcon.classList.remove('fa-pause');
        playBtnIcon.classList.add('fa-play');
        isPlaying = false;
    }
}

function playMovie() {
    // Reset volume controls
    moviePlayer.muted = false;
    isMuted = false;
    volumeBtnIcon.classList.remove('fa-volume-mute');
    volumeBtnIcon.classList.add('fa-volume-up');
    volumeSlider.value = moviePlayer.volume;
    
    // Try to play with error handling
    togglePlay();
}

function toggleMute() {
    if (moviePlayer.muted) {
        moviePlayer.muted = false;
        volumeBtnIcon.classList.remove('fa-volume-mute');
        volumeBtnIcon.classList.add('fa-volume-up');
        isMuted = false;
        volumeSlider.value = moviePlayer.volume;
    } else {
        moviePlayer.muted = true;
        volumeBtnIcon.classList.remove('fa-volume-up');
        volumeBtnIcon.classList.add('fa-volume-mute');
        isMuted = true;
        volumeSlider.value = 0;
    }
}

function setVolume(value) {
    moviePlayer.volume = value;
    moviePlayer.muted = (value == 0);
    
    if (value == 0) {
        volumeBtnIcon.classList.remove('fa-volume-up');
        volumeBtnIcon.classList.add('fa-volume-mute');
        isMuted = true;
    } else {
        volumeBtnIcon.classList.remove('fa-volume-mute');
        volumeBtnIcon.classList.add('fa-volume-up');
        isMuted = false;
    }
}

function seek(e) {
    if (moviePlayer.duration) {
        const percent = e.offsetX / e.target.offsetWidth;
        moviePlayer.currentTime = percent * moviePlayer.duration;
        progressBar.style.width = `${percent * 100}%`;
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        moviePlayer.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Update progress bar and time display
moviePlayer.addEventListener('timeupdate', function() {
    const currentTime = moviePlayer.currentTime;
    const duration = moviePlayer.duration;
    
    // Update progress bar
    if (duration > 0) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    // Update time display
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

// Format time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Handle play/pause when video is clicked
moviePlayer.addEventListener('click', togglePlay);

// Handle video end
moviePlayer.addEventListener('ended', function() {
    playBtnIcon.classList.remove('fa-pause');
    playBtnIcon.classList.add('fa-play');
    isPlaying = false;
});

// Initialize - show home page by default
showHomePage();

// Show toast notification on page load
window.addEventListener('load', function() {
    setTimeout(showToast, 1000);
});

// Clean up when leaving page
window.addEventListener('beforeunload', function() {
    clearTimeout(networkErrorTimeout);
    clearTimeout(bufferingTimeout);
    if (moviePlayer) {
        moviePlayer.pause();
        moviePlayer.removeAttribute('src');
        moviePlayer.load();
    }
});