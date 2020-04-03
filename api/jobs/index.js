import axios from "axios"

const instance = axios.create()

const errorHandler = error => {
  throw error
}

const successHandler = response => {
  return response.data
}

instance.interceptors.response.use(successHandler, errorHandler)

const url = "https://api.recman.no/v2/get/?key=200323034950k1efe349a3709948943fd306abbaf87401580025698&scope=jobPost&fields=name,startDate,endDate,workplace,images,deadline,logo,title,web"

export default async (req, res) => {
  const result = await instance.get(url)
  const myData = {
    ...result,
    jobs: Object.keys(result.data).map(key => result.data[key])
  }
  res.status(200).send(myData)
}
