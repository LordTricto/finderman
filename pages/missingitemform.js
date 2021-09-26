import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Field from "../Components/Field/Field";
import ImageUpload from "../Components/ImageCard/ImageCard";
import Button from "../Components/Buttons/Button";
import StatusList from "../utils/statusList";
import ContactMethodList from "../utils/contactMethodList";

const ItemConfig = {
  reward: "",
  description: "",
};

const ItemExtraConfig = {
  status: "",
  contactMethod: "",
};

function MissingItemsForm() {
  const [info, setInfo] = useState({ ...ItemConfig });
  const [extraInfo, setExtraInfo] = useState({ ...ItemExtraConfig });
  const [image, setImage] = useState();
  const router = useRouter();
  const access_token = useSelector((state) => state.user.accessToken);

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleExtraConfig = (e) => {
    const { name, value } = e;
    setExtraInfo({
      ...extraInfo,
      [name]: value,
    });
  };
  const handleImgConfig = (e) => {
    setImage(e);
  };
  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (
      !info.reward === "-" ||
      !info.description === "-" ||
      !extraInfo.status === "-" ||
      !extraInfo.contactMethod === "-" ||
      !image === ""
    ) {
      return null;
    }
    apiInstance
      .post(
        "/api/v1/item/create",
        {
          reward: info.reward,
          description: info.description,
          status: extraInfo.status,
          contactMethod: extraInfo.contactMethod,
          image: image,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log("done");
        //Redirect
        setInterval(() => {
          router.push("/missingitems");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <>
        <div className="container">
          <div className="post_person_box">
            <h3 className="heading">Post Missing Item</h3>
            <p className="some_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quis excepturi corrupti, rem voluptatum ducimus.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="post_person_info">
                <Field
                  text="Reward"
                  type="text"
                  name="reward"
                  fieldType="Input"
                  func={(e) => handleConfig(e)}
                />

                <Field
                  text="Status"
                  type="text"
                  name="status"
                  fieldType="Select"
                  data={StatusList}
                  func={(e) => handleExtraConfig(e)}
                />

                <Field
                  text="Contact Method"
                  type="text"
                  name="contactMethod"
                  fieldType="Select"
                  data={ContactMethodList}
                  func={(e) => handleExtraConfig(e)}
                />
              </div>

              <Field
                text="Description"
                name="description"
                cols="30"
                rows="10"
                fieldType="TextArea"
                func={(e) => handleConfig(e)}
              />
              <div className="upload_images_section">
                <h3 className="heading">Upload Images</h3>
                <br />
                <div className="upload_image_container">
                  <ImageUpload
                    height="15rem"
                    width="15rem"
                    func={(e) => handleImgConfig(e)}
                  />

                  <ImageUpload
                    height="15rem"
                    width="15rem"
                    func={(e) => handleImgConfig(e)}
                  />

                  <ImageUpload
                    height="15rem"
                    width="15rem"
                    func={(e) => handleImgConfig(e)}
                  />

                  <ImageUpload
                    height="15rem"
                    width="15rem"
                    func={(e) => handleImgConfig(e)}
                  />
                </div>

                <Button
                  type="submit"
                  text="Post"
                  width="70%"
                  to="/subscription"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default MissingItemsForm;
