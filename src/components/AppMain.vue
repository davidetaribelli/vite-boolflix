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
        <div class="card">
            <div v-for="element in store.film">
                <h3>{{ element.title }}</h3>
                <h4>{{ element.original_title }}</h4>
                <h5>{{ element.original_language }}</h5>
                <h5>{{ element.vote_average }}</h5>
            </div>
        </div>

    </main>
</template>

<style scoped lang="scss">
.card {
    color: white;

    div {
        margin-bottom: 1rem;
        border: 1px solid white;
    }
}
</style>