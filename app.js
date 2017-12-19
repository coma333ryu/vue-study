new Vue({
    el: '#vue-app',
    data: {
        name: 'Coma333ryu',
        job: 'Web Developer',
        website: "http://www.naver.com",
        websiteTag: '<a href="http://www.naver.com">Go Naver</a>',
        age: 40,
        x: 0,
        y: 0
    },
    methods: {
        greet: function (say) {
            return "Hello" + this.name + "!!!" + say;
        },
        addAge: function () {
            this.age++;
        },
        subtractAge: function () {
            this.age--;
        },
        addAges: function (inc) {
            this.age += inc;
        },
        subtractAges: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            // console.log(event);

            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});