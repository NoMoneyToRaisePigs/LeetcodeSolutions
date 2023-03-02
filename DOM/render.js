const vm = {
      tag: 'div',
      attrs: [{ id: 'box-1' }, { class: 'box' }],
      children: [
         {
            tag: 'div',
            attrs: [{ id: 'item-1' }, { class: 'item' }],
            children: [
               {
                  tag: 'span',
               }
            ]
         },
         {
            tag: 'div',
            attrs: [{ id: 'item-2' }, { class: 'item' }],
            children: []
         }
      ]
   }



var fragment = document.createDocumentFragment()

function render(vm, el = null) { 
   el = el ?? document.createDocumentFragment()

   
   const node = document.createElement(vm.tag)
   vm?.attrs?.forEach(attr => { 
      const obj = Object.entries(attr)[0]
      node.setAttribute(obj[0],obj[1] )
   })

   el.appendChild(node)

   vm?.children?.forEach(x => { 
      render(x, node)
   })

   return el
}