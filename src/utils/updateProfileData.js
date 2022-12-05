import profileData from "../data/profileData";

const updateProfileData = (profile_data_field) => (user_input) => {
  profileData[profile_data_field] = user_input;
  console.log(JSON.stringify(profileData, null , 4));
  console.log("====")
};

export default updateProfileData;