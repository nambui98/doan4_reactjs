import { all } from 'redux-saga/effects';
import accountSagas from './Account/saga';
import profileSaga from './profile/sagas';
import slideSaga from './Slide/sagas';
import roleSaga from './Role/sagas';
import configSaga from './Config/sagas';
import usersSaga from './User/sagas';
import incidentTypeSaga from './IncidentType/sagas';
import IncidentSeveritySaga from './IncidentSeverity/sagas';
import IncidentsSaga from './Incidents/sagas';
import AnnoucementSaga from './Annoucement/sagas';
import CheckListSaga from './CheckList/sagas';
import IncidentDamagesSaga from './IncidentDamages/sagas';
import JobSiteSaga from './JobSite/sagas';
import JobTypeSaga from './JobType/sagas';
import JobSaga from './Job/sagas';
import AnnoucementTypeSaga from './AnnoucementType/sagas';
import CheckListDailyTypeSaga from './CheckListDaily/sagas';
import DashboardSaga from './Dashboard/sagas';
import UserAnnouncementSaga from './UserAnnouncement/sagas';
import SummarySaga from './Summary/sagas';
import CategoriesBigSaga from './CategoriesBig/sagas';
import CategoriesTwoSaga from './CategoriesTwo/sagas';
import CategoriesSmallSaga from './CategoriesSmall/sagas';
import Bill_ImportSaga from './Bill_Import/sagas';
import ProductSaga from './Product/sagas';
import CartWaitSaga from './CartWait/Sagas';
import CartSuccessSaga from './CartSuccess/Sagas';
import CartDeliverySaga from './CartDelivery/Sagas';
import CartCancelSaga from './CartCancel/Sagas';
import PromotionSaga from './Promotion/Sagas';
import PromotionTypeSaga from './PromotionType/Sagas';
import CustomerSaga from './Customer/sagas';
import newsSaga from './News/sagas';
import newsTypeSaga from './NewsType/sagas';
import ExpiredProductSaga from './ExpiredProduct/sagas';

export default function* devSaga() {
	yield all([
		accountSagas(),
		profileSaga(),
		slideSaga(),
		configSaga(),
		roleSaga(),
		usersSaga(),
		incidentTypeSaga(),
		IncidentSeveritySaga(),
		IncidentsSaga(),
		AnnoucementSaga(),
		CheckListSaga(),
		IncidentDamagesSaga(),
		JobSiteSaga(),
		JobTypeSaga(),
		JobSaga(),
		AnnoucementTypeSaga(),
		CheckListDailyTypeSaga(),
		DashboardSaga(),
		UserAnnouncementSaga(),
		SummarySaga(),
		CategoriesBigSaga(),
		CategoriesTwoSaga(),
		CategoriesSmallSaga(),
		Bill_ImportSaga(),
		ProductSaga(),
		CartWaitSaga(),
		CartSuccessSaga(),
		CartDeliverySaga(),
		CartCancelSaga(),
		PromotionSaga(),
		PromotionTypeSaga(),
		CustomerSaga(),
		newsTypeSaga(),
		newsSaga(),
		ExpiredProductSaga()
	]);
}
