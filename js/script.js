const { createApp } = Vue;

createApp({
   data() {
        return {
            emailsArray : [],
        };
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            let newEmail;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                newEmail = response.data.response;
                this.emailsArray.push(newEmail);
            })
        }
    }
}).mount('#app');