import React, { useState } from "react";
import { CREATE_THREAD } from "../apollo/thread/actions";
import { useMutation } from "@apollo/client";
import ImportCard from "../molecules/ImportCard";
import Modal from "./Modal";

const ImportThread = () => {
  const [addRss, setAddRss] = useState(false);
  const [rssUrl, setRssUrl] = useState("");
  const [createThread] = useMutation(CREATE_THREAD);

  const _onSubmitRss = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    createThread({ variables: { url: rssUrl } })
      .then((response) => {
        // let thread = response.data.createThread;
        setRssUrl("");
        setAddRss(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const _onChangeRssUrl = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRssUrl(ev.target.value.trim());
  };

  return (
    <div>
      <h3>Import :</h3>
      <ImportCard
        onClick={() => setAddRss(!addRss)}
        title="RSS"
        description="Default news thread for most of websites."
      />

      <Modal active={addRss} toggle={setAddRss} title="Add a RSS thread">
        <form onSubmit={_onSubmitRss}>
          <p>Give RSS Url : </p>
          <input
            value={rssUrl}
            type="text"
            placeholder="url"
            className="input-text"
            onChange={_onChangeRssUrl}
          />
        </form>
      </Modal>
    </div>
  );
};

export default ImportThread;
