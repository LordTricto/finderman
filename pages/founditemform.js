import React from "react";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";

const ItemConfig = {
  policeStation: "",
};

const FoundItemsForm = () => {
  const [info, setInfo] = useState({ ...ItemConfig });
  const router = useRouter();
  const access_token = useSelector((state) => state.user.accessToken);

  const handleConfig = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!info.policeStation === "-") {
      return null;
    }
    apiInstance
      .post(
        "/api/v1/item/create",
        {
          policeStation: info.policeStation,
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
          router.push("/founditems");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="post_person_box">
          <h3 className="heading">Post Found Items</h3>
          <p className="some_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis
            excepturi corrupti, rem voluptatum ducimus.
          </p>
          {/* start of post_person_info */}
          <form onSubmit={handleFormSubmit} className="post_person_info">
            <div className="post_person_info">
              <Field
                text="Police Station Holding item"
                type="text"
                name="policeStation"
                fieldType="Input"
                func={(e) => handleConfig(e)}
              />
            </div>
            <Button
              type="submit"
              text="Post"
              width="70%"
              margin="2.5rem 0 0 0 "
            />
          </form>
          {/* end of post_person_info */}
        </div>
      </div>
    </>
  );
};

export default FoundItemsForm;
