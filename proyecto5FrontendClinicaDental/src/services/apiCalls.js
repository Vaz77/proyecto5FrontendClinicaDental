import axios from "axios";

export const loginUser = async (body) => {
    let res = await axios.post("http://localhost:3000/auth/login", body);
    return res.data.token;
};

export const logoutUser = async (body) => {
    let res = await axios.post("http://localhost:3000/auth/logout", body);
    return res.data.token;
};

export const registerUser = async (body) => {
    let res = await axios.post("http://localhost:3000/register", body);
    return res.data.token;
};

export const fetchUserData = async (token) => {
    try {
    const response = await axios.get("http://localhost:3000/profile", {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
    } catch (error) {
    console.error("Error al obtener los datos del usuario:", error);
    }
};

export const updateUserData = async (token, userData) => {
    try {
    const response = await axios.put(
        "http://localhost:3000/profile",
        userData,
        {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }
    );
    return response.data;
    } catch (error) {
    console.error("Error al actualizar los datos del usuario:", error);
    throw error;
    }
};

export const createAppointment = async (token, appointmentData) => {
    console.log(appointmentData)
    try {
    const response = await axios.post(
        "http://localhost:3000/appointments",
        appointmentData,
        {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }
    );
    return response.data;
    } catch (error) {
    console.error("Error al crear la cita:", error);
    }
};

export const fetchUserAppointments = async (token) => {
    try {
      const response = await axios.get('http://localhost:3000/appointments/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      return response.data.data;
      
    } catch (error) {
      console.error('Error al obtener las citas del usuario:', error);
      throw error;
    }
  };

export const updateAppointment = async (token, appointmentData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/appointments/${appointmentData.id}`,
        appointmentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: data,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la cita:', error);
      throw error;
    }
  };



  export const fetchAllAppointments = async (token, appointmentData) => {
    try {
      const response = await axios.get('http://localhost:3000/appointments/all', 
      appointmentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la cita:', error);
      throw error;
    }
  };


export const fetchAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/clients");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

  
  
  
