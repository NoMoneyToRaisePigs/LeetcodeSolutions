function h(tag, props, children) { 
   return {
      tag,
      props,
      children
   }
}

function mount(vnode, container) { 
   const el = vnode.el = document.createElement(vnode.tag)

   if (vnode.props) { 
      // Object.keys(vnode.props).forEach(key => {
      //    el.setAttribute(key, vnode.props[key])
      // })

      //here we simplify that we assume there would only be attributes here, there are actually property attribute and events.
      for (const key in vnode.props) { 
         const value = vnode.props[key]
         el.setAttribute(key, value)
      }
   }

   if (vnode.children) { 
      // vnode.children.forEach(child => {
      //    mount(child, el)
      // })
      
      if (typeof vnode.children === 'string') {
         el.textContent = vnode.children
      } else { 
         vnode.children.forEach(child => { 
            mount(child, el)
         })
      }
   }

   container.appendChild(el)
}


const vdom = h('div', { class: 'red' }, [
   h('span', null, 'hello')
])


mount(vdom, document.getElementById('app'))


function patch(old_vm, new_vm) { 
   if (old_vm.tag === new_vm.tag) {
      const el = new_vm.el = old_vm.el

      const oldProps = old_vm.props || {}
      const newProps = new_vm.props || {}

      for (const key in newProps) { 
         const oldValue = oldProps[key]
         const newValue = newProps[key]

         if (oldValue !== newValue) { 
            el.setAttribute(key, newValue)
         }
      }

      for (const key in oldProps) { 
         if (!(key in newProps)) { 
            el.removeAttribute(key)
         }
      }

      //children
      const oldChildren = old_vm.children || []
      const newChildren = new_vm.children || []

      if (typeof newChildren === 'string') {
         if (typeof oldChildren === 'string') {
            if (newChildren !== oldChildren) { 
               el.textContent = newChildren 
            }
         } else { 
            el.textContent = newChildren 
         }
      } else { 
         if (typeof oldChildren === 'string') {
            el.innerHTML = ''
            newChildren.forEach(child => {
               mount(child, el)
            })
         } else { 
            const commonLength = Math.min(newChildren.length, oldChildren.length)
            for (let i = 0; i < commonLength; i++) { 
               patch(oldChildren[i], newChildren[i])
            }

            if (newChildren.length > oldChildren.length) {
               newChildren.slice(oldChildren.length).forEach(child => { 
                  mount(child, el)
               })
            } else { 
               oldChildren.slice(newChildren.length).forEach(child => { 
                  el.removeChild(child.el)
               })
            }
         }
      }

   } else { 
      //replace
   }
}

//assume the children can only array or string
const vdom2 = h('div', { class: 'green' }, [
   h('span', null, 'changed!')
])

patch(vdom, vdom2)