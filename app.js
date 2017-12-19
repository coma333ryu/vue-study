new Vue({
    el: '#vue-app',
    data: {
        name: 'Coma333ryu',
        job: 'Web Developer'
    },
    methods: {
        greet: function (say) {
            return "Hello" + this.name + "!!!" + say;
        }
    }
});