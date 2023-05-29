<script>
import FilmandSerie from './FilmandSerie.vue';
import { store } from '../data/store'
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default {
    name: "AppMain",
    components: {
        FilmandSerie,
    },
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
            <FilmandSerie />
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
    }
}
</style>