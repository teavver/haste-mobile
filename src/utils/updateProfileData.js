import profileData from "../data/profileData";

const updateProfileData = (profile_data_field) => (user_input) => {
  Object.assign(profileData, { [profile_data_field]: user_input });
  console.log(profileData);
};

export default updateProfileData;
