import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

interface PreviewProps {
  code: string;
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const previewContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              ${code}
            </script>
          </body>
        </html>
      `;

      const iframe = iframeRef.current;
      iframe.srcdoc = previewContent;
    }
  }, [code]);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-800 text-white p-3 flex items-center">
        <Play className="w-5 h-5 mr-2" />
        <span className="font-semibold">Preview</span>
      </div>
      <div className="flex-1 bg-white">
        <iframe
          ref={iframeRef}
          title="preview"
          className="w-full h-full border-none"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
};

export default Preview;