export default {
  data() {
    return {
      age: 18,
    }
  },
  methods: {
    showPicture() {
      console.log("picture is here")
    },
  },
  mounted() {
    console.log("Mixin is mounted")
  },
}
