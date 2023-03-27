import operate from '@/api/operate';
import type { I_RequestOptions, T_RequestResult } from '@/api/types';
import { E_subErrorTip } from '@/system-tip/error-tip';

export default class Request {
    http<T = any>(param: I_RequestOptions) {
        // 请求参数
        let { url, method, data, header, hideLoading } = param || {};
        //自定义请求头信息
        let basicHeader = {};
        //拼接完整请求地址（根据环境切换）
        let requestUrl = operate.api() + url;

        //加载圈
        if (!hideLoading) {
            uni.showLoading({
                title: '加载中...'
            }).then(() => {});
        }

        // 返回promise
        return new Promise((resolve, reject) => {
            // 请求
            uni.request({
                url: requestUrl,
                data: data,
                method: method,
                header: { ...basicHeader, ...header },
                // 接口调用成功得回调函数
                success: (response) => {
                    let res = response.data as T_RequestResult<T>;
                    if (response.statusCode && response.statusCode !== 200) {
                        uni.showToast({
                            title: res.message || E_subErrorTip['请求错误提示'],
                            icon: 'none'
                        }).then(() => {});
                        return Promise.reject(res);
                    }
                    // 判断返回状态码，根据状态码进行相应的操作
                    if (res.status !== 1 || res.message == '401' || res.message == '403') {
                        uni.showToast({
                            title: res.message || E_subErrorTip['请求错误提示'],
                            icon: 'none'
                        }).then(() => {});
                        // 接口请求异常
                        return Promise.reject(res);
                    }
                    // 将结果抛出
                    resolve(res);
                },
                //接口调用失败的回调函数,触发条件：网络请求失败，例如网络连接断开、DNS 解析失败等；请求超时；服务器返回状态码为非 200 的 HTTP 错误响应。
                fail: (response) => {
                    uni.showToast({
                        title: response.errMsg || E_subErrorTip['请求错误提示'],
                        icon: 'none'
                    }).then(() => {});
                    reject(response);
                },
                //接口调用结束的回调函数（调用成功、失败都会执行）
                complete() {
                    //隐藏加载
                    !hideLoading && uni.hideLoading();
                }
            });
        }) as Promise<T_RequestResult<T>>;
    }
}
