export default {
    data() {
        return {};
    },
    methods: {
        async callApi(method, url, dataObj) {
            try {
                // Send request
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                });
            } catch (e) {
                return e.response;
            }
        },

        // these are alert messages
        info(desc, title = "Hey") {
            this.$Notice.info({
                title: title,
                desc: desc ? desc : "Default message "
            });
        },
        success(desc, title = "Great !") {
            this.$Notice.success({
                title: title,
                desc: desc ? desc : "Default message "
            });
        },
        warning(desc, title = "Oops!!") {
            this.$Notice.warning({
                title: title,
                desc: desc ? desc : "Default message "
            });
        },
        error(desc, title = "Oops!") {
            this.$Notice.error({
                title: title,
                desc: desc ? desc : "Default message "
            });
        },
        somethingWentWrong(desc, title = "OOPPs!!") {
            this.$Notice.error({
                title: title,
                desc: desc ? desc : "Something went Wrong !!! "
            });
        }
    }
};
