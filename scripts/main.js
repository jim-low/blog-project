import posts from './../data.js'
const postsCont = document.querySelector('.posts')
const recentPostCont = document.querySelector(".recent-post")

for (let i = 0; i < posts.length; i++) {
	let postStruct = `
	<div class="post" title=${posts[i].title}>
		<a href="${posts[i].link}" class="link">
			<div class="img-desc">
				<img src="images/code.jpg" alt="">
				<p class="desc">
					${posts[i].desc}
				</p>
			</div>
			<div class="title">
				<h2>${posts[i].title}</h2>
				<p>written by: ${posts[i].author}</p>
			</div>
		</a>
	</div>
	`

	postsCont.innerHTML += postStruct

	if(i >= posts.length - 4) {
		let recentPostStruct = `
		<div class="post">
			<img src="images/boxer-.jpg" alt="">
			<h3 class="title">${posts[i].title}</h3>
			<p class="desc">
				${posts[i].desc}
			</p>
		</div>
		`

		recentPostCont.innerHTML += recentPostStruct
		console.log(i)
		
	}
}

document.querySelectorAll(".posts .post").forEach(post => {
	post.style.cssText = "height: " + 100/posts.length + "%"
})