 export const toBase64 = (image) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        }).catch((err) => {
        });

    // const imgBase = await toBase64(image:File);

    // export const toBase64 = async (file) => {
    //     const imageMimeType = 'image/jpeg'
    //     const base64Image = await file
    //       .arrayBuffer()
      //     .then(buffer => buffer.toString('base64'))
      //   const image = `data:${imageMimeType};base64,${base64Image}`
      //   return image
      // }
      