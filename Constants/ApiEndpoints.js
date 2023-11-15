export const API_INSTANCE = process.env.NEXT_PUBLIC_API_INSTANCE
export const ApiEndpoints = {
    GET_SERVICES_LIST: {
        method: "GET",
        url: "/user/lead/services",
    },
    GET_COUNTRIES_LIST: {
        method: "GET",
        url: "/utils/countries",
    },
    GET_LANGUAGES_LIST: {
        method: "GET",
        url: "/utils/languages",
    },
    ADD_LEAD: {
        method: "POST",
        url: "/user/lead",
    },
    GET_ALL_PACKAGES: {
        method: "GET",
        url: "/user/lead/packages",
    },
};