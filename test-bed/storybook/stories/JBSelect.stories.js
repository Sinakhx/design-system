import React from 'react';
import JBSelect from '../../../react-component/jb-select/JBSelect';
import JBSelectStyleTest from '../stories/pages/JBSelectStyleTestPage';
import { action } from '@storybook/addon-actions';
import JBSelectDynamicList from './pages/JBSelectDynamicList';
export default {
    title: 'Example/JBSelect',
    component: JBSelect
};
const Template = (args) => <JBSelect label={args.label} onChange={args.onChange} optionList={args.optionList} getOptionTitle={args.getOptionTitle} getOptionValue={args.getOptionValue} onKeyup={args.onKeyup}></JBSelect>;
export const Normal = Template.bind({});
Normal.args = {
    label:'select from menu',
    optionList:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39'],
};
export const OptionObject = Template.bind({});
OptionObject.args = {
    label:'از منو انتخاب کنید',
    optionList:[{
        name:'peter',
        family:'hanan',
        userId:1
    },
    {
        name:'reza',
        family:'asadi',
        userId:2
    }
    ],
    getOptionTitle:(option)=>{
        return `${option.name} ${option.family}`;
    },
    getOptionValue:(option)=>{
        return option.userId;
    },
    onChange:(e)=>{action('onChange')(e.target.value);}
};
export const EventTest = Template.bind({});
EventTest.args = {
    ...Normal.args,
    onKeyup:()=>{alert('keyup');},
    onChange:()=>{alert('Changed');}
};
export const RTLTemplate = (args) => <div style={{direction:'rtl'}}><JBSelect label={args.label} onChange={args.onChange} optionList={args.optionList} getOptionTitle={args.getOptionTitle} getOptionValue={args.getOptionValue}></JBSelect></div>;
RTLTemplate.args = {
    label:'از منو انتخاب کنید',
    optionList:['1','2','3']
};
const StyleTestTemplate = (args) => <JBSelectStyleTest label={args.label}></JBSelectStyleTest>;
export const StyleTest = StyleTestTemplate.bind({});
StyleTest.args = {
    label:'از منو انتخاب کنید',
};
//when user type and want to change text
const DynamicListTemplate = (args) => <JBSelectDynamicList></JBSelectDynamicList>;
export const DynamicList = DynamicListTemplate.bind({});