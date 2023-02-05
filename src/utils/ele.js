import Vue from 'vue';
import {
    Button, 
    Select, 
    Form, 
    FormItem,
    Input, 
    Message , 
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Col,
    Row,
    Table,
    TableColumn,
    Popover,
    Tag,
    Image,
  } from 'element-ui';
  //注册组件
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Container);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tag);
Vue.use(Image);
Vue.use(Form);
Vue.use(FormItem);
Vue.component(Message)
Vue.prototype.$message = Message;