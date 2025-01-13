'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudResult {
    public_id: string;
}
const UploadPage
 = () => {
    
// const [publicId, setPublicId] = useState('');
  return (
    <>
    <h1>Upload Removed</h1>
    {/* {publicId && <CldImage src={publicId} width={270} height={180} alt='image'></CldImage>}
    <CldUploadWidget 
    options={{
        sources: ['local'],
        multiple: false,
        maxFiles: 5
    }}
    uploadPreset='test-preset-next-app'
        onSuccess={(result, widget) => {
            if (result.event !== 'success') return;
            const info = result.info as CloudResult;
            setPublicId(info.public_id);
        }}>
        {({ open }) => <button className='btn btn-primary'
        onClick={() => open()}>Upload</button>}
    </CldUploadWidget> */}
    </>
  )
}

export default UploadPage
