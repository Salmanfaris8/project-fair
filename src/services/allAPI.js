import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// registerAPI called by Auth component when user click register btn
export const registerAPI= async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

// loginAPI called by Auth component when user click login btn
export const loginAPI= async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// addProjectAPI called by Add component when user click add button 
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

// getHomeProjectAPI called by home component when page loaded in browser 
export const getHomeProjectAPI= async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-project`,{})
}

// allProjectsAPI called by project component when page is loaded in browser 
export const allProjectsAPI= async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-Projects?search=${searchKey}`,{},reqHeader)
}

// userProjectAPI called by view component when page is loaded in browser
export const userProjectAPI= async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-Projects`,{},reqHeader)
}

// updateProjectAPI called by edit component when user click update button
export const updateProjectAPI= async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

// userProjectRemoveAPI called by view component when user click the delete button
export const userProjectRemoveAPI= async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{},reqHeader)
}

// updateUserAPI called by profile component when user click update button
export const updateUserAPI= async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)
}