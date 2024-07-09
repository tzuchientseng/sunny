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
                confirmButtonColor: '#ff9800',  // 橘色確認按鈕
                cancelButtonColor: '#aaa',  // 灰色取消按鈕
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (code === '51') { 
                                resolve();
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Invalid code!',
                                    text: 'Try again',
                                    confirmButtonColor: '#3085d6', // 設置為藍色
                                    confirmButtonText: 'OK'
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
}).mount('#app1');

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
                confirmButtonColor: '#ff9800',  // 橘色確認按鈕
                cancelButtonColor: '#aaa',  // 灰色取消按鈕
                showLoaderOnConfirm: true,
                preConfirm: (code) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (code === '39') { 
                                resolve();
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Invalid code!',
                                    text: 'Try again',
                                    confirmButtonColor: '#3085d6', // 設置為藍色
                                    confirmButtonText: 'OK'
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
}).mount('#app2');
