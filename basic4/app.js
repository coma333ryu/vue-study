var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue App One"
    },
    methods: {

    },
    computed: {
        greet: function () {
            return "This is App One";
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue App Two"
    },
    methods: {
        changeAppOneTitle: function () {
            one.title = 'App One Title is changed by App Two';
        }
    },
    computed: {
        greet: function () {
            return "This is App Two";
        }
    }
});

two.title = 'Changed from outside';