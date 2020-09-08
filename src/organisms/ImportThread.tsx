import React, { useState } from "react";
import ImportCard from "../molecules/ImportCard";
import Modal from "./Modal";

const ImportThread = () => {
    const [addRss, setAddRss] = useState(false);

    return (
        <div>
            <h3>Import :</h3>
            <ImportCard onClick={() => setAddRss(!addRss)} title="RSS" description="Default news thread for most of websites." />
            
            <Modal active={addRss} toggle={setAddRss} title="Add a RSS thread">
                Amazing
            </Modal>
        </div>
    );
}

export default ImportThread;