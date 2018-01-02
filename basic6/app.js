new Vue({
    el: '#vue-app',
    data: {
        output: 'My fav thing is '
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs.input.value);
            this.output += this.$refs.input.value;
            console.log(this.$refs);
            console.log(this.$refs.divTest.innerText);
        }
    },
    computed: {

    }
});