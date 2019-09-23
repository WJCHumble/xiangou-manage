import {
    Modal,
    Button
} from 'antd'
/**
 * 错误提示框
 */

 const { confirm } = Modal

 export default function showDeleteConfirm() {
    confirm({
        title: '您确定要删除这条记录吗?',
        // content: 'Some descriptions',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            console.log('OK')
        },
        onCancel() {
            console.log('Cancel')
        },
    })
 }