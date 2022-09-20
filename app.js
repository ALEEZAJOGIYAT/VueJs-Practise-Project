const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			title: "Forty Rules of Love",
			education: "BS-Honours",
			age: 23,
			books: [
				{ title: "Dark Ages", author: "ELSA KAZI" },
				{ title: "Dark Circle", author: "ELSA Kareem" },
				{ title: "Dark Square", author: "ELSA " },
				{ title: "Dark Era", author: "ELSA " },
			],
			url: "https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3",
		};
	},
	methods: {
		add() {
			this.age = 10;
			console.log("event triggered");
		},
		changeTitle(title) {
			this.title = title;
		},
		toggleBtn() {
			this.showBooks = !this.showBooks;
		},
	},
});
app.mount("#heading");

///template is a template of strings wherewe write html code
// v-on called directives that we used in vue
// v is for view and on describes what event to trigger
