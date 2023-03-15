// import axios from 'https://cdn.skypack.dev/axios';
import axios from './node_modules/axios/dist/esm/axios.js'

class API { 
   
   constructor(
      baseUrl,
      options = {},
      addHeadersHandler,
      badPerformanceHandler,
      responseErrorHandler,
      unAuthorizedHandler,
   ) {
      this.instance = axios.create({
         baseUrl,
         withCredentials: true,
         omitHeaders: [],
         timeout: 60000,
         ...options
      })     
      
      this.instance.interceptors.request.use(
         request => { 
            request.dataset = {
               startTime: performance.now(),
               requestPath: request.url,
            }
            
            if (addHeadersHandler) { 
               addHeadersHandler(request)
            }

            if (request.method === 'get' && request.data) {
               request.url = request.url + this.parseQueryString(request.data)
            }
            
            return request
         },
         error => { 
            console.error(error)  //probably use chalk here.
            return Promise.reject(error)
         }
      )

      this.instance.interceptors.response.use(
         (response) => { 
            const { config, data, status } = response
            const { startTime, requestPath } = config.dataset

            const endTime = performance.now()
            const duration = Math.trunc(endTime - startTime) / 1000

            if (duration > 3) {
               console.warn(requestPath,duration, 'bad performance')
               if (badPerformanceHandler) { 
                  badPerformanceHandler(requestPath, duration)
               }
            }
      
            return data
         },
         (error) => { 
            const code = error.response?.data?.code
            const message = error.response?.data?.message
            const requestPath = error.config?.dataset?.requestPath

            if (message) { 
               if (responseErrorHandler) { 
                  responseErrorHandler(code, message, error)
               }
            }

            if (status.toString() === '401') { 
               // depends on how sever handles it
            }

            if (code && code.toString() === '401') { 
               if (unAuthorizedHandler) { 
                  unAuthorizedHandler()
               }
            }

            return Promise.reject(error)
         }
      )

      return this.instance
   }

   parseQueryString(data) { 
      // normal get send to BE shouldn't have  # inside, so skip parsing # here.
      if (!data) return ''

      const params = Object.keys(data).reduce((acc, cur, index) => { 
         let value = data[cur]
         let isFirstSection = index === 0
         let skip = value === null || value === undefined

         let section = skip ? '' : `${isFirstSection ? '&' : ''}${encodeURIComponent(cur)}=${encodeURIComponent(data[cur])}`

         return acc += section
      }, '')
      
      return params ? `?${params}` : params
   }

   get(url, data) { 
      return this.instance({
         method: 'get',
         url,
         data
      })
   }

   post(url, data) { 
      return this.instance({
         method: 'post',
         url,
         data
      })
   }
}

export const api = new API('http://localhost:3001/')
