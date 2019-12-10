<template>
    <div class="row mt-4" :class="{'selectedBackgroundMovie' : isSelected}">
        <div class="col-sm back" v-text="movie.id"></div>
        <div class="col-sm back" v-text="movie.title"></div>
        <div class="col-sm back" v-text="movie.director"></div>
        <div class="col-sm back" v-text="movie.genre"></div>
        <div class="col-sm back" v-text="movie.releaseDate"></div>
        <div class="col-sm back" v-text="movie.duration"></div>
        <button type="button" class="btn btn-info btn-sm" 
        @click.once="selected">Select</button>    
    </div>

</template>

<script>
export default {
    name: 'MovieRow',
    props: {
        movie: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            isSelected: false
        }
    },

    methods: {
        selected() {
            this.isSelected = true;
            this.$emit('selected-movie', this.movie)
        }
    }
}
</script>
<style scoped>
 
 .selectedBackgroundMovie{
     background-color: aquamarine;
 }
</style>