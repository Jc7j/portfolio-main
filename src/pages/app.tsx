import { Router } from "preact-router";

import BlogDetail from "./blog-detail";
import BlogListings from "./blog-listings";
import Homepage from "./home-page";

function App() {
	return (
		<Router>
			<Homepage path="/" />
			<BlogListings path="/blog" />
			<BlogDetail path="/blog/:id" />
		</Router>
	);
}

export default App;
