const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Update the directory path to match your public/blog directory
const postsDirectory = path.join(process.cwd(), 'public', 'blog');
const filenames = fs.readdirSync(postsDirectory);

const transformDate = (dateStr) => {
  const dateObj = new Date(dateStr);
  const formattedDate = dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  }).replace(/ /g, ' ');
  
  return formattedDate.replace(',', "'");
};

const blogsMetadata = filenames.map((filename) => {
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return {
    title: data.title,
    date: transformDate(data.date),
    slug: filename.replace(/\.md$/, ''),
  };
});

// Save this to a file or export it to be used by your Preact components
fs.writeFileSync('src/blogsMetadata.json', JSON.stringify(blogsMetadata));
