import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { cx } from "linaria";
import { Photo } from "~/@types/google-photo";

interface ImageModalProps {
  onClose: () => void;
  image: Photo | null;
}

export const ImageModal = ({ onClose, image }: ImageModalProps) => {
  const gatsbyImage = getImage(image?.file as ImageDataLike);
  const showModal = !!image;

  if (!gatsbyImage) {
    return <></>;
  }

  return (
    <div
      className={cx("d-block modal fade", 
        showModal ? "visible show" : "invisible",
      )}
      id="galleryImageModal"
      tabIndex={-1}
      aria-labelledby="galleryImageModalLabel"
      aria-modal={showModal ? "true" : "false"}
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <GatsbyImage
              className="d-inline-block img-fluid"
              image={gatsbyImage}
              alt=""
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
