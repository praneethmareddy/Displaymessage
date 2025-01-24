import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Code, useColorMode, VStack, Text } from '@chakra-ui/react';

// MessageDisplay component that renders markdown formatted content
const MessageDisplay = ({ message }) => {
  const { colorMode } = useColorMode();

  // Function to render markdown with customized code block handling
  const renderMarkdown = (text) => {
    return (
      <ReactMarkdown
        children={text}
        components={{
          code({ inline, children, ...props }) {
            // Inline code styling
            return inline ? (
              <Code {...props} fontSize="sm" fontFamily="monospace" borderRadius="md" sx={{ backgroundColor: 'gray.200', padding: '2px 6px' }}>
                {children}
              </Code>
            ) : (
              // Code block styling
              <Box
                position="relative"
                p={4}
                bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                borderRadius="md"
                width="100%"  // Ensure the block takes full width of the container
                overflowX="auto"  // Allow horizontal scrolling if needed
                maxWidth="100%"  // Prevent overflow beyond container
              >
                <Code
                  as="pre"
                  fontFamily="monospace"
                  fontSize="sm"
                  width="100%"
                  sx={{
                    whiteSpace: 'pre-wrap',  // Ensure long lines wrap
                    wordBreak: 'break-word', // Prevent overflow by breaking long words
                  }}
                >
                  {children}
                </Code>
              </Box>
            );
          },
        }}
      />
    );
  };

  return (
    <VStack align="start" spacing={4} p={4} border="1px solid #ddd" borderRadius="md" bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
      {/* Render the formatted markdown message */}
      {renderMarkdown(message)}
    </VStack>
  );
};

// Main App component that renders the formatted message
const App = () => {
  // Example message with markdown-formatted content (bold, italic, and code)
  const message = `
Here is an example response that includes different types of formatting:

1. **Bold text**: This is how you use **bold** in markdown.
2. *Italic text*: This is *italic* text.
3. Code block:
\`\`\`javascript
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5, 7)); // Output: 12
\`\`\`
4. Inline code: \`const a = 5;\`

You can format text like this in markdown!
`;

  return (
    <Box p={4}>
      <MessageDisplay message={message} />
    </Box>
  );
};

export default App;
