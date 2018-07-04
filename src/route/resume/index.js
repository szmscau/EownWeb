import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header'
import BasicInfo from '../../components/basicInfo'
import Companies from '../../components/companies'
import Title from '../../components/title'
import Footer from '../../components/footer'
import './style.less'

const resume = {
    'basicInfo': {
        name: '沈志铭',
        description: '空欢喜，空悲切',
        sex: '男',
        university: '华南农业大学',
        major: '软件工程',
        education: '本科',
        graduateTime: '2017届毕业',
        phone: '18813752509',
        email: 'shenzhiming999@126.com'
    },
    'companyExe': [{
        title: '工作经历',
        dataList: [
            {
                name: '博道科技有限公司',
                type: "00",  // 00 为公司，11为项目
                time: '2015-07~2015-09',
                job: 'php实习生',
                location: '广东·广州',
                description: '担任php后台开发及部分前端页面ui实现，参与DNS域名注册系统，bootstrap + jquery + thinkphp + Mysql，'
                    + '负责用户资料管理模块，参加公司举办的每周篮球比赛。'
            },
            {
                name: '四川华迪科技技术有限公司',
                type: "00",  // 00 为公司，11为项目
                time: '2016-07~2016-10',
                job: 'java实习工程师',
                location: '四川·成都',
                description: '负责项目的需求分析，详细设计，编码设计及项目测试--使用SSM（spring，spring mvc，mybatis）进行项目开发。'
            },
            {
                name: '阿里巴巴',
                type: "00",  // 00 为公司，11为项目
                time: '2017-12~2018-04',
                job: '前端开发工程师',
                location: '浙江·杭州',
                description: '前端开发人员，参与新零售项目，使用dva脚手架、antv、viser(阿里图表库)、git进行项目开发'
            },
            {
                name: '中兴软创',
                type: "00",  // 00 为公司，11为项目
                time: '2017-05~至今',
                job: '前端开发工程师',
                location: '广东·广州',
                description: '前端开发人员，参与电信BSS3.0项目、电信掌上销H5项目，使用公司fish前端框架，react技术栈及个人搭建的脚手架开发'
            },
        ]
    },
    {
        title: '项目经验',
        dataList: [
            {
                name: '电信BSS3.0',
                type: "00",  // 00 为公司，11为项目
                time: '2017-05~2017-12',
                job: '前端开发工程师',
                location: '湖南·长沙·芙蓉区',
                description: '前端开发，使用公司fish框架（基于backbone、jq、handlebar、underscore）进行研发，负责页面开发、组件的更新维护，开发兼容IE（基于flash[替代2.0ActiveX版本]）、firefox（WebAPI）、chrome（WebAPI）的摄像头程序、基于canvas编写仿QQ截图的摄像头截图功能'
            },
            {
                name: '掌上销',
                type: "00",  // 00 为公司，11为项目
                time: '2018-04~至今',
                job: '前端开发工程师',
                location: '广东·广州',
                description: '前端开发负责人，基于dva（1.2.1）脚手架、antv-mobile（2.1.8"）进行掌上销 H5开发'
            },
            {
                name: 'New retail',
                type: "00",  // 00 为公司，11为项目
                time: '2017-12~2018-04',
                job: '前端开发工程师',
                location: '浙江·杭州·西溪园区',
                description: '阿里新零售，前端开发，基于dva（react、react-router-redux、react-router、redux-saga）脚手架、antv组件、viser图表库实现页面UI及业务逻辑'
            },
            {
                name: 'web-camera',
                type: "00",  // 00 为公司，11为项目
                time: '2018-01~2018-06',
                job: 'react版本改造',
                location: '广东·广州',
                link:'http://scaum.cn:1010',
                description: 'react版本 【web摄像头】|||不使用ES6语法 : 持chrome、firefox、IE(8~11) [支持cmd规范]  ,本地开发localhost无安全限制,服务器需https协议、firefox、IE无此约束。支持WebAPI浏览器使用video+webapi其他使用flash，建议使用firefox访问'
            },
            {
                name: 'EownWeb',
                type: "00",  // 00 为公司，11为项目
                time: '2018-02~至今',
                job: '个人网站',
                location: '广东·广州',
                link:'https://github.com/szmscau/EownWeb',
                description: '个人website开发，集成个人博客、简历及渣渣功能的站点，负责webpack构建|react|react-routrt（4.20）|react|react-saga(0.16.0)|less'
            },
        ]
    },
    ]
}
class Resume extends React.Component {
    render() { // Every react component has a render method.
        return (
            <div className="resume-container">
                <Title />
                <div className="resume-bg">
                    <div className='resume-content' >
                        <Header />
                        <BasicInfo basicInfo={resume.basicInfo} />
                        <Companies dataList={resume.companyExe} />
                    </div>
                    <div className="br-block" />
                </div>
                <Footer index={false} text={'resume'}/>
            </div>
        );
    }
}
export default Resume;