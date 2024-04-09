const { createApp } = Vue;

createApp({
   data() {
        return {

        };
    },
    methods: {

    },
    mounted() {
        // test link axios
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            console.log('response: ' , response.data.response);
        })
    }
}).mount('#app');