<script>
import axios from 'axios';
import { store } from '../data/store'

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
            <div class="film" v-for="element, i in store.film">
                <img v-show="(element.backdrop_path != null)" :src="getPoster(element.backdrop_path)" :alt="element.title">
                <p v-show="(element.backdrop_path == null)">IMAGE NON EXIST</p>
                <div class="info">
                    <h4>Titolo:{{ element.title }}</h4>
                    <h5>Titolo originale:{{ element.original_title }}</h5>
                    <h6 :class="getFlag(element.original_language)"></h6>
                    <h4>Voto: <i class="fa-solid fa-star"></i></h4>
                    <small>Overview: {{ element.overview.slice(0, 150) }}[...]</small>
                </div>
            </div>
            <div class="serie" v-for="element, i in store.serieTv">
                <img v-show="(element.backdrop_path != null)" :src="getPoster(element.backdrop_path)" :alt="element.name">
                <p v-show="(element.backdrop_path == null)">IMAGE NON EXIST</p>
                <div class="info">
                    <h3>Titolo:{{ element.name }}</h3>
                    <h5>Titolo originale:{{ element.original_name }}</h5>
                    <h6 :class="getFlag(element.original_language)"></h6>
                    <h4>Voto: <i class="fa-solid fa-star"></i></h4>
                    <small>{{ element.overview }}</small>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;


main {
    text-align: center;
    margin: 0 auto;

    .films {
        @include flex(row, start, center, wrap);
        color: white;
        gap: 1em;
        width: 100%;



        .film,
        .serie {
            @include flex(row, center, center, wrap);
            width: calc(100% / 6);
            height: 350px;
            color: white;

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
            object-position: top;
        }

        .info {
            display: flex;
            justify-content: flex-start;
            display: none;
            overflow-y: scroll;
        }

    }
}
</style>