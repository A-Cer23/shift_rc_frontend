import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.2.253:8080/shiftreports/";


const createShiftReport = (startDate, endDate, startTime, endTime) => {

    return axios.post(API_URL + "create", { 
        startDate, endDate, startTime, endTime
    }, {
        headers: authHeader()
    });
};

const getShiftReports = () => {

    const config = {
        headers: authHeader()
    }

    return axios.get(API_URL + "get", config)
}

const getShiftReportById = (id) => {

    const config = {
        params: {id: id},
        headers: authHeader()
    }

    return axios.get(API_URL + "getbyid", config);
};

const updateShiftReport = (startDate, endDate, startTime, endTime, id) => {


    const config = {
        params:{id: id},
        headers: authHeader()
    }


    return axios.put(API_URL + "update", {  
        startDate, endDate, startTime, endTime
    }, config);
}

const deleteShiftReport = (id) => {

    const config = {
        params:{id: id},
        headers: authHeader()
    }

    return axios.delete(API_URL + "delete", config);
}

const payPeriodRequest = (fromDate, toDate, wagePerHour) => {

    const config = {
        headers: authHeader(),
        data: {
            fromDate, toDate, wagePerHour
        }
    }

    return axios.get(API_URL + "payperiod", config)
}


const ShiftReportService = {
    createShiftReport,
    getShiftReports,
    getShiftReportById,
    updateShiftReport,
    deleteShiftReport,
};

export default ShiftReportService;