import profileData from "../data/profileData";

const updateProfileData = (profile_data_field) => (user_input) => {
  // Check if profile_Data_field is an array -> check if array contains item already
  // If contains -> delete (?)
  // If doesnt contain - push to array

  Object.assign(profileData, { [profile_data_field]: user_input });
  console.log(profileData);
};

export default updateProfileData;
