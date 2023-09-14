import React from 'react'
import ReactQuill from "react-quill";


function Editor({value,onChange}) {
    const modules ={
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
  return (
    <ReactQuill value={value} modules={modules} 
    theme={'snow'}
    formats={formats} onChange={onChange} />
  )
}

export default Editor