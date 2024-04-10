const { createApp } = Vue;

createApp({
   data() {
        return {
            emailsArray : [],
        };
    },
    methods: {
        // funzione che fa 10 chiamate all'API per popolare l'emailsArray con 10 mail
        getEmailsWithApi(){
            for (let i = 0; i < 10; i++) {
                let newEmail;
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    newEmail = response.data.response;
                    this.emailsArray.push(newEmail);
                })
            }
        }

    },
    mounted() {
        this.getEmailsWithApi();
    }
}).mount('#app');