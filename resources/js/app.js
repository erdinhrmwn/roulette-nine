import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler";
import Rolling from "./components/Rolling.vue";

var app = createApp({
    components: {
        Rolling,
    },
    mounted() {
        console.log("Its working");
    },
});

app.mount("#app");
