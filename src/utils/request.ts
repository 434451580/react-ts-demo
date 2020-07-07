import axios from 'axios'


const request = (url: string, option: object = {}) => {
    const requestConfig = {
        url,
        ...option
    }
    return axios(requestConfig).then(res => {
        console.log(res)
       return res
    }).catch(err => {
       return err
    })
}

export default request