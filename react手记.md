# react笔记

#### 1,类组件方法绑定

* onClick={ this.Functionbind(this, '参数') }     第一种普遍写法
* 在构造器中this.Function = this.Function.bind(this)   后面直接调用this.Function即可
* onClick={ ()=>this.Function('参数') }    第三种写法

