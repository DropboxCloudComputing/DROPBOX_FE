import React, { useState,Fragment } from "react";
import UploadComponent from "../components/UploadComponent";

const UploadContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return(
        <Fragment>
            <div>

            </div>
            <button onClick={openModal} className="flex">업로드</button>
            <UploadComponent open={modalOpen} close={closeModal} />
        </Fragment>
    );
};

export default UploadContainer;