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

}
</script>

<template>
    <main>
        <div class="films">
            <div class="film" v-for="element, i in store.film">
                <h3>{{ element.title }}</h3>
                <h4>{{ element.original_title }}</h4>
                <h5>{{ element.original_language }}</h5>
                <h5>{{ element.vote_average }}</h5>
            </div>
            <div class="serie" v-for="element, i in store.serieTv">
                <h3>{{ element.name }}</h3>
                <h4>{{ element.original_name }}</h4>
                <h5>{{ element.original_language }}</h5>
                <h5>{{ element.vote_average }}</h5>
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
            width: calc(100% / 8);
            min-height: 300px;
            background-color: blue;
        }
    }
}
</style>