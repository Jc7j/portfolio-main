import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { marked } from "marked";
import DOMPurify from "dompurify";

import Sidebar from "../components/Sidebar";

import styles from "../styles/blog-detail.module.css";

const BlogDetail: FunctionComponent = () => {
	const url = window.location.href;
	const blogSlug = url.substring(url.lastIndexOf("/blog/") + "/blog/".length);

	const [htmlContent, setHtmlContent] = useState<string>("");

	useEffect(() => {
		const fetchBlogContent = async () => {
			const filePath = `/blog/${blogSlug}.md`;
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
	}, [blogSlug]);

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
