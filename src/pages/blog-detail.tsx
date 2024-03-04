import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { marked } from "marked";
import DOMPurify from "dompurify";
// import RouteComponentProps from "preact-router";

import Sidebar from "../components/Sidebar";

import styles from "../styles/blog-detail.module.css";

// interface BlogDetailProps extends RouteComponentProps<{ id: string }> {}
interface BlogDetailProps {
	id?: string;
}

const BlogDetail: FunctionComponent<BlogDetailProps> = (props) => {
	const { id } = props;

	const [htmlContent, setHtmlContent] = useState<string>("");

	useEffect(() => {
		const fetchBlogContent = async () => {
			const filePath = `/public/blog/${id}.md`;
			try {
				const response = await fetch(filePath);
				const markdown = await response.text();
				const html = DOMPurify.sanitize(marked.parse(markdown) as string); // Convert Markdown to HTML
				setHtmlContent(html);
			} catch (error) {
				console.error("Failed to fetch blog content:", error);
				setHtmlContent("");
			}
		};

		fetchBlogContent();
	}, [id]);

	// @ts-ignore
	return (
		<div className={styles.container}>
			<Sidebar />
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: Sanitized the blog in the useEffect() */}
			<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
		</div>
	);
};

export default BlogDetail;
