import adminApi from "./adminApiInstance";
import api from "./axiosInstance";

export const getCategory = async () => {
  const response = await adminApi.get("/admin/getCategory");
  return response.data;
};

export const addCategory = async (categoryName) => {
  const response = await adminApi.post("/admin/addCategory", {
    categoryName,
  });

  return response.data;
};
export const deleteCategory = async (id) => {
  const response = await adminApi.delete(`/admin/deleteCategory/${id}`);
  return response.data;
};

export const updateCategory = async (id, categoryName) => {
  const response = await adminApi.put(`/admin/updateCategory/${id}`, {
    categoryName,
  });

  return response.data;
};

export const addVehicle = async (vehicleData) => {
  const response = await adminApi.post("/admin/addVehicleData", vehicleData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};



export const getVehicle = async () => {
  const response = await adminApi.get("/admin/getVahicleData");
  return response.data;
};

export const updateVehicle = async (id, vehicleData) => {
  const response = await adminApi.put(
    `/admin/updateVehicle/${id}`,
    vehicleData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await adminApi.delete(`/admin/deleteVehicle/${id}`);
  return response.data;
};

export const getPackage = async () => {
  const response = await adminApi.get("/admin/getPackageData");
  return response.data;
};

export const addPackage = async (data) => {
  const response = await adminApi.post("/admin/addPackage", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updatePackage = async (id, data) => {
  const response = await adminApi.put(`/admin/updatePackage/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await adminApi.delete(`/admin/deletePackage/${id}`);
  return response.data;
};

export const adminLogin = async (data) => {
  const response = await api.post("/admin/adminLogin", data);
  return response.data;
};

export const getTestimonials = async () => {
  const response = await adminApi.get("/admin/getTestimonials");
  return response.data;
};

export const addTestimonial = async (data) => {
  const response = await adminApi.post("/admin/addTestimonial", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteTestimonial = async (id) => {
  const response = await adminApi.delete(`/admin/deleteTestimonial/${id}`);
  return response.data;
};