import asyncComponent from '../helpers/AsyncFunc';

const routes = [
	{
		path: 'admin/admins',
		component: asyncComponent(() => import('./containers/Account'))
	},
	{
		path: 'admin/profile',
		component: asyncComponent(() => import('./containers/Profile/profile'))
	},

	{
		path: 'admin/slides',
		component: asyncComponent(() => import('./containers/Slide'))
	},

	{
		path: 'admin/roles',
		component: asyncComponent(() => import('./containers/Role'))
	},
	{
		path: 'admin/users',
		component: asyncComponent(() => import('./containers/User'))
	},
	{
		path: 'admin/config',
		component: asyncComponent(() => import('./containers/Config'))
	},
	{
		path: 'admin/maintenance',
		component: asyncComponent(() => import('./containers/Maintenance'))
	},
	{
		path: 'admin/incidentType',
		component: asyncComponent(() => import('./containers/IncidentType'))
	},
	{
		path: 'admin/incidentSeverity',
		component: asyncComponent(() => import('./containers/IncidentSeverity'))
	},

	{
		path: 'admin/incidents',
		component: asyncComponent(() => import('./containers/Incidents'))
	},
	{
		path: 'admin/announcement',
		component: asyncComponent(() => import('./containers/Annoucement'))
	},
	{
		path: 'admin/userAnnouncement',
		component: asyncComponent(() => import('./containers/UserAnnouncement'))
	},
	{
		path: 'admin/checklist',
		component: asyncComponent(() => import('./containers/CheckList'))
	},
	{
		path: 'admin/incidentDamages',
		component: asyncComponent(() => import('./containers/IncidentDamages'))
	},
	{
		path: 'admin/jobSite',
		component: asyncComponent(() => import('./containers/JobSite'))
	},
	{
		path: 'admin/jobType',
		component: asyncComponent(() => import('./containers/JobType'))
	},
	{
		path: 'admin/job',
		component: asyncComponent(() => import('./containers/Job'))
	},
	{
		path: 'admin/announcementType',
		component: asyncComponent(() => import('./containers/AnnoucementType'))
	},
	{
		path: 'admin/checkListDaily',
		component: asyncComponent(() => import('./containers/CheckListDaily'))
	},
	{
		path: 'dashboard',
		component: asyncComponent(() => import('./containers/Dashboard'))
	},
	{
		path: 'admin/dashboard',
		component: asyncComponent(() => import('./containers/Dashboard'))
	},
	{
		path: '',
		component: asyncComponent(() => import('./containers/Dashboard'))
	},
	{
		path: 'admin',
		component: asyncComponent(() => import('./containers/Dashboard'))
	},
	{
		path: 'admin/summary',
		component: asyncComponent(() => import('./containers/Summary'))
	},
	{
		path: 'admin/categoriesBig',
		component: asyncComponent(() => import('./containers/CategoriesBig'))
	},
	{
		path: 'admin/categoriesTwo',
		component: asyncComponent(() => import('./containers/CategoriesTwo'))
	},
	{
		path: 'admin/categoriesSmall',
		component: asyncComponent(() => import('./containers/CategoriesSmall'))
	},
	{
		path: 'admin/bill_import',
		component: asyncComponent(() => import('./containers/Bill_Import'))
	},
	{
		path: 'admin/product',
		component: asyncComponent(() => import('./containers/Product'))
	},
	{
		path: 'admin/cartWait',
		component: asyncComponent(() => import('./containers/CartWait'))
	},
	{
		path: 'admin/cartSuccess',
		component: asyncComponent(() => import('./containers/CartSuccess'))
	},
	{
		path: 'admin/cartCancel',
		component: asyncComponent(() => import('./containers/CartCancel'))
	},
	{
		path: 'admin/cartDelivery',
		component: asyncComponent(() => import('./containers/CartDelivery'))
	},
	{
		path: 'admin/promotion',
		component: asyncComponent(() => import('./containers/Promotion'))
	},
	{
		path: 'admin/promotionType',
		component: asyncComponent(() => import('./containers/PromotionType'))
	},
	{
		path: 'admin/customer',
		component: asyncComponent(() => import('./containers/Customer'))
	},
	{
		path: 'admin/news',
		component: asyncComponent(() => import('./containers/News'))
	},
	{
		path: 'admin/newsTypes',
		component: asyncComponent(() => import('./containers/NewsType'))
	},
	{
		path: 'admin/expiredProduct',
		component: asyncComponent(() => import('./containers/ExpiredProduct'))
	}
];
export default routes;
