import styled from 'styled-components';
import WithDirection from '../settings/withDirection';
//import bgLogin from '../public/images/bg_login.png'

const DataWrapper = styled.div`
    .HandleOrderedAction{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 0 20px;
        margin-top: 7px;
        .LeftContent{
            width: 50%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            @media screen and (max-width: 1366px){
                width: 50%
            }
        }
        .RighContent{
            width: 50%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            @media screen and (max-width: 1366px){
                width: 50%
            }
        }
        .RePrintWrapper{
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            .SelectTime{
                width: 170px;
            }
        }
        .ActionButton{
            background-color: #2d3446;
            color: white;
            border-radius: 6px;
            outline: none;
            border: none;
            margin-right: 15px;
        }
    }
    @media screen and (max-width: 1199px){
        .HandleOrderedAction{
            .ActionButton{
                margin-right: 5px;
            }
            .RePrintWrapper{
                .SelectTime{
                    width: 150px;
                    font-size: 12px;
                }
            }
        }
    }
    @media screen and (max-width: 991px){
        .HandleOrderedAction{
            display: none;
        }
    }
    .ListOrderFormWrapper{
        visibility: hidden;
        height: 0;
        opacity: 0;
    }
    
    .MyInputNumber{
        input{
            text-align: right !important;
            padding-right: 25px;
        }
    }
    .LeftSideContent,
    .RightSideContent{
        width: 50%;
        float: left;
        padding-left: 30px;
    }

    .FullSideContent{
        padding-left: 30px;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
    @media screen and (max-width: 991px){
        .LeftSideContent,
        .RightSideContent{
            width: 100%;
            float: none;
            padding: 0;
        }
    }
    @media screen and (max-width: 767px){
        .modalStyle{
            top: 0;
        }
    }
    .hide{
        display: none
    }

    .titleWrapper{
        background-color: #f2f2f2;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 0;

        h3{
            margin-top: 7px;
            margin-bottom: 9px;
        }
    }

    .btWizard{
        display: inline-block;
        border: 2px solid white;
        height: 32px;
        color: white;
        padding: 0;
        padding-right: 15px;
        background-color: #2d3446;
        border-radius: 10px;
        cursor: pointer;
        i{
            color: white;
            width: 30px;
            line-height: 28px;
            border-right: 1px solid white;
            margin-right: 7px;
            padding-top: 2px;
        }

        &:hover {
            background-color: #3f3f3f;
        }

    }

    .allInner{
        .btWizard{
            i{
                line-height: 18px;
            }
    
        }
    }

    .btnRefresh{
        margin-right: 10px;
    }

    .btSearch{
        display: inline-block;
        border: 1px solid #2d3446;
        background-color: #fff;
        color: white;
        width: 60px;
        height: 32px;
        top: 2px;
        position: relative;
        line-height: 32px;
        text-align: center;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #2d3446;
        cursor: pointer;

        i{
            margin-left: 0;
        }
        &:hover {
            background-color: #3f3f3f;
        }
    }

    .btnWarning{
        display: inline-block;
        border: 1px solid #f39c12;
        line-height: 32px;
        color: #f39c12;
        padding 0 15px;
        background-color: #fff;

        i{
            color: #f39c12;
        }
        &: hover{
            box-shadow: 3px 3px 10px rgba(243,156,18,0.4);
            color: #f39c12;
            border: 1px solid #f39c12;
        }
        &: active{
            color: #f39c12;
            border: 1px solid #f39c12;
        }
        &: focus{
            color: #f39c12;
            border: 1px solid #f39c12;
        }
    }

    .inputSearch{
        width: 260px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 32px;

        &: hover{
            color: #2d3446;
            border: 1px solid #2d3446;
        }
        &: focus{
            color: #2d3446;
            border: 1px solid #2d3446;
            box-shadow: none;
        }
    }

    .PageHeader{
        font-size: 17px;
        font-weight: 500;
        color: white;
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        white-space: nowrap;
        background-color: #2d3446;
        text-transform: uppercase;
        border-bottom: 3px solid white;

        &::before {
            content: '';
            width: 5px;
            height: 37px;
            background-color: #2d3446;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            margin: 0 15px 0 0;
        }
    }

    .boxWrapper{
        padding: 0;
    }

    .selectImage{
        background-image: url(../../../public/images/user.png);
        background-repeat: no-repeat;
        background-position: 50%;
        width: 100px;
        height: 100px;
        position: absolute;
        z-index: 10;
        opacity: 0;
        cursor: pointer;
    }

    .notBorder{
        width: 50%;
        padding: 15px;
        margin: 0 auto;
    }

    .whiteSpace{
        white-space: normal;
    }

    .nameLink{
        font-weight: 700;
        color: #2d3446!important;
    }

    .label{
        display: inline-block;
        width: 30%;
        float: left;
        font-weight: bold;
        padding: 0 7px;
    }

    .detailField:last-child .label{
        border-right: 1px solid #e1e1e1;
    }

    .contentDetail{
        display: inline-block;
        width: 70%;
        float: left;
        padding: 0 7px;
        border-left: 1px solid #e1e1e1;
    }

    .detailField:last-child .contentDetail{
        border-left: none;
    }

    .detailField{
        margin: 10px 0;
        border: 1px solid #e1e1e1;
        line-height: 30px;
        border-radius: 10px;
    }

    .showAvatar {
        width: 100px;
        height: 100px;
        border: 5px solid #d5d5d5;
        border-radius: 50%;
        overflow: hidden;
        margin: 10px 15px;
    }

    .showAvatar img{
        max-width: 100%;
    }
    .w_30{
        width: 33.33333333%;
    }

    .w_60{
        width: 66.66666667%;
    }

    .outerFormFlex{
        -webkit-flex: 1;
        -ms-flex: 1;
        display: flex;
        justify-content: space-around;
    }

    .disable{
        cursor: not-allowed;
    }

    span.private{
        background-color: #B20000;
    }
    
    .textAreaTwoRow{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .textAreaThreeRow{
        padding-top: 13px;
        padding-bottom: 13px;
    }

    .myHasFeedback{
        color: #f5222d;
        font-size: 14px;
        padding-top: 2px;
        padding-botton: 2px;
    }

    .tableRepay tbody tr td:last-child{
        width: 250px;
    }

    .detailFieldFullBorder{
        border-right: 1px solid #e1e1e1;
    }

    @media screen and (max-width: 1600px){
        .LeftSideContent.md_width_auto
        {
            width: 60%;
        }
    }

    @media screen and (max-width: 1400px){
        .LeftSideContent.md_width_auto
        {
            width: 70%;
        }
    }

    @media screen and (max-width: 1199px){
        .LeftSideContent.md_width_auto
        {
            width: 90%;
        }
    }

    @media screen and (max-width: 991px){
        .w_30{
            width: 100%;
        }

        .w_60{
            width: 100%;
        }
        .outerFormFlex{
            display: block;
        }

        .LeftSideContent.md_width_auto
        {
            width: 100%;
        }

        .inputSearch{
            width: 200px;
        }
    }

    @media screen and (max-width: 767px){
        .titleWrapper{
            padding: 15px;
        }

        .titleWrapper h3{
            margin: 0 auto;
        }

        .inputSearch{
            width: 220px;
        }

        .btnAdd.btWizard{
            float: right;
        }

        .btWizard{
            width: 50%;
        }

        .btnRefresh {
            margin-right: 0;
        }

        .group_bt_head{
            width: 100%;
            margin-top: 5px;
        }
    }

   .cancelType{
        background-color: "#af1921" !important;
        color: "#FFFFFF" !important;
        border-radius: "6px" !important;
    }

    .my-body{
        background-color: #2d3446;
        height: 100vh;
    }

    .my-container{
        max-width: 1570px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    .my-col{
        position: relative;
        padding-right: 15px;
        padding-left: 15px;
        min-height: 1px;
    }
    
    .my-col-xs-1,
    .my-col-xs-2,
    .my-col-xs-3,
    .my-col-xs-4,
    .my-col-xs-5,
    .my-col-xs-6,
    .my-col-xs-7,
    .my-col-xs-8,
    .my-col-xs-9,
    .my-col-xs-10,
    .my-col-xs-11,
    .my-col-xs-12,
    .my-col-xs-13,
    .my-col-xs-14,
    .my-col-xs-15,
    .my-col-xs-16{
        float: left;
    }
    
    .my-col-xs-1{
        width: 6.25%;
    }
    
    .my-col-xs-2{
        width: 12.5%;
    }
    
    .my-col-xs-3{
        width: 18.75%;
    }
    
    .my-col-xs-4{
        width: 25%;
    }
    
    .my-col-xs-5{
        width: 31.25%;
    }
    
    .my-col-xs-6{
        width: 37.5%;
    }
    
    .my-col-xs-7{
        width: 43.75%;
    }
    
    .my-col-xs-8{
        width: 50%;
    }
    
    .my-col-xs-9{
        width: 56.25%;
    }
    
    .my-col-xs-10{
        width: 62.5%;
    }
    
    .my-col-xs-11{
        width: 68.75%;
    }
    
    .my-col-xs-12{
        width: 75%;
    }
    
    .my-col-xs-13{
        width: 81.25%;
    }
    
    .my-col-xs-14{
        width: 87.5%;
    }
    
    .my-col-xs-15{
        width: 93.75%;
    }
    
    .my-col-xs-16{
        width: 100%;
    }
    
    @media (min-width: 768px){
        .my-col-sm-1,
        .my-col-sm-2,
        .my-col-sm-3,
        .my-col-sm-4,
        .my-col-sm-5,
        .my-col-sm-6,
        .my-col-sm-7,
        .my-col-sm-8,
        .my-col-sm-9,
        .my-col-sm-10,
        .my-col-sm-11,
        .my-col-sm-12,
        .my-col-sm-13,
        .my-col-sm-14,
        .my-col-sm-15,
        .my-col-sm-16{
            float: left;
        }
    
        .my-col-sm-1{
            width: 6.25%;
        }
    
        .my-col-sm-2{
            width: 12.5%;
        }
    
        .my-col-sm-3{
            width: 18.75%;
        }
    
        .my-col-sm-4{
            width: 25%;
        }
    
        .my-col-sm-5{
            width: 31.25%;
        }
    
        .my-col-sm-6{
            width: 37.5%;
        }
    
        .my-col-sm-7{
            width: 43.75%;
        }
    
        .my-col-sm-8{
            width: 50%;
        }
    
        .my-col-sm-9{
            width: 56.25%;
        }
    
        .my-col-sm-10{
            width: 62.5%;
        }
    
        .my-col-sm-11{
            width: 68.75%;
        }
    
        .my-col-sm-12{
            width: 75%;
        }
    
        .my-col-sm-13{
            width: 81.25%;
        }
    
        .my-col-sm-14{
            width: 87.5%;
        }
    
        .my-col-sm-15{
            width: 93.75%;
        }
    
        .my-col-sm-16{
            width: 100%;
        }
    }
    
    @media (min-width: 992px){
        .my-col-md-1,
        .my-col-md-2,
        .my-col-md-3,
        .my-col-md-4,
        .my-col-md-5,
        .my-col-md-6,
        .my-col-md-7,
        .my-col-md-8,
        .my-col-md-9,
        .my-col-md-10,
        .my-col-md-11,
        .my-col-md-12,
        .my-col-md-13,
        .my-col-md-14,
        .my-col-md-15,
        .my-col-md-16{
            float: left;
        }
    
        .my-col-md-1{
            width: 6.25%;
        }
    
        .my-col-md-2{
            width: 12.5%;
        }
    
        .my-col-md-3{
            width: 18.75%;
        }
    
        .my-col-md-4{
            width: 25%;
        }
    
        .my-col-md-5{
            width: 31.25%;
        }
    
        .my-col-md-6{
            width: 37.5%;
        }
    
        .my-col-md-7{
            width: 43.75%;
        }
    
        .my-col-md-8{
            width: 50%;
        }
    
        .my-col-md-9{
            width: 56.25%;
        }
    
        .my-col-md-10{
            width: 62.5%;
        }
    
        .my-col-md-11{
            width: 68.75%;
        }
    
        .my-col-md-12{
            width: 75%;
        }
    
        .my-col-md-13{
            width: 81.25%;
        }
    
        .my-col-md-14{
            width: 87.5%;
        }
    
        .my-col-md-15{
            width: 93.75%;
        }
    
        .my-col-md-16{
            width: 100%;
        }
    }
    
    @media (min-width: 1200px) {
        .my-col-lg-1,
        .my-col-lg-2,
        .my-col-lg-3,
        .my-col-lg-4,
        .my-col-lg-5,
        .my-col-lg-6,
        .my-col-lg-7,
        .my-col-lg-8,
        .my-col-lg-9,
        .my-col-lg-10,
        .my-col-lg-11,
        .my-col-lg-12,
        .my-col-lg-13,
        .my-col-lg-14,
        .my-col-lg-15,
        .my-col-lg-16{
            float: left;
        }
    
        .my-col-lg-1{
            width: 6.25%;
        }
    
        .my-col-lg-2{
            width: 12.5%;
        }
    
        .my-col-lg-3{
            width: 18.75%;
        }
    
        .my-col-lg-4{
            width: 25%;
        }
    
        .my-col-lg-5{
            width: 31.25%;
        }
    
        .my-col-lg-6{
            width: 37.5%;
        }
    
        .my-col-lg-7{
            width: 43.75%;
        }
    
        .my-col-lg-8{
            width: 50%;
        }
    
        .my-col-lg-9{
            width: 56.25%;
        }
    
        .my-col-lg-10{
            width: 62.5%;
        }
    
        .my-col-lg-11{
            width: 68.75%;
        }
    
        .my-col-lg-12{
            width: 75%;
        }
    
        .my-col-lg-13{
            width: 81.25%;
        }
    
        .my-col-lg-14{
            width: 87.5%;
        }
    
        .my-col-lg-15{
            width: 93.75%;
        }
    
        .my-col-lg-16{
            width: 100%;
        }
    }

    .my-logo{
        text-align: center;
        padding: 35px 0;
    }
    
    .my-logo a img{
        max-width: 170px;
    }

    .bound-login{
        border: 4px solid white;
        border-radius: 10px;
        background-color: #5f636e;
        background-position: 50%;
        padding: 190px 0px 40px 0;
    }

    .outer-form{
        width: 470px;
        margin: 0 auto;
        border: 5px solid white;
        border-radius: 7px;
        background-color: white;
        position: relative;
        margin-bottom: 120px;
    }

    .outer-form .content-login{
        background-color: #fff;
        border-radius: 7px;
        padding: 70px 30px 35px 30px;
    }

    .inputLogin.ant-input,
    .inputLogin .ant-select-selection{
        border: 1px solid #e1e1e1;
        border-radius: 7px;
    }

    .inputLogin.ant-input::-webkit-input-placeholder{
        color: #acacac;
        font-size: 13px;
    }
    .inputLogin.ant-input::-moz-placeholder {
        color: #acacac;
        font-size: 13px;
    }
    .inputLogin.ant-input:-ms-input-placeholder {
        color: #acacac;
        font-size: 13px;
    }
    .inputLogin.ant-input:-moz-placeholder {
        color: #acacac;
        font-size: 13px;
    }

    .inputLogin .ant-select-selection__placeholder{
        color: #acacac;
        font-size: 13px;
    }

    .icon-login span{
        display: inline-block;
        width: 110px;
        height: 110px;
        border: 5px solid white;
        border-radius: 50%;
        background-color: #2d2d2d;
        text-align: center;
        line-height: 100px;
        position: absolute;
        top: -55px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .ant-checkbox-wrapper + span, .ant-checkbox + span{
        position: relative;
        top: 2px;
    }

    .loginButton.ant-btn {
        border-radius: 7px;
        height: 32px;
        border: 1px solid #79c043;
        background-color: #5f636e;
        color: #ffffff;
        font-weight: bold;
        padding-top: 3px;
    }
    .loginButton.LinkTo{
        border-radius: 7px;
        height: 32px;
        border: 1px solid white;
        background-color: white;
        color: #242424;
        font-weight: bold;
        line-height: 32px;
        display: inline-block;
        text-transform: uppercase;
        padding: 0 10px;
    }

    .footer-login .img{
        text-align: center;
    }

    .footer-login .address{
        width: 430px;
        text-align: center;
        font-size: 12px;
        color: white;
        text-transform: uppercase;
        margin: 0 auto;
        margin-top: 30px;
    }

    @media screen and (max-height: 1366px){
        .my-logo a img {
            max-width: 100%;
            position: relative;
            top: 50%;
            transform: translateY(100%);
        }

        .bound-login{
            position: relative;
            top: 50%;
            transform: translateY(25%);
        }
    }

    @media screen and (max-height: 1024px){
        .my-logo a img {
            max-height: 90px;
            top: auto;
            transform: none;
        }

        .bound-login{
            top: auto;
            transform: none;
        }
    }

    @media screen and (max-height: 900px){
        .bound-login{
            padding: 100px 0px 40px 0;
        }
    }

    @media screen and (max-height: 800px){
        .outer-form{
            margin-bottom: 30px;
        }
    }

    @media screen and (max-height: 720px){
        .bound-login {
            padding: 70px 0px 20px 0;
        }

        .outer-form {
            margin-bottom: 20px;
        }

        .footer-login .address{
            margin-top: 20px;
        }
    }

    @media screen and (max-height: 680px){
        .my-logo a img {
            
            max-height:120px;
        }

        .icon-login span{
            width: 80px;
            height: 80px;
            line-height: 70px;
            top: -40px;
        }

        .icon-login span img{
            max-width: 30px;
        }

        .outer-form .content-login {
            padding: 55px 30px 35px 30px;
        }

        .bound-login {
            padding: 55px 0px 20px 0;
        }

        .my-logo {
            padding: 30px 0;
        }
    }

    @media screen and (max-width: 767px){
        .outer-form{
            width: auto;
            border: 2px solid white;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }

        .bound-login{
            border: none;
            background-image: none;
            padding: 0;
            height: 60vh;
        }

        .my-body{
            background-color: #5f636e;
            background-position: 50%;
        }

        .footer-login .address {
            width: auto;
            text-align: justify;
            display: none;
        }

        .icon-login span{
            border: 2px solid white;
            width: 60px;
            height: 60px;
            top: -30px;
            line-height: 50px;
        }

        .icon-login span img{
            max-width: 25px;
        }

        .icon-login{
            display: none;
        }

        .outer-form .content-login {
            padding: 15px;
        }

        .inputLogin.ant-input, 
        .inputLogin .ant-select-selection {
            border-radius: 4px;
        }

        .loginButton.ant-btn {
            border-radius: 4px;
        }

        .my-logo {
            height: 30vh;
            padding: 0;
        }

        .my-logo a{
            display: block;
            position: relative;
            text-align: center;
            top: 50%;
        }

        .footer-login.hidden-xs{
            display: none;
        }

        .footer-login{
            height: 20vh;
        }

        .footer-login .img{
            position: relative;
        }
    }

    .isoSimpleTable{
        padding: 7px 20px 20px 20px;
    }

    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner:after{
        background-color: #2d3446;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
    .ant-checkbox:hover .ant-checkbox-inner, 
    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-checked .ant-checkbox-inner{
        border-color: #2d3446;
    }

    .ant-table-thead > tr > th{
        background-color: #2d3446!important;
        color: white!important;
    }

    .ant-table-thead > tr > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover{
        background-color: #3f3f3f;
    }

    .ant-table-tbody > tr:nth-child(odd)>td{
        background-color: #f2f2f2;
    }

    .ant-table-tbody > tr:nth-child(even)>td{
        background-color: #e9e7e7;
    }

    .ant-table-bordered .ant-table-thead > tr > th, 
    .ant-table-bordered .ant-table-tbody > tr > td{
        border-right: 1px solid #d7d7d7;
        border-bottom: 1px solid #d7d7d7;
        padding: 9px 15px;
    }

    .ant-table-tbody > tr > td:first-child{
        border-left: 1px solid #d7d7d7;
    }

    .ant-table-thead > tr{
        border: 1px solid #2d3446;
    }

    .ant-table-thead > tr:first-child > th:first-child,
    .ant-table-thead > tr:first-child > th:last-child{
        border-radius: 0;
    }

    .aSimple{
        display: inline-block;
        cursor: pointer;
        width: 32px;
        height: 32px;
        background-color: #2d3446;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        margin-left:5px;
        i{
            color: #fff;
            font-size: 14px;
        }

        i.deleteRow{
            font-size: 17px;
            line-height: 0;
            top: 2px;
            position: relative;
            color: #fff;
        }

        &: hover{
            background-color: #3f3f3f;

            i{
                color: #fff;
            }

            i.deleteRow{
                color: #fff;
            }
        }
    }
    .bSimple, .ProductStockerActionButton{
        display: inline-block;
        height: 28px;
        background-color: #2d3446;
        text-align: center;
        line-height: 28px;
        color: white !important;
        padding: 0 10px;
        font-weight: 500;
        border-radius: 6px;
    }
    .ProductStockerActionButton{
        border: none;
        font-size: 12px;
        &.hover{
            outline: none;
            border: none;
            background-color: #2d3446;
        }
    }
    .aTag > .ant-tag{
        cursor: context-menu
    }
    
    .ant-table-thead > tr > th.ant-table-selection-column, 
    .ant-table-tbody > tr > td.ant-table-selection-column{
        min-width: 0; 
        width: 10px;
    }

    @media screen and (max-width: 767px){
        .isoSimpleTable {
            padding: 15px;
        }
    }

    span.publish{
        background-color: #79c043!important;
    }

    span.private{
        background-color: #939598!important;
    }

    .ant-pagination-item-active{
        background-color: #79c043!important; 
        border-color: #79c043!important;
    }

    .ant-pagination-item:hover{
        border-color: #79c043!important;
    }

    .ant-pagination-item:hover a{
        color: #2d3446!important;
    }

    .ant-table-pagination.ant-pagination{
        margin: 10px 0;
    }

    .tableInnerModal.isoSimpleTable{
        padding: 0;
    }

    .ant-table-small > .ant-table-content > .ant-table-body {
        margin: 0;
    }

    .ant-pagination-prev:focus .ant-pagination-item-link, 
    .ant-pagination-next:focus .ant-pagination-item-link, 
    .ant-pagination-prev:hover .ant-pagination-item-link, 
    .ant-pagination-next:hover .ant-pagination-item-link {
        border-color: #BB9149;
        color: #3f3f3f;
    }

    @media screen and (max-width: 767px){
        .ant-pagination-total-text{
            display: none;
        }
    }

    .extend {
        display: none;
    }

    .ant-checkbox-group{
        width: 100%;
    }

    .rowCheckbox{
        padding-left: 30px;
    }

    .checkboxAll{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 767px){
        .rowCheckbox{
            padding-left: 15px;
        }
    }

    .processingOrder{
        display: inline-block;
        border: 1px solid white;
        height: 32px;
        color: white;
        padding: 0 10px;
        background-color: #2d3446;
        border-radius: 7px;
        text-align: center;
    }

    .processingOrder:hover,
    .processingOrder:focus{
        background-color: #393939;
        border: 1px solid #D7AA5E;
        color: #D7AA5E;
    }

    .actionOrder{
        display: inline-block;
        border: 1px solid #2d3446;
        height: 32px;
        line-height: 32px;
        color: #2d3446;
        padding: 0 10px;
        background-color: #fff;
        border-radius: 7px;
        text-align: center;
    }

    .actionOrder:hover{
        background-color: #fff;
        border: 1px solid #393939;
        color: #393939;
    }

    .ant-btn:hover, .ant-btn:focus {
        color: white;
        border-color: white;
        background-color: #393939;
    }

    .selectOutPageLight .ant-select-selection__placeholder, 
    .selectOutPageLight .ant-select-search__field__placeholder{
        color: rgba(217, 186, 133, 0.5);
        font-weight: 300;
    }

    .rangePickerReport{
        .ant-calendar-picker-input{
            border-color: #2d3446;
            background-color: #2d3446;
            color: white;
        }
        &: hover{
            .ant-calendar-picker-input{
                border-color: #393939!important;
            }
        }

        .ant-calendar-range-picker-separator{
            color: white;
        }

        .ant-calendar-picker-icon{
            color: white;
        }

        input::-webkit-input-placeholder{
            color:white;
        }

        input::-moz-placeholder {
            color:white;
        }

        input:-ms-input-placeholder {
            color:white;
        }
        
        input:-moz-placeholder {
            color:white;
        }
    }

    .showDetail{
        color: #393939 !important;
    }
    

    .orderForm,
    .orderForm.btPrint{
        visibility: hidden;
        height: 0;
        opacity: 0;
    }

    .orderForm.btPrint{
        position: absolute;
    }

    .myTableOpenRow .ant-table-bordered .ant-table-thead > tr.ant-table-expanded-row > th, 
    .myTableOpenRow .ant-table-bordered .ant-table-tbody > tr.ant-table-expanded-row > td{
        padding: 0;
    }

    .tableInnerTable .ant-table-thead > tr{
        border: none;
    }

    .tableInnerTable .ant-table-thead > tr > th{
        background-color: #fff!important;
    }

    .tableInnerTable .ant-table-tbody > tr:nth-child(odd)>td,
    .tableInnerTable .ant-table-tbody > tr:nth-child(even)>td{
        background-color: #fff;
    }

    .ant-table-tbody > tr:nth-child(even)>td {
        background-color: #fff;
    }

    .myTableOpenRow .ant-table-expanded-row td:first-child{
        background-color: #f2f2f2;
    }

    .FormSelectOrder .w_30{
        width: 30%;
        float: left;
    }

    .FormSelectOrder{
        margin-top: 7px;
        background-color: #2d3446;
    }

    .selectOutPage .ant-select-selection{
        background-color: #000;
        border: 1px solid white;
        color: white;
    }

    .selectOutPage .ant-select-arrow{
        color: white;
    }

    .selectOutPage.selectOutPageLight .ant-select-selection{
        background-color: #2d3446;
    }

    .FormSelectOrder .ant-form-item-label label{
        color: white;
    }

    .FormSelectOrder .ant-form-item-label,
    .FormSelectOrder .ant-form-item-control{
        line-height: 45px;
    }

    @media screen and (max-width: 991px){
        .FormSelectOrder.ant-form label {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 767px){
        .FormSelectOrder .w_30{
            width: 33.33333333%;
            padding-bottom: 5px;
        }

        .FormSelectOrder .ant-form-item-label,
        .FormSelectOrder .ant-form-item-control{
            line-height: normal;
            text-align: center;
        }

        .FormSelectOrder .ant-form-item-label{
            padding: 5px 0;
        }

        .FormSelectOrder{
            background-color: #000;
            padding: 0 5px;
            margin-top: 0;
        }
    }

    .expandedRow.w_40{
        width: 15%;
        float: left;
    }

    .expandedRow.w_60{
        width: 85%;
        float: left;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
    }

    span.lstLabelItem{
        display: inline-block;
        height: 28px;
        padding: 0 10px;
        border: 1px solid white;
        line-height: 28px;
        border-radius: 5px;
        background-color: white;
        color: #fff;
        font-weight: 300;
    }

    span.lstLabelItem i{
        margin-right: 5px;
    }

    span.lstLabelItem.active{
        background-color: #000;
        color: white;
        border: 1px solid #000;
        font-weight: bold;
    }

    .expandedRowArrow{
        color: #BB9149;
        line-height: 28px;
    }

    @media screen and (max-width: 1199px){
        .expandedRow.w_40{
            width: 100%;
            float: none;
            margin-bottom: 5px;
        }
        .expandedRow.w_60{
            width: 100%;
            float: none;
            padding-left: 0;
        }
    }

    .totalPrice{
        color: #393939;
        strong{
            color: #000;
            font-size: 18px;
            float: right;
        }
    }

    .ant-table-footer{
        padding: 15px;
    }

    .tableReport .ant-table-thead > tr > th{
        background-color: rgba(0, 0, 0, 0.05)!important;
        color: #000!important;
        font-weight: bold;
    }

    .tableReport .ant-table-thead > tr{
        border: 1px solid #d7d7d7;
    }

    .tableReport .ant-table-tbody > tr > td{
        color: #000;
    }
    
    .report{
        display: none;
    }

    .w_80{
        width: 80%;
        float: left;
        min-height: 1px;
    }
    .tableReport {
        padding: 0;
    }

    .RightSideContent .upDown_{
        text-align: right;
    }

    .cancelOrder{
        display: inline-block;
        border: 1px solid #BB9149;
        height: 32px;
        line-height: 32px;
        color: #000;
        padding: 0 10px;
        background-color: white;
        border-radius: 7px;
        text-align: center;
    }

    .cancelOrder:hover{
        background-color: white;
        border: 1px solid white;
        color: #000;
    }

    .isoChartWrapper{
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .reportChart{
        width: 100%;
        line-height: 46px;
        .w_33{
            width: 33.33333333%;
            float: left;
            span.label{
                margin-right: 5px;
                width: auto;
            }
        }
    }

    .bounderChart{
        width: 50%;
        height: 500px;
        margin: 0 auto;
        margin-bottom: 30px;

        svg:not(:root) {
            overflow: visible;
        }
    }

    .h_device_75{
        min-height: 75vh;
    }

    .bounderChart{
        min-height: 75vh;
    }
    @media screen and (max-width: 1199px){
        .bounderChart{
            width: 100%;
        }
    }

    @media screen and (max-width: 767px){
        .reportChart{
            .w_33{
                width: 100%;
                float: none;
            }
        }
        .bounderChart{
            width: 100%;
            height: 300px;
        }

        .reportChart{
            line-height: 32px;
        }
    }

    .revenueAmount{
        padding-left: 27px;
        padding-right: 20px;
        padding-top: 10px;
    }

    .revenueAmountItem{
        line-height: 32px;
        margin-bottom: 20px;
        position: relative;
    }

    .revenueAmountItem_left{
        width: 20%;
        float: left;
        min-height: 1px;
    }

    .revenueAmountItem_right{
        width: 80%;
        float: left;
        min-height: 1px;
    }

    .bg_white{
        background-color: #fff;
        min-height: 100vh;
    }

    .statusRooms{
        a{
            color: #2d3446;
            &: hover{
                color: rgb(179, 142, 78);
            }
            &: focus{
                color: rgb(179, 142, 78);
            }
            span{
                display: inline-block;
                width: 150px;
            }
        }
    }

    .btWizard.noPaddingRight{
        padding-left: 15px;
    }

    svg:not(:root){
        overflow: visible;
    }

    .bounderChart.chartHorizontal{
        width: 90%;
        height: 600px;
        min-height: auto;
        position: relative;
        top: -80px;
    }

    .bounderChart.chartHorizontal.noneTopMove{
        top: auto;
    }

    .bounderChart.chartHorizontal500{
        width: 90%;
        height: 800px;
        min-height: auto;
    }

    .top_move{
        position: relative;
        top: -60px;
    }

    .top_move_more{
        position: relative;
        top: -160px;
    }

    .top_move_more_260{
        position: relative;
        top: -260px;
    }

    @media screen and (max-width: 991px){
        .revenueAmountItem_left,
        .revenueAmountItem_right{
            float: none;
            width: 100%;
        }

        .statusRooms a span{
            float: left;
            width: auto;
        }

        .bounderChart.chartHorizontal{
            width: 1000px;
            padding-left: 30px;
        }

        .innerScroll{
            overflow-y: scroll;
        }

        .bounderChart.chartHorizontal500{
            width: 1000px;
        }

        .center_text_Chart{
            text-align: center;
        }
    }

    @media screen and (max-width: 767px){
        .revenueAmount{
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    .pieChart{
        width: 350px;
        height: 350px;
        position: relative;
    }

    @media screen and (max-width: 991px){
        .pieChart{
            width: 400px;
            height: 500px;
        }
    }

    @media screen and (max-width: 767px){
        .pieChart{
            width:  280px;
            height: 300px;
            margin: 0 auto;
        }
    }

    .line_height_200{
        line-height: 200px;
    }

    .chart {
        position: relative;
        display: inline-block;
        color: #999;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }

    .chart figcaption {
        padding: 50px 25px;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        line-height: 100px;
        color: #393939;
    }
      
    .javascript {
        max-width: 90px;
        max-height: 90px;
        top: 45px;
        left: 45px;
    }
    
    .javascript + svg .outer {
        stroke: #f0e040;
    }
      
      .chart svg {
        position: absolute;
        top: 0;
        left: 5px;
      }
      
      .outer {
        fill: transparent;
        stroke: #F59C03;
        stroke-width: 10;
        stroke-dasharray: 534;
        transition: stroke-dashoffset 1s;
        -webkit-animation-play-state: running;
        
        /* firefox bug fix - won't rotate at 90deg angles */
        -moz-transform: rotate(-89deg) translateX(-190px);
      }

      .revenueAmountItem_right figure{
          margin: 0;
      }
      
      
      /* END Circle colors and graphic positions */
      
      
      /* Set the initial values for the animation */
      .chart[data-percent='100'] .outer {
        stroke-dashoffset: 0;
        -webkit-animation: show100 2s;
        animation: show100 2s;
      }
      
      .chart[data-percent='75'] .outer {
        stroke-dashoffset: 133;
        -webkit-animation: show75 2s;
        animation: show75 2s;
      }
      
      .chart[data-percent='50'] .outer {
        stroke-dashoffset: 267;
        -webkit-animation: show50 2s;
        animation: show50 2s;
      }
      
      .chart[data-percent='25'] .outer {
        stroke-dashoffset: 401;
        -webkit-animation: show25 2s;
        animation: show25 2s;
      }
      /* END set initial animation values */
      
      /* Keyframes for the initial animation */
      @-webkit-keyframes show100 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 0;
        }
      }
      
      @keyframes show100 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 0;
        }
      }
      
      @-webkit-keyframes show75 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 134;
        }
      }
      
      @keyframes show75 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 124;
        }
      }
      
      @-webkit-keyframes show50 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 267;
        }
      }
      
      @keyframes show50 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 267;
        }
      }
      
      @-webkit-keyframes show25 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 401;
        }
      }
      
      @keyframes show25 {
        from {
          stroke-dashoffset: 537;
        }
        
        to {
          stroke-dashoffset: 401;
        }
      }
      /* END Keyframes for the initial animation */

    .abs_top_move{
        position: absolute;
        top: 50px;
        left: 20px;
        z-index: 10;
    }
    @media screen and (max-width: 991px){
        .line_height_200{
            line-height: normal;
        }
    }

    .revenueAmountItem_50{
        width: 50%;
        float: left;
    }

    @media screen and (max-width: 991px){
        .revenueAmountItem_50 {
            width: 100%;
            float: none;
        }
    }

    .titleWrapper.allInner h3{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 767px){
        .titleWrapper.allInner h3{
            display: block;
        }

        .selectOutPageLight{
            width: 100% !important;
        }

        .outerFigure{
            text-align: center;
        }
    }
`;
export default WithDirection(DataWrapper);
