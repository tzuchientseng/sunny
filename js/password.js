const app = Vue.createApp({
    data() {
        return {
            showInfoSection: false,
            isButtonsVisible: false
        };
    },
    methods: {
        toggleInfo() {
            this.showInfoSection = !this.showInfoSection;
        },
        showPasswordPrompt() {
            Swal.fire({
                title: 'Authentication',
                input: 'password',
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
                            if (code === 'pass') { 
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
                    window.location.href = 'skill/index.html';   
                }
            })
        },
        showButtons() {
            this.isButtonsVisible = !this.isButtonsVisible;
        },
        navigateTo(url) {
            window.location.href = url;
        }
    }
}).mount('#app');