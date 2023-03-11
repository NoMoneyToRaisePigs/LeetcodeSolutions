class EventBus { 
   
   constructor() { 
      this.eventMap = new Map()
   }

   sub(event, handler) { 
      if (!this.eventMap.get(event)) { 
         this.eventMap.set(event, [])
      }

      this.eventMap.get(event).push(handler)

      return () => { 
         const allEvents = this.eventMap.get(event)
         const index = allEvents.indexOf(handler)

         if (index >= 0) { 
            allEvents.splice(index, 1)
         }
      }
   }

   pub(event, ...args) { 
      this.eventMap.get(event)?.forEach(handler => { 
         handler(...args)
      })
   }
}


const eb = new EventBus()

const unsub = eb.sub('salute', (boss) => { 
   console.log(`${boss} you have my salute from gf`)
})

eb.sub('salute', (boss) => { 
   console.log(`${boss} you have my salute from nn`)
})


setTimeout(() => {
   eb.pub('salute', 'James')
});

setTimeout(() => {
   unsub()
});

setTimeout(() => {
   eb.pub('salute', 'James')
}, 3000);