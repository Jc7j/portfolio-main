import { Router } from "preact-router";
import BlogDetail from "./blog-detail";
import Homepage from "./home-page";

function App() {
	return (
		<Router>
			<Homepage path="/" />
			<BlogDetail path="/blog/:id" />
		</Router>
	);
}

export default App;
