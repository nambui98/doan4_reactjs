// import notification from '../components/notification';
const helperFunc = {
	minutesOfDay: (m) => {
		return m.minutes() + m.hours() * 60;
	},
	convertNumber: (number) => {
		if (!isNaN(number)) {
			return number.toFixed(0).replace(/./g, function(c, i, a) {
				return i && c !== ',' && a[i - 1] !== '-' && (a.length - i) % 3 === 0 ? ',' + c : c;
			});
		} else {
			return 0;
		}
	},
	convertDecimal: (number) => {
		if (!isNaN(number)) {
			let round = Math.round(number * 1000) / 1000;
			let parts = round.toString().split('.');
			let num =
				parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
				(number.toString().indexOf('.') > -1 ? (parts[1] ? '.' + parts[1] : '.') : '');
			return num;
		} else {
			return null;
		}
	},
	dummyRequest: ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok');
		}, 2000);
	},
	beforeUpload: (file) => {
		const isJPG = file.type === 'image/jpeg';
		const isPNG = file.type === 'image/png';
		if (!isJPG && !isPNG) {
			// notification('error', 'You can only upload Image file!', '');
			return false;
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			// notification('error', 'Image must smaller than 2MB!', '');
			return false;
		}
	},
	getBase64: (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	},
	isEmptyObject: (obj) => {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}
		return true;
	},
	convertHoursToFloat: (endDate) => {
		let rtn = null;
		if (endDate) {
			const hoursMinutes = endDate.split(/[.:]/);
			const hours = parseInt(hoursMinutes[0], 10);
			const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
			rtn = hours + minutes / 60;
		}
		return rtn;
	},
	SurPlus: (value) => {
		const surPlus = value % 1000;
		if (surPlus > 0) {
			if (surPlus >= 500) {
				value = value - surPlus + 1000;
			} else {
				value = value - surPlus;
			}
		}
		return value;
	},
	RoundZero: (value) => {
		let rtn = 0;
		if (!isNaN(value)) {
			let part = value.toString().split('.');
			if (part && part.length === 2) {
				const decimalPart = part[1][0];
				if (parseInt(decimalPart, 10) >= 5) {
					rtn = parseInt(part[0], 10) > 0 ? parseInt(part[0], 10) + 1 : parseInt(part[0], 10) - 1;
				} else {
					rtn = parseInt(part[0], 10);
				}
			}
		}
		return rtn;
	},
	dateFormat: 'YYYY/MM/DD',
	LimitOrderModalProductDisplay: 50,
	OfferType: {
		Import: 1,
		Export: 2
	},
	ExportProductType: {
		sold: 1,
		Destroy: 2,
		Other: 3,
		properties: {
			1: { name: 'Đã bán' },
			2: { name: 'Tiêu hủy' },
			3: { name: 'Khác' }
		},
		selectBox: [
			{ id: 1, name: 'Đã bán', hidden: true },
			{ id: 2, name: 'Tiêu hủy', hidden: false },
			{ id: 3, name: 'Khác', hidden: false }
		]
	},
	PromotionCate: {
		RoomPrice: 1,
		CustomerCard: 2,
		Order: 3,
		Product: 4,
		Donate: 4,
		properties: {
			1: 'Giá phòng',
			2: 'Khách hàng',
			3: 'Hóa đơn',
			4: 'Sản phẩm',
			5: 'Tặng'
		},
		selectBox: [
			{ id: 1, name: 'Giá phòng', disabled: false, nameTitle: 'giờ hát', disabledPayment: false },
			{ id: 2, name: 'Khách hàng', disabled: false, nameTitle: 'khách hàng', disabledPayment: false },
			{ id: 3, name: 'Hóa đơn', disabled: true, nameTitle: 'hóa đơn', disabledPayment: true },
			{ id: 4, name: 'Sản phẩm', disabled: false, nameTitle: 'sản phẩm', disabledPayment: true },
			{ id: 5, name: 'Tặng', disabled: false, nameTitle: 'Tặng', disabledPayment: true }
		]
	},
	OfferStatus: {
		All: 0,
		Pending: 1,
		Level1: 2,
		Level2: 3,
		Level3: 4,
		Destroy_1: 5,
		Destroy_2: 6,
		properties: {
			0: { name: 'Tất cả' },
			1: { name: 'Chờ duyệt' },
			2: { name: 'Chờ duyệt cấp 1' },
			3: { name: 'Chờ duyệt cấp 2' },
			4: { name: 'Đã duyệt' },
			5: { name: 'Hủy LV 1' },
			6: { name: 'Hủy LV 2' }
		}
	},
	ServiceCategory: {
		PhuThu: 1,
		Khac: 2,
		properties: {
			1: { name: 'Phụ thu' },
			2: { name: 'Khác' }
		},
		selectBox: [ { id: 1, name: 'Phụ thu' }, { id: 2, name: 'Khác' } ]
	},
	StoreCategory: {
		Extra: 1,
		Main: 2,
		Kitchen: 3,
		properties: {
			1: { name: 'Kho Phụ' },
			2: { name: 'Kho Chính' },
			3: { name: 'Kho Bếp' }
		},
		selectBox: [ { id: 1, name: 'Kho Phụ' }, { id: 2, name: 'Kho Chính' }, { id: 3, name: 'Kho Bếp' } ]
	},
	ExpenseStatus: {
		Approved: 1,
		notYetApproved: 2,
		Destroy: 3,
		properties: {
			1: { name: 'Đã duyệt' },
			2: { name: 'Chờ duyệt' },
			3: { name: 'Hủy duyệt' }
		},
		selectBox: [ { id: 1, name: 'Đã duyệt' }, { id: 2, name: 'Chờ duyệt' }, { id: 3, name: 'Hủy duyệt' } ]
	},
	ProductStatus: {
		None: 0,
		Success: 1,
		Return: 2,
		Processing: 3,
		Pending: 4,
		Order: 5,
		Stockkeeper: 6,
		CustomerRequest: 7,
		Canceled: 8,
		properties: {
			0: { name: 'Tất cả', title: 'tất cả', element: 'label', class: '', orderedTitle: 'Tất cả' },
			1: {
				name: 'Đã thanh toán',
				title: 'đã thanh toán',
				element: 'label',
				class: 'actionOrder',
				orderedTitle: 'Đã thanh toán'
			},
			2: {
				name: 'Đã trả',
				title: 'Đã trả món',
				element: 'label',
				class: 'actionOrder',
				orderedTitle: 'Đã trả món'
			},
			3: {
				name: 'Chế biến',
				title: 'Chờ lệnh chế biến',
				element: 'button',
				class: 'processingOrder',
				orderedTitle: 'Chờ chế biến'
			},
			4: {
				name: 'Trả',
				title: 'chờ mang',
				element: 'button',
				class: 'processingOrder',
				orderedTitle: 'Chờ trả món'
			},
			5: {
				name: 'Đặt sản phẩm',
				title: 'Đặt sản phẩm',
				element: 'button',
				class: 'actionOrder',
				orderedTitle: 'Đặt sản phẩm'
			},
			6: { name: 'Chờ thao tác', title: 'Chờ thao tác', class: 'processingOrder', orderedTitle: 'Chờ thao tác' },
			7: {
				name: 'Xác nhận',
				title: 'Khách hàng yêu cầu',
				element: 'button',
				class: 'processingOrder',
				orderedTitle: 'Chờ xác nhận'
			},
			8: { name: 'Đã hủy', title: 'Đã hủy', element: 'label', class: 'actionOrder', orderedTitle: 'Đã hủy' }
		}
	},
	ProductStockerStatus: {
		NEED_TRANSFER: 61,
		OUT_OF_STOCK: 62,
		CAN_BE_ORDER: 63,
		CAN_BE_PROCESS: 64,
		properties: {
			61: { name: 'Cần chuyển kho', title: 'yêu cầu chuyển kho' },
			62: { name: 'Cần nhập kho', title: 'yêu cầu nhập kho' },
			63: { name: 'Đặt món', title: 'đặt món' },
			64: { name: 'Chế biến', title: 'chế biến' }
		}
	},
	RoomStatus: {
		All: 0,
		Success: 1,
		Use: 2,
		NotPayment: 3,
		WaitClean: 4,
		Cleanning: 5,
		InActive: 6,
		RoomReserve: 7,
		properties: {
			0: { name: 'Tất cả' },
			1: { name: 'Sẵn sàng' },
			2: { name: 'Đang sử dụng' },
			3: { name: 'Chờ thanh toán' },
			4: { name: 'Chờ dọn' },
			5: { name: 'Đang dọn' },
			6: { name: 'Đặt trước' }
		}
	},
	// của Duyên
	BookRoomStatus: {
		All: 0,
		Success: 1,
		Use: 2,
		NotPayment: 3,
		WaitClean: 4,
		Cleanning: 5,
		InActive: 6,

		properties: {
			0: { name: 'Tất cả' },
			1: { name: 'Đang Trống' },
			2: { name: 'Đang Sử dụng' },
			3: { name: 'Đang Chờ thanh toán' },
			4: { name: 'Đang Chờ dọn' },
			5: { name: 'Đang dọn' }
		}
	},
	paymentTagNumber: [
		{ name: '1000K', value: 1000000 },
		{ name: '500K', value: 500000 },
		{ name: '200K', value: 200000 },
		{ name: '100K', value: 100000 },
		{ name: '50K', value: 50000 },
		{ name: '20K', value: 20000 },
		{ name: '10K', value: 10000 }
	],
	ProductOrderedStatus: {
		WAITING_FOR_RETURN: 1,
		RETURN: 2,
		PROCESSING: 3,
		properties: {
			1: { name: 'Chờ trả món', title: 'Chờ trả món' },
			2: { name: 'Trả món', title: 'Trả món' },
			3: { name: 'Chế biến', title: 'Chế biến' }
		}
	},
	ThirdPartyInfo: {
		CustomerArea: 0,
		properties: {
			0: { name: 'Khách hàng đặt món', url: '/customer-area', login: 'customer-area-login', key: 'customer-area' }
		}
	},
	ProductCategory: {
		selectBox: [
			{ name: 'Đóng gói', key: 1 },
			{ name: 'Chế biến khoán', key: 3 },
			{ name: 'Nguyên liệu', key: 2 },
			{ name: 'Chế biến tại Nhà hàng', key: 4 }
		],
		Packaged: 1,
		Resources: 2,
		OutsideProcessing: 3,
		InsideProcessing: 4,
		properties: {
			1: { name: 'Đóng gói' },
			2: { name: 'Nguyên liệu' },
			3: { name: 'Chế biến khoán' },
			4: { name: 'Chế biến tại Nhà hàng' }
		}
	},
	TransactionType: {
		Cash: 1,
		Transfer: 2,
		BankCard: 3,
		properties: {
			1: { name: 'Tiền mặt' },
			2: { name: 'Chuyển khoản' },
			3: { name: 'Thẻ ngân hàng' }
		},
		selectBox: [ { id: 1, name: 'Tiền mặt' }, { id: 2, name: 'Chuyển khoản' }, { id: 3, name: 'Thẻ ngân hàng' } ]
	},
	twoDecimal: (num) => {
		if (!isNaN(num)) {
			return Math.round(num * 100) / 100;
		} else {
			return 0;
		}
	},
	RoleBookRoom: {
		BookRoom: 1,
		ClearRoom: 2,
		RoomTransfer: 3,
		Order: 4,
		Pay: 5,
		Finish: 6,
		Destroy: 7,
		Continue: 9,
		properties: {
			1: { name: 'Đặt phòng' },
			2: { name: 'Dọn phòng' },
			3: { name: 'Chuyển' },
			4: { name: 'Đặt món' },
			5: { name: 'Thanh toán' },
			6: { name: 'Kết thúc' },
			7: { name: 'Hủy' },
			9: { name: 'Tiếp tục' }
		}
	},
	convertUnsignedString: (s) => {
		let sLower = s.toLowerCase();
		//let symbols = new Array;
		//symbols[0] = new Array("[!@#$%^&*()=+{}?<>\\[\];:\\\\.\/|,\s'\"]", "");
		//symbols[1] = new Array("[áàảãạăắằẳẵặâấầẩẫậ]", "a");
		//symbols[2] = new Array("[đ]", "d");
		//symbols[3] = new Array("[éèẻẽẹêếềểễệ]", "e");
		//symbols[4] = new Array("[íìỉĩị]", "i");
		//symbols[5] = new Array("[óòỏõọôốồổỗộơớờởỡợ]", "o");
		//symbols[6] = new Array("[úùủũụưứừửữự]", "u");
		//symbols[7] = new Array("[ýỳỷỹỵ]", "y");
		sLower = sLower.replace(/[!@#$%^&*()=+{}?<>\\[\];:\\\\.\\/|,\s'\\"]/gi, '');
		sLower = sLower.replace(/[áàảãạăắằẳẵặâấầẩẫậ]/gi, 'a');
		sLower = sLower.replace(/[đ]/gi, 'd');
		sLower = sLower.replace(/[éèẻẽẹêếềểễệ]/gi, 'e');
		sLower = sLower.replace(/[íìỉĩị]/gi, 'i');
		sLower = sLower.replace(/[óòỏõọôốồổỗộơớờởỡợ]/gi, 'o');
		sLower = sLower.replace(/[úùủũụưứừửữự]/gi, 'u');
		sLower = sLower.replace(/[ýỳỷỹỵ]/gi, 'y');
		return sLower;
	},
	ConfirmOrderReport: {
		Confirmed: 1,
		Confirm: 2,
		Cancelled: 3,
		RevenueCensorship: 4,
		properties: {
			1: { name: 'Đã xác nhận', element: 'label', class: 'actionOrder' },
			2: { name: 'Xác nhận', element: 'button', class: 'processingOrder' },
			3: { name: 'Đã Hủy', element: 'label', class: 'actionOrder' },
			4: { name: 'Kiểm duyệt Doanh thu', element: 'label', class: 'actionOrder' }
		}
	},
	PaymentType: {
		Cash: 1,
		Transfer: 2,
		BankCard: 3,
		properties: {
			1: { name: 'Tiền mặt' },
			2: { name: 'Chuyển khoản' },
			3: { name: 'Thẻ ngân hàng' }
		}
	},
	TimeKeepingConfigType: {
		AmountDefault: 1,
		AmountTime: 2,
		properties: {
			1: 'Cố định',
			2: 'Theo giờ'
		}
	},
	ProductOrderFilter: [
		{ type: 1, name: 'Sản phẩm' },
		{ type: 2, name: 'Loại Sản phẩm' },
		{ type: 3, name: 'Nhóm Sản phẩm' },
		{ type: 4, name: 'Phòng' },
		{ type: 5, name: 'Tầng' }
		/*Product: 1,
        ProductType:  2,
        ProductGroup: 3,
        ProductRoom: 4,
        properties: {
            1: {name: "Sản phẩm"},
            2: {name: "Loại Sản phẩm"},
            3: {name: "Nhóm Sản phẩm"},
            4: {name: "Phòng"}
        }*/
	],
	ColorPalette: [
		'#d0d1e6',
		'#a6bddb',
		'#67a9cf',
		'#3690c0',
		'#02818a',
		'#006837',
		'#1a9850',
		'#66bd63',
		'#d9ef8b',
		'#ffffbf',
		'#fee08b',
		'#fdae61',
		'#f46d43',
		'#d73027',
		'#a50026',
		'#d73027',
		'#f46d43',
		'#fdae61',
		'#fee08b',
		'#ffffbf',
		'#d9ef8b',
		'#a6d96a',
		'#66bd63',
		'#1a9850',
		'#006837',
		'#016c59',
		'#02818a',
		'#3690c0',
		'#67a9cf',
		'#a6bddb',
		'#d0d1e6',
		'#ece2f0'
	],
	ChartType: [
		{ id: 1, name: 'Tổng Doanh thu' },
		{ id: 2, name: 'Doanh thu theo Ngày' },
		{ id: 3, name: 'Giờ theo Phòng' },
		{ id: 4, name: 'Doanh thu theo Phòng' },
		{ id: 5, name: 'Sản phẩm' },
		{ id: 6, name: 'Trái cây tồn kho' }
	],
	ChartTypeOnDay: [
		{ id: 1, name: 'Tổng Doanh thu' },
		{ id: 2, name: 'Tình trạng Phòng' },
		{ id: 4, name: 'Doanh thu theo Phòng' },
		{ id: 3, name: 'Giờ theo Phòng' }
	],
	TimeSlot: [ { id: 1, name: '9h - 9h' }, { id: 2, name: '0h - 24h' } ]
};
export default helperFunc;
