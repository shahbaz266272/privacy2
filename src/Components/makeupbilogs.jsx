import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const MakeupBilog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedfile, setSelectedfile] = useState(null);
  const handleImageChange = (event) => {
    setSelectedfile(event.target.files[0]);
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const [showquotes, setshowquotes] = useState(false);
  const [showcategory, setshowcategory] = useState(false);
  const [category, setcategory] = useState("");
  const [formData, setformData] = useState({
    blogtitle: "",
    blogdescription: "",
    category: "",
  });
  const [AllCategories, setAllCategories] = useState([]);
  const [islaoding, setislaoding] = useState(false);
  const addcategory = (e) => {
    e?.preventDefault();
    setislaoding(true);
    axios
      .post(
        "https://makeupbilog.vercel.app/api/categories/add",
        {
          category: category,
        }
      )
      .then((res) => {
        getAllCategories();
        console.log(res);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
        setislaoding(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err?.response.data.message}`,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        setislaoding(false);
      });
  };

  const getAllCategories = () => {
    axios
      .get(
        "https://makeupbilog.vercel.app/api/categories/all?page=1&limit=1000"
      )
      .then((res) => {
        console.log(res);
        setAllCategories(res?.data?.data?.docs);
        setformData({
          ...formData,
          category: res?.data?.data?.docs[0]?.category,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(formData);
  const AddQuotes = () => {
     setislaoding(true);
    const params = new FormData();
    params?.append("blogTitle", formData?.blogtitle);
    params?.append("blogdescription", formData?.blogdescription);
    // params?.append("categoryName", formData?.category);
    params?.append("file", selectedfile);

    axios
      .post(
        "https://makeupbilog.vercel.app/api/blogs/add",
        params
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
        setislaoding(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err?.response.data.message}`,
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        setislaoding(false);
      });
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1> Makeup Blogs Dashboard</h1>
      {/* <section>
        <input
          type="checkbox"
          name="quotecheck"
          checked={showcategory}
          id=""
          onClick={() => {
            setshowcategory((prev) => !prev);
            setshowquotes(false);
          }}
        />
        Upload Categories
      </section>
      {showcategory && (
        <section style={{ marginTop: "0.5rem" }}>
          <label for="cars">Add a category:</label>
          <br />
          <form onSubmit={addcategory}>
            <input
              type="text"
              name="category"
              id=""
              style={{ padding: "0.5rem" }}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
            <br></br>
            {islaoding ? (
              <small>Adding...</small>
            ) : (
              <input
                type="submit"
                value="Submit"
                style={{ marginTop: "0.5rem" }}
              />
            )}
          </form>
        </section>
      )} */}
      <section>
        <input
          style={{ marginTop: "3rem", marginBottom: "1rem" }}
          type="checkbox"
          name="quotecheck"
          checked={showquotes}
          id=""
          onClick={() => {
            setshowquotes((prev) => !prev);
            setshowcategory(false);
          }}
        />
        Upload Blogs
      </section>
      {showquotes && (
        <section>
          {/* <label for="cars">Choose a category:</label> */}
          <br />
          <div >
            {/* <select
              name="cars"
              id="cars"
              style={{ width: "12rem", height: "2rem", marginBottom: "2rem" }}
              onChange={(e) => {
                console.log(e?.target?.value);

                setformData({
                  ...formData,
                  category: e?.target?.value,
                });
              }}
            >
              {AllCategories?.length > 0 ? (
                AllCategories?.map((data) => (
                  <option value={data?.category}>{data?.category}</option>
                ))
              ) : (
                <small>No categories found!</small>
              )}
            </select>
            <br></br> */}

            <div className="">
              <label for="cars">Cover Picture:</label>
              <br />
              <br />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="profilePicture"
                name="profilePicture"
                className="formfields"
                style={{ height: 50 }}
              />
              <div>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Preview"
                    width={300}
                    height={100}
                    className="rounded-[10px] mb-2"
                  />
                )}
              </div>
            </div>

            <br></br>
            <label htmlFor="profilePicture">Title:</label>

            <br></br>
            <input
              type="text"
              name="blogtitle"
              id=""
              style={{ padding: "0.5rem" }}
              onChange={(e) => {
                setformData({
                  ...formData,
                  blogtitle: e?.target?.value,
                });
              }}
            />
            <br></br>
            <label htmlFor="profilePicture">Description:</label>

            <br></br>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              onChange={(e) => {
                console.log(e?.target?.value);

                setformData({
                  ...formData,
                  blogdescription: e?.target?.value,
                });
              }}
            />
            <br></br>
            {islaoding ? (
              <small>Adding...</small>
            ) : (
              <input
              type="submit"
                onClick={() => AddQuotes()}
                value="Submit"
                style={{ marginTop: "0.5rem" }}
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default MakeupBilog;
