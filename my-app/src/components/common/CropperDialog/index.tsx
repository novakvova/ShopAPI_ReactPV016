import classNames from "classnames";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import "./style.css";
import { ICroppedModal } from "./types";

const CropperDialog: React.FC<ICroppedModal> = ({ touched = false }) => {
  console.log("View Modal");

  const [show, setShow] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(); //посилання на тег img в модалці

  const [currentImage, setCurrentImage] = useState<string>(
    "https://cdn3.iconfinder.com/data/icons/photo-tools/65/select-512.png"
  );

  const [cropperObj, setCropperObj] = useState<Cropper>();

  useEffect(() => {
    if(imgRef.current)
    {
        const cropper = new Cropper(imgRef.current as HTMLImageElement, {
            viewMode: 1,
            aspectRatio: 1/1,
            // preview: imgPrevRef.current
        });
        setCropperObj(cropper);
    }
  },[]);

  const handleSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length) {
        const file = files[0];
        if (/^image\/\w+/.test(file.type)) {
            const url = URL.createObjectURL(file);
            await toggleModal();
            await setImage(url);
            cropperObj?.replace(url);
        }
    }
    else {
        alert("Оберіть файл зображення");
      }
      e.target.value="";
  };

  const toggleModal = async () => {
    await setShow((prev)=>!prev);
  }

  const handleCroppedImage = async () => {
    const base64 = cropperObj?.getCroppedCanvas().toDataURL() as string;
    cropperObj?.getCroppedCanvas().toBlob(async (data)=> {
        console.log("data blob", data);
    });
    await setCurrentImage(base64);
    await toggleModal();
    //await onChange(field, base64);
  }

  return (
    <>
      <label htmlFor="imageFile">
        <img src={currentImage} style={{ cursor: "pointer" }} width="150" />
      </label>
      <input
        type="file"
        className="d-none"
        id="imageFile"
        accept="image/*"
        onChange={handleSelectImage}
      />

      <div
        className={classNames("modal", { "custom-modal": show })}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Обрізати фото</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="d-flex justify-content-center">
                    <img
                      src={image}
                      alt="Вибрана фотка"
                      width="100%"
                      ref={imgRef as LegacyRef<HTMLImageElement>}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={toggleModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"
                onClick={handleCroppedImage}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropperDialog;
