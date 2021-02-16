const data = [
	{id: "a", value: "foo"},
	{id: "b", value: "bar"},
	{id: "c", value: "foobar"}
]

function Loops() {
	return <ul>
		{data.map((item) => <li key={item.id}>{item.value}</li>)}
	</ul>
}

export default Loops