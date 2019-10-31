import {
    Modal
} from 'antd'

/**
 * 删除记录对话框
 */
 const { confirm } = Modal

 export function showDeleteConfirm() {
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

 /**
  * 退出系统对话框
  */
export function exitConfirm() {
    confirm({
        title: '提示',
        content: '确定退出吗？',
        okText: '确认',
        cancelText: '取消',
        onCancel: () => {
            console.log(111)
        },
        onOk: () => {
            console.log(222)
        }
    })
}