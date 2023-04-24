import React, { useState } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="body">
      <h1 className="formheading">Profile Settings</h1>
      <div className="formbody">
        <form onSubmit={handleSubmit}>
          <label className="formlabel">
            Name:&nbsp;&nbsp;
            <input
              className="formInput"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label className="formlabel">
            Email:&nbsp;&nbsp;
            <input
              className="formInput"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label className="formlabel">
            Password:&nbsp;&nbsp;
            <input
              className="formInput"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <label className="formlabel">
            Profile Picture:&nbsp;&nbsp;
            <input
              className="formInput"
              type="file"
              value={profilePicture}
              onChange={handleProfilePictureChange}
            />
          </label>
          <br />
          <div class="button-container">
            <button className="formbutton">Cancel</button>
            <button className="formbutton" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;


// import React, { useState } from "react";
// import "./UserProfile.css";
// import { useNavigate } from "react-router";

// function UserProfile() {
//   const [credentials, setCredentials] = useState({ email: "", password: "",name:""});
//   const [profilePic, setProfilePic] = useState(null);
//   let navigate = useNavigate();

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value })
//   }
   
//   const handleUpload  = (e)=>{  
//     e.preventDefault();
//     upload(
//       {file : img, label :'profilePic'}
//     )
//   }

//   const upload = (item)=>{
//      const filename = new Date().getTime() + item.label + item.file.name;
//      const uploadTask = storage.ref(`/items/${filename}`).put(item.file);
//      uploadTask.on("state_changed",
//      (snapshot)=>{
//          console.log(snapshot);
//          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//          console.log("Upload is " + progress + "% done.");
//       },
//       (err)=>{
//          console.log(err);
//       },
//       ()=>{
//          uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
//              setProfilePicture((prev)=>{
//                  return { ...prev, [item.label]: url};
//              });
//              setuploaded((prev)=> prev+1);
//          });
//       }
//       );
//  }

//   const handleSubmit =async (event) => {
//     event.preventDefault();
//     // Handle form submission
//     const url = "API_URL";
//       const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password,profilePic:profilePic })
//     });
//     const json = await response.json()
//     console.log(json);
//     if (json.success) { // if success
//       //redirect
//       props.showAlert('Account Created Successfully','success');
//       localStorage.setItem('token', json.authToken);  //athentication token to be taken from jwt
//       navigate('/');
//     }
//     else {
//       props.showAlert(json.error,"danger");
//     }
//   };
  
//   return (
//     <div className="body">
//       <h1 className="formheading">Profile Settings</h1>
//       <div className="formbody">
//         <form onSubmit={handleSubmit}>
//           <label className="formlabel">
//             Name:&nbsp;&nbsp;
//             <input type="text" id="name" name='name' className="form-control" onChange={onChange} required  minLength={3}/>
//           </label>
//           <br />
//           <label className="formlabel">
//             Email:&nbsp;&nbsp;
//             <input type="email" id="email" className="form-control" name="email" onChange={onChange} required/>
//           </label>
//           <br />
//           <label className="formlabel">
//             Password:&nbsp;&nbsp;
//             <input type="password" name='password' className="form-control" id="password" onChange={onChange} required minLength={5}/>
//           </label>
//           <br />
//           <label className="formlabel">
//             Profile Picture:&nbsp;&nbsp;
//             <input className="formInput" type="file" name="profilePicture" onChange={(e)=>{setProfilePic(e.target.files[0])}}/>
//           </label>
//           <br />
//           <div class="button-container">
//             <button className="formbutton">Cancel</button>
//             <button className="formbutton" type="submit">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

