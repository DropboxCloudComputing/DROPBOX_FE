import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.common["Authorization"] = localStorage["JWT"];

const loginUser = async (email, password) => {
  return await axios.post('/api/v1/user_app/login/',
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
      console.log(response.status);
      if(response.status === 200){
        localStorage.setItem("JWT", "Bearer " + response.data["access_token"]);
        return response.status;
      }
      
      return response.status;
    })
    .catch((response) => { console.log('Error!') });
};

export  { loginUser };
