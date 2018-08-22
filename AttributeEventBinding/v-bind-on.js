new Vue({
  el: '#app',
  data: {
    selected: false
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
    }
  }
});
