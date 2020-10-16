const posts =
[
	{
		title: "Post number one",
		author: "jim low lap hong",
		publish: "20th october 2020",
		imgPath: "boxer-.jpg",
		desc: "desc 1",
		link: "#",
		alt: "a female boxer boxing"
	},
	{
		title: "post number two",
		author: "jason liew jun xian",
		publish: "20th october 2020",
		imgPath: "code.jpg",
		desc: "desc 2",
		link: "#",
		alt: "a bunch of code that no one understands"
	}
]

const postsSect = document.querySelector(".posts")

for(let i = 0; i < posts.length; i++){
	let postStruct = 
	`
	<div class="post">
		<div class="head">
			<h2 class="title">
				<a href=${posts[i].link}>
					${posts[i].title}
				</a>
			</h2>
			<div class="author-publish">
				<p class="author">
					author: ${posts[i].author}
				</p>
				<p class="publish">
					published on ${posts[i].publish}
				</p>
			</div>
		</div>
		<div class="body">
			<img src="./images/${posts[i].imgPath}" alt="${posts[i].alt}">
		</div>
		<div class="desc">
			${posts[i].desc}
		</div>
		<hr />
	</div>
	`

	postsSect.innerHTML += postStruct
}