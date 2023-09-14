import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownViewer({ markdownFileURL }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the Markdown content
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownFileURL);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.text();
        setMarkdownContent(data);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [markdownFileURL]);

  return (
    <div>
      {/* Render the Markdown content using ReactMarkdown */}
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
