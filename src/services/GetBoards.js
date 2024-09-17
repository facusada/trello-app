import axios from 'axios';


const getAllBoards = async () => {
  try {
    await axios.get('http://localhost:8000/get-projects/')
    .then(response => {
      return response.data
    })
  } catch (error) {
    console.log('Error fetching projects:', error);
  }
}

export {
  getAllBoards,
}