import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";

function UploadFile() {
  const [image, setImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setImage({ ...image, previewUrl, file });
  };

  const handleUploadFile = async (e) => {
    e.preventDefault();

    try {
      if (!image.file) return alert("Vui lòng chọn file");
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", image.file);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        return alert("Upload file fail");
      }
      const data = await response.json();

      setImage({ ...image, previewUrl: data.location });
    } catch (e) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.previewUrl);
    };
  }, [image]);

  return (
    <Fragment>
      {isLoading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
      <form>
        <input onChange={handleChooseImage} type="file" name="image" />
        <button onClick={handleUploadFile}>Upload</button>
        <div>
          <h4>hiển thị xem trước ảnh</h4>
          {image.previewUrl && (
            <img width={300} height={200} alt="image" src={image.previewUrl} />
          )}
          {image?.previewUrl && <p>{image.previewUrl}</p>}
        </div>
      </form>
    </Fragment>
  );
}

export default UploadFile;

/**
 * -Yêu cầu: Chọn ảnh ==> Hiển thị xem trước
 * -Bấm upload sẽ tải lên server
 */
