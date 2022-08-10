<template>
    <div>
        <p class="text-white text-3xl font-bold">{{ number }}</p>
    </div>
</template>
<script>
export default {
    name: "Rolling",
    mounted() {
        var interval = setInterval(() => {
            this.number = this.generateString(2);
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            this.number = "24";
        }, 5000);
    },
    data() {
        return {
            number: "00",
        };
    },
    methods: {
        generateString(len) {
            let text = " ";
            let chars = "0123456789";

            for (let i = 0; i < len; i++) {
                text += chars.charAt(Math.floor(Math.random() * chars.length));
            }

            return text;
        },
    },
};
</script>
