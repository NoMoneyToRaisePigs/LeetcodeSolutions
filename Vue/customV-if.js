import { h } from 'vue'
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"


const App = {
   render() { 
      return this.ok
         ? h('div', { id: 'box' }, [h('span', 'hellow renderer')])
         : this.otherCondition
            ? h('p', 'others p')
            : h('span')
   },
   renderVFor() { 
      return this.list.map(item => { 
         return h('div', {key: item.id }, item.text)
      })
   },
   renderWithSlot() { 
      const slot = this.$slots.default 
         ? this.$slots.default()
         : []
      
      return h('div', { class: 'stack' }, slot.map(child => { 
         return h('div', { class: `mt-${this.$props.size}`}, [child])
      }))
   }
}

const Stack = {
   render() { 

   }
}

console.log(App.render())



const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, null, -1 /* HOISTED */)

export function renderX(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, [
    _hoisted_1,
    _createElementVNode("div", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
}
console.log('--------------------------------')
console.log(_openBlock())
console.log(_createElementBlock("div", null, [
   _hoisted_1,
   _createElementVNode("div", null, _toDisplayString('aaaaahhhhh'), 1 /* TEXT */)
 ]))
console.log(renderX({msg: 'aaaaahhhhh'}))