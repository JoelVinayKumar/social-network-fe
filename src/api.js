import axios from 'axios';

export const getUsers = async () => {
  const users = await axios.get(`http://localhost:5000/user?page=${0}&limit=${10}`)
  return users;
}

export const getUserFriends = async (userId) => {
  const friends = await axios.get(`http://localhost:5000/friend/${userId}?page=${0}&limit=${10}`)
  return friends;
}

export const getUserIndirectFriends = async (userId) => {
  const friends = await axios.get(`http://localhost:5000/friend/passive/${userId}?page=${0}&limit=${10}`)
  return friends;
}