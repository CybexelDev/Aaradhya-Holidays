import api from "./axiosInstance";


// export const getPlaces = async () => {
//   try {
//     const response = await api.get("/api/places/");
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// };


export const getTestimonials = async () => {
  try {
    const response = await api.get("/users/getTestimonials");
    return response.data.testimonials;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const getPackages = async () => {
  try {
    const response = await api.get("/users/getPackageData");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};

export const getVehicles = async () => {
  try {
    const response = await api.get("/users/getVahicleData");
    return response.data.vehicleData;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};

export const getVehicleDetails = async (id) => {
  try {
    const response = await api.get(`/users/vehicleDetails/${id}`);
    return response.data.vehicle;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};

export const getPackageDetails = async (id) => {
  try {
    const response = await api.get(`/users/packageDetails/${id}`);
    return response.data.package;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};


export const getSearchData = async () => {
  try {
    const response = await api.get("/users/getDurationAndLocation");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error.response?.data || error.message;
  }
};