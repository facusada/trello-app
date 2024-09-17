import axios from 'axios';


const getAllBoards = async () => {
  try {
    debugger
    const response = await axios.get('http://localhost:8000/get-projects/')

    return response.data
  } catch (error) {
    console.log('Error fetching projects:', error);
  }
}

export {
  getAllBoards,
}