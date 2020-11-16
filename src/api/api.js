import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "67020fab-9e1b-4947-9eee-27af258ce73f" },
})

export const usersAPI = {
    getUsers(pageSize = 1, currentPage = 10) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data);
    }
}

export const followedAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
        unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data);
    }
}