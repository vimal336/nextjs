import DateObject from "react-date-object";

const getAuthToken = () => {
  try {
    return localStorage.getItem("authToken"); 
  } catch (error) {
    console.error("Failed to retrieve auth token:", error);
    return null;
  }
};

const dateFormatter = ({ date, format }) => {
  try {
    if (!date) {
      return date;
    }
    const $date = new Date(date);
    const result = new DateObject($date);
    return result.format(format);
  } catch (error) {
    console.log(error);
    return date;
  }
};

export { getAuthToken, dateFormatter };
