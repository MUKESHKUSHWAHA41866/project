import React, { useEffect, useRef } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Code2 } from 'lucide-react';

interface EditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
}

const Editor: React.FC<EditorProps> = ({ code, onChange }) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    let timeoutId: number;
    const handleResize = () => {
      if (editorRef.current) {
        // Debounce layout updates
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          editorRef.current.layout();
        }, 0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <div className="h-full flex flex-col pl-4">
      <div className="bg-gray-800 text-white p-3 flex items-center">
        <Code2 className="w-5 h-5 mr-2" />
        <span className="font-semibold">Editor</span>
      </div>
      <div className="flex-1">
        <MonacoEditor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={onChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default Editor;