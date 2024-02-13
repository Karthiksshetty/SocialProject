import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../../Server/Config/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import storageSetter from "./Storage";
import uploadFile from "../../../../Server/database/UploadFile";

function Student_Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      // Set loading to true
      setLoading(true);

      // Save the form data to Firestore
      console.log(data);
      const {
        address,
        adhaar,
        firstname,
        adhaarimg,
        collegeidimg,
        collegename,
        course,
        dob,
        from,
        lastname,
        mobile,
        photoimg,
        tos,
      } = data;
      const adhaarImgRef = storageSetter(adhaarimg[0], "Aadhar");
      const collegeIdImgRef = storageSetter(collegeidimg[0], "College");
      const photoImgRef = storageSetter(photoimg[0], "Photo");

      const AadharImageUrl = await uploadFile(adhaarimg[0], adhaarImgRef);
      const collegeIdImgUrl = await uploadFile(
        collegeidimg[0],
        collegeIdImgRef
      );
      const photoImgUrl = await uploadFile(photoimg[0], photoImgRef);

      const studentData = {
        address,
        adhaar,
        firstname,
        AadharImageUrl,
        collegeIdImgUrl,
        photoImgUrl,
        collegename,
        course,
        dob,
        from,
        lastname,
        mobile,
        tos,
      };

      const studentCollection = collection(db, "Students");
      await addDoc(studentCollection, studentData);
      console.log("done");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Set loading back to false, whether success or error
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl p-6 pt-5 mx-auto rounded-md shadow-md bg-blue-500 mt-20 col-md-6 mb-8">
      <h1 className="text-xl text-center font-bold  text-white capitalize dark:text-white ">
        Student Information and details for bus pass
      </h1>
      <br />
      <br />
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
        <div className="grid grid-cols-1 gap-6 md-3 sm:grid-cols-2">
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              className={`w-full px-4 py-2 bg-white text-gray-700 border'
                      } rounded`}
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Please enter your First Name.",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "please enter Valid Name",
                },
              })}
            />
            <p className="text-red-800">{errors.firstname?.message}</p>
          </div>

          <div>
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              className={`w-full px-4 py-2 bg-white text-gray-700 border' rounded`}
              {...register("lastname", {
                required: {
                  value: false,
                  // message:"Please enter your Last Name."
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "please enter Valid Name",
                },
              })}
            />
            <p className="text-red-800">{errors.lastname?.message}</p>
          </div>

          <div>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("mobile", {
                required: {
                  value: true,
                  message: "Please enter your Mobile Number.",
                },
                pattern: {
                  value: /^[0-9]+$/i,
                  // message:"please enter Valid Name"
                },
                minLength: {
                  value: 10,
                  message: "Please enter 10 digit phone number",
                },
                maxLength: {
                  value: 10,
                  message: "Your number is more than 10 digit",
                },
              })}
            />
            <p className="text-red-800">{errors.mobile?.message}</p>
          </div>

          <div>
            <input
              type="number"
              name="adhaar"
              placeholder="Adhaar Number"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("adhaar", {
                required: {
                  value: true,
                  message: "Please enter your Adhaar Number .",
                },
                minLength: {
                  value: 16,
                  message: "Please enter 16 digit Adhaar Number",
                },
                maxLength: {
                  value: 16,
                  message: "Your Adhaar Number is more than 16 digit",
                },
              })}
            />
            <p className="text-red-800">{errors.adhaar?.message}</p>
          </div>

          <div>
            <textarea
              name="address"
              type="textarea"
              placeholder="Address"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("address", {
                required: {
                  value: true,
                  message: "Please enter your Address .",
                },
              })}
              defaultValue={""}
            />
            <p className="text-red-800">{errors.address?.message}</p>
          </div>

          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("dob", {
                required: {
                  value: true,
                  message: "Please enter your Date of Birth .",
                },
              })}
            />
            <p className="text-red-800">{errors.dob?.message}</p>
          </div>

          <div>
            <input
              type="text"
              name="collegename"
              placeholder="College name"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("collegename", {
                required: {
                  value: true,
                  message: "Please enter your College Name .",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "please enter Valid College Name",
                },
              })}
            />
            <p className="text-red-800">{errors.collegename?.message}</p>
          </div>

          <div>
            <input
              type="text"
              name="course"
              placeholder="Course/Class"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("course", {
                required: {
                  value: true,
                  message: "Please enter your Course/Class Name.",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "please enter Valid Course Name",
                },
              })}
            />
            <p className="text-red-800">{errors.course?.message}</p>
          </div>

          <div></div>
          <div></div>

          <h2 className="text-center font-bold text-white  dark:text-gray-200">
            Bus Range To Travel
          </h2>

          <div></div>

          <div>
            <input
              name="from"
              type="text"
              placeholder="From"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("from", {
                required: {
                  value: true,
                  message: "Please enter your Pickup point .",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "please enter City name properly",
                },
              })}
            />
            <p className="text-red-800">{errors.from?.message}</p>
          </div>

          <div>
            <input
              type="text"
              name="tos"
              placeholder="To"
              className={`w-full px-4 py-2 bg-white text-gray-700 border rounded`}
              {...register("tos", {
                required: {
                  value: true,
                  message: "Please enter your Drop point .",
                },
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: "please enter City name properly",
                },
              })}
            />
            <p className="text-red-800">{errors.tos?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Adhaar Card
            </label>
            <input
              type="file"
              name="adhaarimg"
              className="mb-2"
              {...register("adhaarimg", {
                required: {
                  value: true,
                  message: "Please Attach your Adhaar Card .",
                },
              })}
            />
            <p className="text-red-800">{errors.adhaarimg?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Passport Photo
            </label>
            <input
              type="file"
              name="photoimg"
              className="mb-2"
              {...register("photoimg", {
                required: {
                  value: true,
                  message: "Please Attach your Passport Photo.",
                },
              })}
            />
            <p className="text-red-800">{errors.photoimg?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              College Id
            </label>
            <input
              type="file"
              name="collegeidimg"
              className="mb-2"
              {...register("collegeidimg", {
                required: {
                  value: true,
                  message: "Please Attach your College ID card.",
                },
              })}
            />
            <p className="text-red-800">{errors.collegeidimg?.message}</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-red-900 capitalize text-center">
          CONDITIONS / REQUIREMENTS
        </h2>
        <br />
        <ul>
          <li className="dark:text-red-900">
            1 Fee Receipt or Student ID Card Xerox Copy.
          </li>
          <li className="dark:text-red-900">
            2 Student Aadhar Card Xerox Copy.
          </li>
          <li className="dark:text-red-900">
            3 Two Passport Size Photos and Photo with School/College Seal
            Compulsory.
          </li>
          <li className="dark:text-red-900">
            4 Distance 65 Kms. Only and Student above 27 years age is not
            eligible for Concession Pass.
          </li>

          <li className="dark:text-red-900">
            5 Open University Correspondence Courses, Computer Courses Student's
            are not eligible for Concession Pass. (Only One year above Courses)
          </li>

          <li className="dark:text-red-900">
            6 Evening College Students should separately mention in Block
            Letters. i.e. "EVENING COLLEGE".
          </li>

          <li className="dark:text-red-900">
            7 In case of refusing to accept this Student Pass by any Bus staff,
            please complain to the nearest Police/RTO
          </li>
        </ul>
        <div className="flex justify-end mt-6">
          <button
            className="w-6/6 px-auto mx-auto py-2 leading-5 border-2 border-blue-600 
                  bg-blue-900 rounded-lg px-3  text-white-600 
                  hover:bg-blue-400 text-blue-200 hover:border-blue-900"
            type="submit"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Student_Form;
