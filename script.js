var app = new Vue({
	el: '#app',
		data: {
		// Litres in a Gallon
		lpg: 4.546,
		// Pence per Litre
		ppl: 100,
		// Miles per Gallon
		mpg: 50,
		// Distance in Miles
		dim: 10,
	},
	computed: {
		// Price per Gallon
		ppg: function() {
			return (this.ppl * this.lpg / 100).toFixed(2)
		},
		// Price per Mile
		ppm: function() {
			return (this.ppg / this.mpg).toFixed(2)
		},
		jc: function() {
			var perMile = (this.ppl * this.lpg) / this.mpg
			var forJourney = perMile * this.dim
			return (forJourney / 100).toFixed(2)
		}
	}
})