import axios, {
    AxiosError,
    InternalAxiosRequestConfig,
    AxiosResponse,
} from "axios";

const instance = axios.create({
    baseURL: "https://opensea13.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": "b48ff04a7bmsh47c7f3264223a12p153687jsnaead187763f1", // test API-Key b48ff04a7bmsh47c7f3264223a12p153687jsnaead187763f1
        "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => config,
    (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

const successHandler = (response: AxiosResponse): AxiosResponse => response;
const errorHandler = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);

instance.interceptors.response.use(successHandler, errorHandler);

export default instance;
