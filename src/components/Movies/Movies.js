import styles from "./Movies.module.css"

function Movies() {
    return (
        <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Other films</h2>
            <div className={styles.movie__container}>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://cdn0-production-images-kly.akamaized.net/p9n81AekOznAGjpnSstaHMuUw8Q=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4465733/original/040582600_1686726937-Venom_-_Main_Poster_-_All_PSD_-_Landscape.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Venom</h3>
                    <p className={styles.movie__date}>3 Oktober 2018</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://img.okezone.com/content/2021/10/05/206/2481506/3-hari-tayang-venom-let-there-be-carnage-raup-pendapatan-rp1-2-triliun-ytfprZ7KHR.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Venom2</h3>
                    <p className={styles.movie__date}>17 November 2021</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://material.asset.catchplay.com/WAR-IN-001-A0021/artworks/posters/WAR-IN-001-A0021-P1200.jpg?hash=1656562632"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Lord of the Rings</h3>
                    <p className={styles.movie__date}>17 Desember 2003</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://cms.disway.id/uploads/7c8689574310531bf30c5660d26c3d00.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Blue Beetle</h3>
                    <p className={styles.movie__date}>16 Agustus 2023</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/05/24/628c70cb4d17a-film-thor_665_374.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>THOR Love the Thunder</h3>
                    <p className={styles.movie__date}>6 Juli 2022</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://asset.kompas.com/crops/03szETMPL75wqEFvaDkmunrLC2I=/0x0:780x390/780x390/data/photo/2015/02/12/1622191avengers2780x390.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Avengers</h3>
                    <p className={styles.movie__date}>4 Mei 2012</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://about.vidio.com/wp-content/uploads/2023/04/Spiderman-Far-From-Home-Main-Poster-All-PSD-Landscape.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Spider-man:Far from Home</h3>
                    <p className={styles.movie__date}>3 Juli 2019</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://cdn1-production-images-kly.akamaized.net/uVT7V-jCKll1iSFcgqaB-WgX9g4=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/50135/original/amazing-spiderman-130618b.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>The Amazing Spider-Man</h3>
                    <p className={styles.movie__date}>4 Juli 2012</p>
                </div>
                <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src="https://asset-2.tstatic.net/style/foto/bank/images/iron-man-3_20170325_113011.jpg"
                    alt=""
                    />
                    <h3 className={styles.movie__title}>Iron Man3</h3>
                    <p className={styles.movie__date}>25 April 2013</p>
                </div>
                {

                }

            </div>

        </section>
        </div>
    )
}
export default Movies;