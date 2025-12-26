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
      <code className="text-gray-800 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono wrap-break-word">
        {children}
      </code>
    );
  }

  // Code block with syntax highlighting using bright material-palenight
  return (
    <div className="my-4 sm:my-6 rounded-lg overflow-x-auto -mx-4 sm:mx-0 sm:w-[300px]">
      <Code theme="material-palenight" lang={language}>
        {codeString}
      </Code>
    </div>
  );
}
