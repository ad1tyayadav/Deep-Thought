import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({ name, label, control, defaultvalue = "" }) {

    const apikey = import.meta.env.VITE_TINY_KEY
    return (
        <div className='w-[100%] h-[8vh] pb-20'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || 'content'}
                control={control} // Ensure control is passed
                defaultValue={defaultvalue}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        apiKey={apikey}
                        value={value} // Ensure value is passed
                        init={{
                            height: 274,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange} />
                )}
            />
        </div>
    )
}

export default RTE
