import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8000";
//axios.defaults.headers.common["Authorization"] = localStorage["JWT"];


const registerUser = async (full_name, email, password) => {
  axios.post('/api/v1/user_app/signup/',
    {
      full_name: full_name,
      email: email,
      password: password
    },
    {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then((response) => {
      console.log(response.data);
      return response.status;
    })
    .catch((response) => { console.log('Error!') });
}

const loginUser = async ({ email, password }) => {
  axios
    .post('/api/v1/user_app/login/',
      {
        email: email,
        password: password
      },
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then((response) => {
      console.log(response.data);
      return response.status;
    })
    .catch((response) => { console.log('Error!') });
};

export default { loginUser };
