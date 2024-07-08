const app1 = Vue.createApp({
    methods: {
        showPasswordPrompt() {
            Swal.fire({
                title: 'Enter the Code:',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (code === '51') { 
                                resolve()
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    text: 'Invalid code! Try again'
                                });
                            }
                        }, 200)
                    })
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://youtu.be/eOCZNxRHcEA?si=fvs9LGdlHaAdIuNq';
                }
            })
        }
    }
});

const app2 = Vue.createApp({
    methods: {
        showPasswordPrompt() {
            Swal.fire({
                title: 'Enter the Code:',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (code === '39') { 
                                resolve()
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    text: 'Invalid code! Try again'
                                });
                            }
                        }, 200)
                    })
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://youtu.be/rkzyb8jpO_A?si=uxC9JoJZcHPnnSI4';
                }
            })
        }
    }
});

app1.mount('#app1');
app2.mount('#app2');
