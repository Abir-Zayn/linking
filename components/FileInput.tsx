import Image from "next/image";

const FileInput =({
    id,
    label,
    accept,
    file,
    previewUrl,
    inputRef,
    onChange,
    onReset,
    type
} : FileInputProps) => {
    return (
       <section className="file-input">
           <label htmlFor={id}>
               {label}
           </label>

           <input
            type='file'
            id ={id}
            accept={accept}
            ref={inputRef}
            onChange={onChange}
            hidden
           />

           {
               !previewUrl ? (
                   <figure onClick={()=> inputRef.current?.click()}>
                       <Image src = "/assets/icons/upload.svg"
                               alt = "upload icon"
                               width={25} height={25}
                       />
                       <p>Click to Upload your {id}.</p>
                   </figure>
               ) : (
                   <div>
                       {
                           type === 'video'
                               ? <video src={previewUrl} controls/>
                               : <Image src={previewUrl} alt="image" fill/>

                       }

                       <button>
                           <Image src='assets/icons/close.svg' alt ='close' width={25} height={16}/>
                       </button>
                       <p>{file?.name}</p>
                   </div>
               )
           }

       </section>
    )
}
export default FileInput;