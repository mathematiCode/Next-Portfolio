import { Code } from 'bright';

interface MDXCodeBlockProps {
  children?: string;
  className?: string;
}

export default function MDXCodeBlock({
  children,
  className,
}: MDXCodeBlockProps) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';
  const codeString = String(children || '').replace(/\n$/, '');
  if (!match) {
    // Inline code
    return (
      <code className="text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  // Code block with syntax highlighting using bright material-palenight
  return (
    <div className="my-6 rounded-lg">
      <Code theme="material-palenight" lang={language}>
        {codeString}
      </Code>
    </div>
  );
}
