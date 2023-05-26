<script>
import axios from 'axios';
import { store } from '../data/store'

export default {
    name: "AppHeader",

    data() {
        return {
            store,
            searchFor: ""
        }
    },
    methods: {
        research() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=aeb9f466c19d1b6c563187701f212a3e&query=${this.searchFor}`).then(r => {
                this.store.film = r.data.results;
                console.log("Film", this.store.film);
            })

            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=aeb9f466c19d1b6c563187701f212a3e&query=${this.searchFor}`).then(r => {
                this.store.serieTv = r.data.results;
                console.log("SerieTV", this.store.serieTv)
            })

            this.searchFor = null;
        },

    },

}
</script>

<template>
    <header>
        <div class="box">
            <h1>BOOLFLIX</h1>
            <div class="search">
                <input type="text" placeholder="Search..." v-model="searchFor" @keyup.enter="research">
                <button @click="research">SEARCH</button>
            </div>
        </div>
    </header>
</template>


<style scoped lang="scss">
@use '../style/general.scss' as *;

header {
    padding: 1em;
    background-color: #222;

    .box {
        @include flex(row, space-between, center, wrap);

        h1 {
            color: red;
        }

        .search {
            padding: 0.5em;

            input,
            button {
                padding: 0.5em;
                border: 0;
            }

            button {
                cursor: pointer;
            }
        }

    }


}
</style>