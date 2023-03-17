console.log('vue2 playground')

const COUNTRY_LIST = [
   ''
]

Vue.config.devtools = true

var app = new Vue({
   el: '#app',
   data: () => {
      return {
         inputVal: '',
         disabled: false,
         cache: {},
         currentData: null,
         countryList: COUNTRY_LIST,
         event: null,
         emoji: null,
      }
   },
   async created() { 

      
      // console.log(data)
         // .then(async res => { 
         //    const xxx = await res.json()
         //    console.log(xxx)
         // })
   },
   computed: {
      xxx: function () { 
         const name = this.currentData?.data?.country?.name
         return `${name}xxxx`
      },
      emo: function () { 
         return this.currentData?.data?.country?.emoji
      },
   },
   methods: {
      async getCountry() { 
         clearTimeout(this.event)

         this.event = setTimeout(async () => {
            this.currentData = await this.getData()
            this.disabled = false
            this.cache[this.inputVal] = this.currentData
            console.log(this.currentData)
         }, 300);
      },
      async getData() { 
         if (!this.inputVal) return

         if (this.cache[this.inputVal]) { 
            return this.cache[this.inputVal]
         }

         this.disabled = true
         let data = null

         try {
            const response = await fetch('https://countries.trevorblades.com/graphql', {
               method: 'POST',
             
               headers: {
                  "Content-Type": "application/json"
               },
             
               body: JSON.stringify({
                  query: `{
                  country(code: "${this.inputVal.trim().toUpperCase()}") {
                     name
                     native
                     capital
                     emoji
                     currency
                     languages {
                       code
                       name
                     }
                   }
                 }`
               })
            })

            data = await response.json()
         } catch (e) {
            console.error(e.message)
         } finally { 
            this.disabled = false
         }
         
         return data
      },
      autoComplete() { 
         if (this.inputVal) { 
            for (let i = 0; i < this.countryList.length; i++) { 
               let country = countryList[i]

               if (country.startsWith(this.inputVal)) { 
                  this.inputVal = country
               }
            }
         }
      }
   }
 })