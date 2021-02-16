import { useEffect, useState } from "react"

async function fetchPosts() {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts")
	const data = await response.json()
	await (new Promise((resolve) => setTimeout(resolve, 5000)))
	return data
}

function AsyncData() {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(function() {
		(async function() {
			setIsLoading(true)
			const newPosts = await fetchPosts()
			setPosts(newPosts)
			setIsLoading(false)
		})()
	}, [])

	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<ul>
			{posts.map((post) => <li key={post.id}>{post.title}: {post.body}</li>)}
		</ul>
	)
}

export default AsyncData