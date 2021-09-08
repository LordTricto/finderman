import Field from "../Components/Field/Field";
import ImageUpload from "../Components/ImageCard/ImageCard";
import Button from "../Components/Buttons/Button";
function updateMissingItem() {
  return (
    <>
      <div className="container">
        <div className="post_person_box">
          <h3 className="heading">Update Missing Item Details</h3>
          <p className="some_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis
            excepturi corrupti, rem voluptatum ducimus.
          </p>

          <form action="" id>
            <div className="post_person_info">
              <Field
                text="Category"
                type="text"
                name="category"
                fieldType="Select"
                dropDown
              />
              <Field
                text="Sub-Category"
                type="text"
                name="subCategory"
                fieldType="Select"
                dropDown
              />
              <Field
                text="Name of item"
                type="text"
                name="nameOfItem"
                fieldType="Input"
              />
              <Field
                text="Address"
                type="text"
                name="address"
                fieldType="Input"
              />
              <Field text="Email" type="text" name="email" fieldType="Input" />

              <Field
                text="State"
                type="text"
                name="state"
                fieldType="Select"
                dropDown
              />
              <Field
                text="Phone Number"
                type="text"
                name="phoneNumber"
                fieldType="Input"
              />
              <Field
                text="Local Government"
                type="text"
                name="localGovernment"
                fieldType="Select"
                dropDown
              />
              <Field
                text="Reward:"
                type="text"
                name="reward"
                fieldType="Input"
              />
              <Field
                text="Status"
                type="text"
                name="status"
                fieldType="Select"
                dropDown
              />
              <Field
                text="Police Station to report missing item:"
                type="text"
                name="policeStation"
                fieldType="Input"
              />
              <Field
                text="Contact Method"
                type="text"
                name="contactMethod"
                fieldType="Select"
                dropDown
              />
            </div>

            <Field
              text="Description"
              name="description"
              cols="30"
              rows="10"
              fieldType="TextArea"
            />
          </form>
        </div>
        <div className="upload_images_section">
          <h3 className="heading">Upload Images</h3>
          <br />
          <div className="upload_image_container">
            <ImageUpload height="15rem" width="15rem" />

            <ImageUpload height="15rem" width="15rem" />

            <ImageUpload height="15rem" width="15rem" />

            <ImageUpload height="15rem" width="15rem" />
          </div>

          <Button type="submit" text="Post" width="70%" to="/editUpload" />
        </div>
      </div>
    </>
  );
}

export default updateMissingItem;
