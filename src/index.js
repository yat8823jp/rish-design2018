import Vue from 'vue'
import mainvisual from './components/top-mainvisual.vue'

var app = new Vue ( {
	el: "#app",
	components: { mainvisual },
	template: "<mainvisual></mainvisual>"
} );
