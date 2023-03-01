function myNew(cstrct,...params){
   // 1.创建一个空的JavaScript对象 obj
   const obj = {};
   
   // 2.为新创建的对象（obj）添加属性`__proto__`，
   // 并将该属性 链接至 构造函数的 原型对象  ；
   obj.__proto__ = cstrct.prototype; 
   
   // 3. 将该新对象（obj）作为this的上下文 ；
   // 3.1 在 obj.__proto__ 上临时挂上构造函数
   obj.__proto__._func = cstrct;
   
   // 3.2 执行该构造函数得到 "this"
   let _ = obj._func(...params);
   
   // 3.3 删除该临时挂载的属性 _func（否则实例上会多出这个属性）
   delete obj.__proto__._func
   
   // 4. 如果该函数没有返回对象，即null或undefined，
   // 则返回this，否则返回该对象
   return _ instanceof Object ? _ : obj;
 }