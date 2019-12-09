<template>
    <div class="container">
        <div v-for="movie in movies" :key="movie.id">
            <h3>{{ movie.title}} </h3>
            <p> {{ movie.director }} </p>
            <p> {{ movie.imageUrl }} </p>
            <p> {{ movie.releaseDate }} </p>
            <p> {{ movie.genre }} </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Movies',
    props: {
        movies: Array
    }
}
</script>