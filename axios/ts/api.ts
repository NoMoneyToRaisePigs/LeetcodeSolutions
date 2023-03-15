import axios from 'axios'
import type {Axios, AxiosInstance, AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig, CreateAxiosDefaults, AxiosInterceptorManager, AxiosResponse } from 'axios'

const xxx : AxiosInstance= axios.create()


// export interface ApiResult<T> {
//    code?: number
//    message?: string
//    data: T
// }

export interface InterceptorData {
   startTime: DOMHighResTimeStamp
   requestPath?: string
}

// export interface CustomAxiosRequestConfig<T, D = any> extends CreateAxiosDefaults<D> {
//    dataset: T
// }

export interface CustomAxiosRequestConfig<D> extends InternalAxiosRequestConfig<D> {
   dataset: InterceptorData
}

export interface CustomAxiosInstance extends AxiosInstance { 
   interceptors: {
      request: AxiosInterceptorManager<CustomAxiosRequestConfig<any>>;
      response: AxiosInterceptorManager<CustomAxiosResponse<any, any>>;
    };
}

export interface CustomAxiosResponse<T, D> extends AxiosResponse<T, D> {
   config: CustomAxiosRequestConfig<any>;
 }

export class API { 
   instance: CustomAxiosInstance

   constructor(
      baseUrl: string,
      options: AxiosRequestConfig,
      addHeadersHandler: any,
      badPerformanceHandler: any,
      responseErrorHandler: any,
      unAuthorizedHandler: any
   ) { 
      this.instance = axios.create({
         baseURL: baseUrl,
         
         timeout: 6000,
         ...options
      }) as CustomAxiosInstance

      this.instance.interceptors.request.use(
         (request: CustomAxiosRequestConfig<any>) => { 
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

      this.instance.interceptors.request.use(
         (request: CustomAxiosRequestConfig<any>) => { 

            return request
         },
         (error: AxiosError) => { 

            return Promise.reject<AxiosError>(error)
         }
      )
   }

   parseQueryString(data: { [key: string | number | symbol]: any }) { 
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

   get<T>(url: string, data: T) { 
      return this.instance.get(url, { data })
   }

   post<T>(url: string, data: T) { 
      return this.instance.post(url, data)
   }
}