<script>
import { store } from '../data/store'
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "AppMain",
    data() {
        return {
            store,
        }
    },
    methods: {
        getFlag(language) {
            if (language == 'en') {
                return 'fi fi-gb';
            } else if (language == 'zh' || language == 'id' || language == 'ja' || language == 'ko') {
                return 'fi fi-un';
            }
            return 'fi fi-' + language;
        },
        getPoster(img) {
            let urlPath = "https://image.tmdb.org/t/p/w342/" + img;
            return urlPath;
        }
    }

}
</script>

<template>
    <main>

        <div class="films">
            <!-- PARTE CHE RIGUARDA I FILM -->
            <div class="film" v-for="element, i in store.film">
                <img v-show="(element.backdrop_path != null)" :src="getPoster(element.backdrop_path)" :alt="element.title">
                <img v-show="(element.backdrop_path == null)"
                    src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" />
                <div class="info">
                    <h4>Titolo:{{ element.title }}</h4>
                    <h5>Titolo originale:{{ element.original_title }}</h5>
                    <h4 :class="getFlag(element.original_language)"></h4>
                    <div v-if="element.vote_average > 0" class="stars">
                        <span>Voto:</span>
                        <template v-for="star in 5">
                            <span v-if="Math.ceil(element.vote_average / 2) >= star">
                                <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-star" class="icon empty" />
                            </span>
                        </template>
                    </div>
                    <div v-else>
                        <span>Voto: n/a</span>
                    </div>
                    <small>Overview: {{ element.overview.slice(0, 150) }}[...]</small>
                </div>
            </div>
            <!-- PARTE CHE RIGUARDA LE SERIE TV -->
            <div class="serie" v-for="element, i in store.serieTv">
                <img v-show="(element.backdrop_path != null)" :src="getPoster(element.backdrop_path)" :alt="element.name">
                <img v-show="(element.backdrop_path == null)"
                    src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png" />
                <div class="info">
                    <h3>Titolo:{{ element.name }}</h3>
                    <h5>Titolo originale:{{ element.original_name }}</h5>
                    <h4 :class="getFlag(element.original_language)"></h4>
                    <div v-if="element.vote_average > 0" class="stars">
                        <span>Voto:</span>
                        <template v-for="star in 5">
                            <span v-if="Math.ceil(element.vote_average / 2) >= star">
                                <font-awesome-icon icon="fa-solid fa-star" class="icon" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-star" class="icon empty" />
                            </span>
                        </template>
                    </div>
                    <div v-else>
                        <span>Voto: n/a</span>
                    </div>
                    <small>Overview: {{ element.overview.slice(0, 150) }}[...]</small>
                </div>
            </div>

        </div>

    </main>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;


main {
    margin: 0 auto;

    .films {
        @include flex(row, start, center, wrap);
        color: white;
        width: 100%;

        .film,
        .serie {

            width: calc(100% / 6);
            height: 300px;
            color: white;

            &:hover {
                border: 2px solid #ccc;
            }

            &:hover img {
                display: none;
            }

            &:hover p {
                display: none;
            }

            &:hover .info {
                display: block;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .info {
            display: none;
            padding: 1em;

            .stars {
                .icon {
                    color: goldenrod;
                }

                .empty {
                    color: #ccc;
                }
            }
        }

    }
}
</style>