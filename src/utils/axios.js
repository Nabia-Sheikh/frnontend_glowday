import axiosInstance from "axios"
import { BASE_URL } from "../configs/api"

const axios = axiosInstance.create({
  baseURL: BASE_URL,
})

// Also add cancel token to axios instance
axios.CancelToken = axiosInstance.CancelToken
axios.isCancel = axiosInstance.isCancel

export default axios

// {
//         cancelToken: axios.CancelToken.source.token,
//       }
