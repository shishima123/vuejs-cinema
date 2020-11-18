<template>
    <div>
        <div class="movie-col-left">
            <img :src="movie.Poster" alt="">
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <h2>{{ movie.Title }}</h2>
                <span class="movie-rating">{{ movie.Rated }}</span>
            </div>
            <div class="movie-sessions">
                <div v-for="session in filteredSessions" :key="session.id" class="session-time-wrapper">
                    <div class="session-time">{{ sessionTimeFormat(session.time) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import times from "../util/times"
    export default {
        name: "MovieListItem",
        props: ['movie', 'sessions', 'times', 'sessionPassesTimeFilter'],
        computed: {
          filteredSessions() {
              return this.sessions.filter(this.sessionPassesTimeFilter)
          }
        },
        methods: {
            sessionTimeFormat(session) {
                return this.$moment(session).format('h:mm A')
            }
        }
    }
</script>

<style scoped>

</style>