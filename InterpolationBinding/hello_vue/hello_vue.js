new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  },
  methods: {
    clickMe() {
      this.message = 'Hello Vue';
    }
  }
});
