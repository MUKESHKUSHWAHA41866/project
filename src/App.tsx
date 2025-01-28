import React, { useState } from 'react';
import Split from 'react-split';
import Editor from './components/Editor';
import Preview from './components/Preview';
import PackageManager from './components/PackageManager';

const defaultCode = `function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello React!</h1>
      <p>Start editing to see your changes</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

function App() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold">React Code Editor</h1>
      </header>
      <div className="flex-1 flex">
        <div className="w-64 border-r">
          <PackageManager />
        </div>
        <div className="flex-1">
          <Split
            className="split h-full"
            direction="horizontal"
            sizes={[50, 50]}
            minSize={100}
          >
            <Editor code={code} onChange={(value) => setCode(value || '')} />
            <Preview code={code} />
          </Split>
        </div>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// import Split from 'react-split';
// import { Controlled as CodeMirror } from 'react-codemirror2';
// import { transform } from '@babel/standalone';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/javascript/javascript';

// const defaultCode = `function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Hello React!</h1>
//       <p>Start editing to see your changes</p>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);`;

// // PackageManager component for adding dependencies
// function PackageManager() {
//   const [packages, setPackages] = useState([]);
//   const [newPackage, setNewPackage] = useState('');

//   const handleAddPackage = () => {
//     if (newPackage) {
//       setPackages([...packages, newPackage]);
//       setNewPackage('');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-4">Package Manager</h2>
//       <input
//         type="text"
//         placeholder="Enter package name"
//         value={newPackage}
//         onChange={(e) => setNewPackage(e.target.value)}
//         className="border p-2 w-full mb-2"
//       />
//       <button
//         onClick={handleAddPackage}
//         className="bg-blue-500 text-white p-2 w-full mb-4 rounded"
//       >
//         Add Package
//       </button>
//       <ul>
//         {packages.map((pkg, index) => (
//           <li key={index} className="p-2 border-b">
//             {pkg}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Editor component for writing code
// function Editor({ code, onChange }) {
//   return (
//     <div className="h-full">
//       <CodeMirror
//         value={code}
//         options={{
//           mode: 'javascript',
//           theme: 'material',
//           lineNumbers: true,
//         }}
//         onBeforeChange={(editor, data, value) => onChange(value)}
//       />
//     </div>
//   );
// }

// // Preview component to render the code
// function Preview({ code }) {
//   const [error, setError] = useState(null);
//   const iframeRef = React.useRef(null);

//   React.useEffect(() => {
//     const iframe = iframeRef.current;
//     if (iframe) {
//       const renderCode = `
//         try {
//           ${transform(code, { presets: ['react', 'env'] }).code}
//         } catch (err) {
//           console.error(err);
//         }
//       `;

//       iframe.contentWindow.document.open();
//       iframe.contentWindow.document.write(`
//         <html>
//           <body>
//             <div id="root"></div>
//             <script>${renderCode}</script>
//           </body>
//         </html>
//       `);
//       iframe.contentWindow.document.close();
//     }
//   }, [code]);

//   return (
//     <div className="h-full bg-white border-l">
//       {error && <p className="text-red-500 p-2">{error}</p>}
//       <iframe
//         ref={iframeRef}
//         title="Preview"
//         className="w-full h-full border-none"
//       />
//     </div>
//   );
// }

// // Main App component
// function App() {
//   const [code, setCode] = useState(defaultCode);

//   return (
//     <div className="h-screen flex flex-col">
//       <header className="bg-gray-900 text-white p-4">
//         <h1 className="text-xl font-bold">React Code Editor</h1>
//       </header>
//       <div className="flex-1 flex">
//         <div className="w-64 border-r">
//           <PackageManager />
//         </div>
//         <div className="flex-1">
//           <Split
//             className="split h-full"
//             direction="horizontal"
//             sizes={[50, 50]}
//             minSize={100}
//           >
//             <Editor code={code} onChange={(value) => setCode(value || '')} />
//             <Preview code={code} />
//           </Split>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
