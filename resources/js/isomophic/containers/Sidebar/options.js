const options = [
	{
		key: 'admin/characters',
		label: 'sidebar.homeCharacters',
		leftIcon: 'ion-ios-personadd-outline'
	},
	{
		key: 'keyAbout',
		label: 'sidebar.abouts',
		leftIcon: 'ion-grid',
		children: [
			{
				key: 'admin/abouts',
				label: 'sidebar.aboutClosers'
			},
			{
				key: 'admin/about-characters',
				label: 'sidebar.characters'
			},
			{
				key: 'admin/character-skills',
				label: 'sidebar.aboutSkill'
			}
		]
	},
	{
		key: 'admin/news',
		label: 'sidebar.news',
		leftIcon: 'ion-android-document'
	},
	{
		key: 'report',
		label: 'sidebar.report',
		leftIcon: 'ion-images',
		children: [
			{
				key: 'admin/expiredProduct',
				label: 'sidebar.expiredProduct'
			}
		]
	},
	{
		key: 'admin/guides',
		label: 'sidebar.guides',
		leftIcon: 'ion-help-buoy'
	},
	{
		key: 'keyMedias',
		label: 'sidebar.medias',
		leftIcon: 'ion-images',
		children: [
			{
				key: 'admin/medias',
				label: 'sidebar.wallpapers'
			},
			{
				key: 'admin/videos',
				label: 'sidebar.video'
			},
			{
				key: 'admin/fansitekits',
				label: 'sidebar.fansitekits'
			}
		]
	},
	{
		key: 'cart',
		label: 'sidebar.cart',
		leftIcon: 'ion-images',
		children: [
			{
				key: 'admin/cartWait',
				label: 'sidebar.cartWait'
			},
			{
				key: 'admin/cartDelivery',
				label: 'sidebar.cartDelivery'
			},
			{
				key: 'admin/cartSuccess',
				label: 'sidebar.cartSuccess'
			},
			{
				key: 'admin/cartCancel',
				label: 'sidebar.cartCancel'
			}
		]
	},
	{
		key: 'admin/Bill',
		label: 'sidebar.Bill',
		leftIcon: 'ion-android-checkbox',
		children: [
			{
				key: 'admin/Bill_Import',
				label: 'sidebar.Bill_Import'
			}
		]
	},
	{
		key: 'admin/slides',
		label: 'sidebar.slides',
		leftIcon: 'ion-android-image'
	},
	{
		key: 'admin/product',
		label: 'sidebar.product',
		leftIcon: 'ion-android-image'
	},
	{
		url: 'admin/promotion',
		id: 'sidebar.promotion'
	},
	{
		key: 'admin/incidents',
		label: 'sidebar.incidents',
		leftIcon: 'ion-android-warning'
	},
	{
		key: 'admin/announcement',
		label: 'sidebar.annoucement',
		leftIcon: 'ion-speakerphone',
		children: [
			{
				key: 'admin/announcement',
				label: 'sidebar.annoucement'
			},
			{
				key: 'admin/userAnnouncement',
				label: 'sidebar.userAnnouncement'
			}
		]
	},
	// {
	//   key: "admin/userAnnouncement",
	//   label: "sidebar.userAnnouncement",
	//   leftIcon: "ion-android-contact"
	// },
	{
		key: 'admin/job',
		label: 'sidebar.job',
		leftIcon: 'ion-ios-briefcase'
	},

	{
		key: 'admin/userChecklistDaily',
		label: 'sidebar.userChecklistDaily',
		leftIcon: 'ion-android-checkbox'
	},
	{
		key: 'admin/CheckLists',
		label: 'sidebar.checklistMenu',
		leftIcon: 'ion-android-checkbox',
		children: [
			{
				key: 'admin/summary',
				label: 'sidebar.summary'
			},
			{
				key: 'admin/checkListDaily',
				label: 'sidebar.checklistDaily'
			}
		]
	},
	{
		key: 'admin/images',
		label: 'sidebar.images',
		leftIcon: 'ion-android-image'
	},
	{
		key: 'admin/promotion',
		label: 'sidebar.promotion',
		leftIcon: 'ion-ios-person'
	},
	{
		key: 'admin/customer',
		label: 'sidebar.customer',
		leftIcon: 'ion-ios-person'
	},
	{
		key: 'admin/admins',
		label: 'sidebar.account',
		leftIcon: 'ion-ios-person'
	}
];
export default options;
