//data 공유하기위해 전역 객체 생성
// var data = {
//     name: 'Coma333ryu'
// }

Vue.component('greeting', {
    template: '<p>Hello, I am a {{name}}. <button v-on:click="changeName">Change Name</button></p>',
    data: function () {
        return {
            name: 'Coma333ryu'
        }
        // return data;
    },
    methods: {
        //data가 공유되지 않음.
        //두개의 인스턴스이기 때문
        changeName: function () {
            this.name = 'Coma333'
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});