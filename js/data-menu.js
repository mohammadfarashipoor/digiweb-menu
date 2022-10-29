const menu = [
  {
    id: 1,
    children: [
      {
        title: "برندهای مختلف گوشی موبایل",
        children: [
          
            {title: "گوشی اپل"},
            {title: "گوشی سامسونگ"},
            {title: "گوشی شیائومی"},
            {title: "گوشی هواوی"},
            {title: "گوشی وان پلاس"},
            {title: "گوشی نوکیا"},
            {title: "گوشی موتورولا"},
            {title: "گوشی ال جی"},
            {title: "گوشی آنر"},
            {title: "گوشی جی پلاس"},
            {title: "گوشی جی ال ایکس"},
            {title: "گوشی بلو"},
        ],
      },
      {
        title: "گوشی براساس قیمت",
        children: [
          {
            title: "گوشی تا 2 میلیون تومان"},
            {title: "گوشی تا 5 میلیون تومان"},
            {title: "گوشی تا 7 میلیون تومان"},
            {title: "گوشی تا 15 میلیون تومان"},
            {title: "گوشی بالای 15 میلیون تومان"},
        ],
      },{
        title : "گوشی براساس حافظه داخلی",
        children: [
        {title : "گوشی تا 16 گیگابایت"},
        {title : "گوشی تا 32 گیگا بایت"},
        {title : "گوشی تا 64 گیگابایت"},
        {title : "گوشی تا 128 گیگابایت"},
        {title : "گوشی تا 256 گیگابایت"},
        {title : "گوشی تا 1 ترابایت"},]
      },{
        title :"رزولوشن عکس",
        children : [
        {title :"تا ۱۳ مگاپیکسل"},
        {title :"تا ۱۶ مگاپیکسل"},
        {title :"تا ۴۸ مگاپیکسل"},
        {title :"تا ۶۴ مگاپیکسل"},
        {title :"تا ۱۰۸ مگاپیکسل"}, ]
      },{
        title :"گوشی براساس کاربری",
        children: [
        {title :"گوشی اقتصادی"},
        {title :"گوشی میان رده"},
        {title :"گوشی دانش آموزی"},
        {title :"گوشی گیمینگ"},
        {title :"گوشی پرچمدار"},
        {title :"گوشی ضدآب"},
        {title :"گوشی مناسب عکاسی"},
        {title :"گوشی 5G"},
        {title :"دو سیم‌کارت"},
        {title :"Android (اندروید)"},
        {title :"IOS"},
        {title :"سایر سیستم عامل ها"},]
        
      }
    ],
  },
  {
    id: 2,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 3,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 4,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 5,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 6,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 7,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 8,
    children: [
      {
        title: "ccc",
      },
    ],
  },
  {
    id: 9,
    children: [
      {
        title: "ccc",
      },
    ],
  },
];
let dom = document.querySelector(".categorys");
let category;
let arrayChilds = [];
const SendToDom = (itemsMenu, tagCategory) => {
  const htmlStr =
    tagCategory +
    itemsMenu.join(" ") +
    "</ul></div></div></div>";
    let myStr = htmlStr.replace(",", " ");
    console.log(myStr)
  dom.insertAdjacentHTML("beforeend", myStr);
};

const Creator = (items) => {
  items.map((item) => {
    let childItemMenu;
    if (item.title) {        
      item.title
        ? (childItemMenu = `<li class=${item.children ? "header-menu" : ""}>${
            item.title
          }${item.children ? '<i class="fa fa-chevron-left"></i>' : ""}</li>`)
        : null;

    } else {
        tagCategory1 = item.id
        ? `<div class="category cat-${item.id}"><div class="items"><div class="item"><ul>`
        : null;

        arrayChilds = [];
    }
    if (childItemMenu) {
        arrayChilds = [...arrayChilds, childItemMenu];
    }
    if (item.children) {
        Creator(item.children);
    };
       if(!item.title){   
        SendToDom(arrayChilds, tagCategory1)       }
    
  });
};
Creator(menu);
