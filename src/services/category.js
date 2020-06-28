import axios from 'axios';
export async function GetCategory() {
  try {
    const response = await axios.get('http://localhost:3004/api/v1/category');
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
