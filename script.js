var app = new Vue({
    el: '#app',
    data: {
        principle: 0,
        rate: 0,
        time: 0,
        simpleinterest:0 ,
        emi: 0
    },
    methods: {
        calculateResults: function () {
            this.calsi();
            this.calculateEMI();
        },
        calsi: function () {
            // Add error handling for negative values or other invalid inputs
            if (this.principle < 0 || this.rate < 0 || this.time < 0) {
                alert('Please enter valid values.');
                return;
            }
            this.simpleinterest = (this.principle * this.rate * this.time) / 100;
        },
        calculateEMI: function () {

            // Add error handling for negative values or other invalid inputs
            if (this.principle < 0 || this.rate < 0 || this.time < 0) {
                alert('Please enter valid values.');
                return;
            }

            // Convert annual rate to monthly rate
            let monthlyRate = this.rate / (12 * 100);

            // Convert loan tenure from years to months
            let totalPayments = this.time * 12;

            // Calculate EMI using the formula
            this.emi =
                (this.principle * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
                (Math.pow(1 + monthlyRate, totalPayments) - 1);
        }
    }
});
