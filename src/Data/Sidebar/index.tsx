//@ts-nocheck
import { SidebarMenuInterFace } from "@/Type/Sidebar";
import { BlogSvg, BonusUISvg, ButtonsSvg, CalanderSvg, ChartsSvg, ChatSvg, ContactSvg, EcommerceSvg, EditorsSvg, EmailSvg, FAQSvg, FilemanagerSvg, FormsSvg, GallarySvg, HeaderBookmarkSvg, HomeSvg, IconsSvg, JobsearchSvg, KnowledgebaseSvg, LearningSvg, MapsSvg, OthersSvg, ProjectSvg, SamplePageSvg, SearchResultSvg, SocialappSvg, SupportTicketSvg, TablesSvg, TaskSvg, TodoSvg, UiKitsSvg, UsersComponentSvg, WidgetsSvg } from "../../svgIcons";

export const SidebarMenu: SidebarMenuInterFace[] = [
  {
    menutitle: "DashBoards",
    items: [
      {
        title: "Dashboards",
        icon: <HomeSvg />,
        pathSlice: "dashboard",
        type: "sub",
        badge: true,
        badgeName: "3",
        badgeColor: "badge badge-light-primary",
        active: false,
        items: [
          { path: `/dashboard/default`, title: "Default", type: "link" },
          { path: `/dashboard/ecommerce`, title: "Ecommerce", type: "link" },
          { path: `/dashboard/crypto`, title: "Crypto", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Widgets",
    items: [
      {
        title: "Widgets",
        icon: <WidgetsSvg />,
        type: "sub",
        pathSlice: "widgets",
        active: false,
        items: [
          { path: `/widgets/general`, title: "General", type: "link" },
          { path: `/widgets/chart`, title: "Chart", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Project",
    items: [
      {
        title: "Project",
        icon: <ProjectSvg />,
        type: "sub",
        pathSlice: "project",
        badge: true,
        badgeName: "New",
        badgeColor: "badge badge-light-info",
        active: false,
        items: [
          { path: `/project/projectlist`, title: "Project list", type: "link" },
          { path: `/project/createlist`, title: "Create list", type: "link" },
        ],
      },
    ],
  },

  { menutitle: "File Manager", items: [{ path: `/filemanager`, bookmark: true, icon: <FilemanagerSvg />, title: "File Manager", type: "link" }] },

  {
    menutitle: "Ecommerce",
    items: [
      {
        title: "Ecommerce",
        icon: <EcommerceSvg />,
        type: "sub",
        pathSlice: "ecommerce",
        active: false,
        items: [
          { path: `/ecommerce/product`, title: "Product", type: "link" },
          { path: `/ecommerce/productpage`, title: "Product Page", type: "link" },
          { path: `/ecommerce/productlist`, title: "Product List", type: "link" },
          { path: `/ecommerce/paymentdetails`, title: "Payment Detail", type: "link" },
          { path: `/ecommerce/orderhistory`, title: "Order History", type: "link" },
          { path: `/ecommerce/invoice`, title: "Invoice", type: "link" },
          { path: `/ecommerce/cart`, title: "Cart", type: "link" },
          { path: `/ecommerce/wishlist`, title: "Wishlist", type: "link" },
          { path: `/ecommerce/checkout`, title: "Checkout", type: "link" },
          { path: `/ecommerce/pricing`, title: "Pricing", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Email",
    items: [
      {
        title: "Email",
        icon: <EmailSvg />,
        type: "sub",
        pathSlice: "email",
        active: false,
        items: [
          { path: `/email/mailbox`, title: "Mail Box", type: "link" },
          { path: `/email/readmail`, title: "Read Mail", type: "link" },
          { path: `/email/compose`, title: "Compose", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Chat",
    items: [
      {
        title: "Chat",
        icon: <ChatSvg />,
        type: "sub",
        pathSlice: "chat",
        active: false,
        items: [
          { path: `/chat/chatapp`, title: "ChatApp", type: "link" },
          { path: `/chat/videocall`, title: "VideoCall", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Users",
    items: [
      {
        title: "Users",
        icon: <UsersComponentSvg />,
        type: "sub",
        pathSlice: "users",
        active: false,
        items: [
          { path: `/users/userprofile`, title: "User Profile", type: "link" },
          { path: `/users/useredit`, title: "User Edit", type: "link" },
          { path: `/users/usercard`, title: "User Cards", type: "link" },
        ],
      },
    ],
  },
  { menutitle: "Bookmarks", items: [{ path: `/bookmarks`, icon: <HeaderBookmarkSvg />, title: "Bookmarks", type: "link" }] },
  { menutitle: "Contacts", items: [{ path: `/contacts`, icon: <ContactSvg />, title: "Contacts", type: "link" }] },
  { menutitle: "Tasks", items: [{ path: `/tasks`, bookmark: true, icon: <TaskSvg />, title: "Tasks", type: "link" }] },
  {
    menutitle: "Calendar",
    items: [
      {
        title: "Calendar",
        icon: <CalanderSvg />,
        type: "sub",
        pathSlice: "calendar",
        active: false,
        items: [
          { path: `/calendar/basiccalendar`, type: "link", title: "Calendar" },
          { path: `/calendar/draggablecalendar`, type: "link", title: "Draggable" },
        ],
      },
    ],
  },
  { menutitle: "Social App", items: [{ path: `/socialapp`, bookmark: true, icon: <SocialappSvg />, title: "Social App", type: "link" }] },
  { menutitle: "Todo", items: [{ path: `/todo`, bookmark: true, icon: <TodoSvg />, title: "Todo", type: "link" }] },
  { menutitle: "Search Result", items: [{ path: `/searchresult`, icon: <SearchResultSvg />, title: "Search Result", type: "link" }] },
  {
    menutitle: "Forms",
    items: [
      {
        title: "Forms",
        icon: <FormsSvg />,
        type: "sub",
        active: false,
        pathSlice: "forms",
        items: [
          {
            title: " Form Controls ",
            type: "sub",
            pathSlice: "formcontrol",
            items: [
              { title: "Form Validation", type: "link", path: `forms/formcontrol/formvalidation` },
              { title: "Basic Input", type: "link", path: `forms/formcontrol/baseinput` },
              { title: "Checkbox & Radio", type: "link", path: `forms/formcontrol/radiocheckbox` },
              { title: "Input Groups", type: "link", path: `forms/formcontrol/inputgroup` },
              { title: "Mega Option", type: "link", path: `forms/formcontrol/megaoptions` },
            ],
          },
          {
            title: "Form Widgets",
            type: "sub",
            pathSlice: "formwidget",
            items: [
              { title: "Date picker", type: "link", path: `forms/formwidget/datepicker` },
              // { title: 'Time picker', type: 'link', path: `forms/formwidget/timepicker` },
              { title: "Typeahead", type: "link", path: `forms/formwidget/typeahead` },
              { title: "Date Time Picker", type: "link", path: `forms/formwidget/datetimepicker` },
              { title: "Date Rangepicker", type: "link", path: `forms/formwidget/rangepicker` },
              { title: "TouchSpin", type: "link", path: `forms/formwidget/touchspin` },
              { title: "Select 2", type: "link", path: `forms/formwidget/select2` },
              { title: "Switch", type: "link", path: `forms/formwidget/switch` },
              { title: "ClipBoard", type: "link", path: `forms/formwidget/clipboard` },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            pathSlice: "formlayout",
            items: [
              { path: `forms/formlayout/formdefault`, title: "Form Default", type: "link" },
              { path: `forms/formlayout/formwizard`, title: "Form Wizard ", type: "link" },
              // { path: `/formlayout/formWizard2`, title: "Form Wizard 2", type: "link" },
              // { path: `/formlayout/formWizard3`, title: "Form Wizard 3", type: "link" },
            ],
          },
        ],
      },
    ],
  },
  {
    menutitle: "Tables",
    items: [
      {
        title: "Tables",
        icon: <TablesSvg />,
        type: "sub",
        pathSlice: "tables",
        active: false,
        items: [
          {
            title: "Reactstrap Tables",
            type: "sub",
            active: false,
            pathSlice: "bootstraptable",
            items: [
              { path: `/tables/bootstraptable/basictable`, title: "Basic Tables", type: "link" },
              { path: `/tables/bootstraptable/sizingtable`, title: "Sizing Tables", type: "link" },
              { path: `/tables/bootstraptable/bordertable`, title: "Border Tables", type: "link" },
              { path: `/tables/bootstraptable/stylingtable`, title: "Styling Tables", type: "link" },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            pathSlice: "datatable",
            active: false,
            items: [
              { path: `/tables/datatable/basicinit`, title: "Basic Init", type: "link" },
              { path: `/tables/datatable/advanceinit`, title: "Advance Init", type: "link" },
              { path: `/tables/datatable/api`, title: "API", type: "link" },
              { path: `/tables/datatable/datasources`, title: "Data Sources", type: "link" },
            ],
          },
        ],
      },
    ],
  },

  {
    menutitle: "Ui-Kits",
    items: [
      {
        title: "Ui-Kits",
        icon: <UiKitsSvg />,
        type: "sub",
        pathSlice: "uikits",
        active: false,
        items: [
          { path: `/uikits/typography`, title: "Typography", type: "link" },
          { path: `/uikits/avatar`, title: "Avatars", type: "link" },
          { path: `/uikits/helperclass`, title: "Helper-Classes  ", type: "link" },
          { path: `/uikits/grid`, title: "Grid", type: "link" },
          { path: `/uikits/tagsandpills`, title: "Tag & Pills", type: "link" },
          { path: `/uikits/progressbar`, title: "Progress", type: "link" },
          { path: `/uikits/modal`, title: "Modal", type: "link" },
          { path: `/uikits/alert`, title: "Alert", type: "link" },
          { path: `/uikits/popover`, title: "Popover", type: "link" },
          { path: `/uikits/tooltips`, title: "Tooltip", type: "link" },
          { path: `/uikits/spinner`, title: "Spinners", type: "link" },
          { path: `/uikits/dropdown`, title: "Dropdown ", type: "link" },
          { path: `/uikits/accordion`, title: "Accordion", type: "link" },
          {
            title: "Tabs",
            type: "sub",
            pathSlice: "tabs",

            items: [
              { title: "Bootstrap Tabs", type: "link", path: `/uikits/tabs/tabbootstrap` },
              { title: "Line Tabs", type: "link", path: `/uikits/tabs/tabline` },
            ],
          },
          { path: `/uikits/shadow`, title: "Shadow", type: "link" },
          { path: `/uikits/list`, title: "List", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Bonus Ui",
    items: [
      {
        title: "Bonus Ui",
        icon: <BonusUISvg />,
        type: "sub",
        pathSlice: "bonusui",
        badge: true,
        badgeName: "New",
        badgeColor: "badge badge-light-info",
        active: false,
        items: [
          { path: `/bonusui/scrollable`, title: "Scrollable ", type: "link" },
          { path: `/bonusui/bootstrapnotify`, title: "Bootstrap Notify ", type: "link" },
          { path: `/bonusui/treeview`, title: "Tree View", type: "link" },
          { path: `/bonusui/step`, title: "Step", type: "link" },
          { path: `/bonusui/rating`, title: "Rating", type: "link" },
          { path: `/bonusui/dropzone`, title: "Dropzone", type: "link" },
          { path: `/bonusui/tour`, title: "Tour ", type: "link" },
          { path: `/bonusui/sweetalert`, title: "SweetAlert ", type: "link" },
          { path: `/bonusui/carousel`, title: "Owl Carousel", type: "link" },
          { path: `/bonusui/ribbons`, title: "Ribbons", type: "link" },
          { path: `/bonusui/pagination`, title: "Pagination", type: "link" },
          { path: `/bonusui/breadcrumb`, title: "Breadcrumb ", type: "link" },
          { path: `/bonusui/rangeslider`, title: "Range Slider ", type: "link" },
          { path: `/bonusui/imagecropper`, title: "Image Cropper ", type: "link" },
          { path: `/bonusui/stickynotes`, title: "Sticky ", type: "link" },
          { path: `/bonusui/draganddrop`, title: "Drag and Drop ", type: "link" },
          { path: `/bonusui/imageupload`, title: "Upload", type: "link" },
          { path: `/bonusui/card/basiccards`, title: "Basic Card ", type: "link" },
          { path: `/bonusui/card/creativecards`, title: "Creative Card ", type: "link" },
          { path: `/bonusui/card/tabcards`, title: "Tabbed Card ", type: "link" },
          // { path: `/bonusui/card/draggingCards`, title: "Draggable Card", type: "link" },
          { path: `/bonusui/timeline`, title: "Timeline", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Icons",
    items: [
      {
        title: "Icons",
        icon: <IconsSvg />,
        type: "sub",
        pathSlice: "icons",
        active: false,
        items: [
          { path: `/icons/flagicon`, title: "Flag Icon ", type: "link" },
          { path: `/icons/fontawesome`, title: "Font Awesome", type: "link" },
          { path: `/icons/ico`, title: "Ico Icons", type: "link" },
          { path: `/icons/themify`, title: "Themify Icons", type: "link" },
          { path: `/icons/feather`, title: "Feather Icons", type: "link" },
          { path: `/icons/whether`, title: "Whether Icons", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Buttons",
    items: [{ path: `/button`, title: "Buttons", icon: <ButtonsSvg />, type: "link", active: false }],
  },

  {
    menutitle: "Charts",
    items: [
      {
        title: "Charts",
        icon: <ChartsSvg />,
        type: "sub",
        pathSlice: "charts",
        active: false,
        items: [
          { path: `/charts/apex`, title: "Apex Charts ", type: "link" },
          { path: `/charts/google`, title: "Google Charts", type: "link" },
          { path: `/charts/chartjs`, title: "ChartJs Charts", type: "link" },
        ],
      },
    ],
  },
  { menutitle: "Sample Page", items: [{ path: `/samplepage`, icon: <SamplePageSvg />, title: "Sample Page", type: "link" }] },
  {
    menutitle: "Others",
    items: [
      {
        title: "Others",
        icon: <OthersSvg />,
        type: "sub",
        pathSlice: "pages",
        active: false,
        items: [
          {
            title: "Coming Soon",
            type: "sub",
            pathSlice: "coming",
            items: [
              { title: "Coming Sample", type: "link", path: `/pages/coming/comingsimple` },
              { title: "Coming with Bg-Image", type: "link", path: `/pages/coming/comingbgimage` },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            pathSlice: "authentication",

            items: [
              { title: "Login Simple", type: "link", path: `/pages/authentication/loginsimple` },
              { title: "Login With bg image", type: "link", path: `/pages/authentication/loginimg` },
              { title: "Login with image two", type: "link", path: `/pages/authentication/loginbgimg` },
              { title: "Login with validation", type: "link", path: `/pages/authentication/loginvalidation` },
              { title: "Login with tooltip", type: "link", path: `/pages/authentication/logintooltip` },
              { title: "Login with sweetaleart", type: "link", path: `/pages/authentication/loginsweetalert` },
              { title: "Register Simple", type: "link", path: `/pages/authentication/registersimpleimg` },
              { title: "Register with Bg image", type: "link", path: `/pages/authentication/registerbgimg` },
              { title: "Register with Bg Video", type: "link", path: `/pages/authentication/registervideo` },
              { title: "Unlock User", type: "link", path: `/pages/authentication/unlockuser` },
              { title: "Forgot Password", type: "link", path: `/pages/authentication/forgetpwd` },
              { title: "Create Passward", type: "link", path: `/pages/authentication/createpwd` },
              { title: "Maintenance", type: "link", path: `/pages/authentication/maintenance` },
            ],
          },
          {
            title: "Error",
            type: "sub",
            pathSlice: "error",

            items: [
              { title: "Error Page 1", type: "link", path: `/pages/error/errorpage1` },
              { title: "Error Page 2", type: "link", path: `/pages/error/errorpage2` },
              { title: "Error Page 3", type: "link", path: `/pages/error/errorpage3` },
              { title: "Error Page 4", type: "link", path: `/pages/error/errorpage4` },
            ],
          },
        ],
      },
    ],
  },
  {
    menutitle: "Gallery",
    items: [
      {
        title: "Gallery",
        icon: <GallarySvg />,
        type: "sub",
        pathSlice: "gallery",
        active: false,
        items: [
          { path: `/gallery/imagegallery`, title: "Gallery Grid ", type: "link" },
          { path: `/gallery/imagewithdesc`, title: "Gallery Grid  Desc ", type: "link" },
          { path: `/gallery/mesonrygallery`, title: "Masonry Gallery", type: "link" },
          { path: `/gallery/mesonrydesc`, title: "Masonry With Desc", type: "link" },
          { path: `/gallery/imagehover`, title: "Hover Effect", type: "link" },
        ],
      },
    ],
  },
  {
    menutitle: "Blog",
    items: [
      {
        title: "Blog",
        icon: <BlogSvg />,
        type: "sub",
        pathSlice: "blog",
        active: false,
        items: [
          { path: `/blog/blogdetail`, title: "Blog Details", type: "link" },
          { path: `/blog/blogsingle`, title: "Blog Single", type: "link" },
          { path: `/blog/blogpost`, title: "Add Post", type: "link" },
        ],
      },
    ],
  },
  { menutitle: "FAQ", items: [{ path: `/faq`, icon: <FAQSvg />, title: "FAQ", type: "link" }] },
  {
    items: [
      {
        title: "Job Search",
        icon: <JobsearchSvg />,
        type: "sub",
        pathSlice: "jobsearch",
        active: false,
        items: [
          { path: `/jobsearch/cardview`, title: "Cards View", type: "link" },
          { path: `/jobsearch/joblist`, title: "List View", type: "link" },
          { path: `/jobsearch/jobdetail`, title: "Job Details", type: "link" },
          { path: `/jobsearch/jobapply`, title: "Apply", type: "link" },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Learning",
        icon: <LearningSvg />,
        type: "sub",
        pathSlice: "learning",
        active: false,
        items: [
          { path: `/learning/learninglist`, title: "Learning List", type: "link" },
          { path: `/learning/learningdetail`, title: "Detail Course", type: "link" },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Maps",
        icon: <MapsSvg />,
        type: "sub",
        pathSlice: "map",
        active: false,
        items: [
          { path: `/map/googlemap`, type: "link", title: "Google Map" },
          { path: `/map/leafletmap`, type: "link", title: "Leaflet Map" },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Editor",
        icon: <EditorsSvg />,
        type: "sub",
        pathSlice: "editor",
        active: false,
        items: [
          { path: `/editor/ckeditor`, type: "link", title: "CK  Editor" },
          { path: `/editor/mdeeditor`, type: "link", title: "MDE Editor" },
          { path: `/editor/acecodeeditor`, type: "link", title: "ACE code Editor " },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: "Knowledgebase",
        icon: <KnowledgebaseSvg />,
        type: "sub",
        pathSlice: "knowledgebase",
        active: false,
        items: [
          { path: `/knowledgebase/knowledgebase`, type: "link", title: "Knowledgebase" },
          { path: `/knowledgebase/knowledgecategory`, type: "link", title: "Knowledge Category" },
          { path: `/knowledgebase/knowledgedetails`, type: "link", title: "Knowledge details" },
        ],
      },
    ],
  },
  { menutitle: "Support Ticket", items: [{ path: `/supportticket`, icon: <SupportTicketSvg />, type: "link", active: false, title: "Support Ticket" }] },
];
