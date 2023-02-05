接口网址：http://node.htmldiv.cn/

接口名：用户注册
api: /user/regUser
入参：
{
  username: xxx,
  password: xxxxxx,
  email: xxx.xxx.com
}
响应：
{
  username: xxx,
  user_pic: 'xxx.jpg',
  nickname: xxxx,
  email: xxx
}

接口名：用户登录
api: /user/login
入参：
{
  username: xxx,
  password: xxxxxx
}
响应：
{
  status: 0,
  message: "登录成功",
  data: 'Bearer ' + tokenStr
}



----个人中心----

接口名：修改密码
api: /my/resetPwd
入参：
{
  oldPwd: password,
  newPwd: password,
}
响应：
{
  status: 0,
  message: "密码修改成功！"
}

--------
接口名：获取当前用户信息
api: /my/userInfo
入参：
无
响应：
{
  ......
}

-----文章-------
接口名：添加分类
api: /article/addCategory
入参： 
{
  name: xxx,
  alias: xxx,
}
响应：
{}


接口名：修改分类
api: /article/editCategory
入参：
{
  id: xxx,
  name: xxx,
  alias: xxx,
}
响应：
{}

接口名：删除分类
api: /article/deleteCategory
入参： 
{
  id: id
}
响应：
{}


接口名：查看所有分类
api: /article/getAllCategory
入参： 
{}
响应：
{}

----------