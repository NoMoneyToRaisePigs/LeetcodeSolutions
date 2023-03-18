const maxDepthTree = {
   data: 3,
   left: {
      data: 9,
      left: {
         data: 11
      }
   },
   right: {
      data: 20,
      left: {
         data: 15
      },
      right: {
         data: 7
      }
   }
};

function binarySearch(root, nodes = []) { 
   if (!root) return []
   
   binarySearch(root.left, nodes)
   nodes.push(root.data)
   binarySearch(root.right, nodes)

   return nodes
}