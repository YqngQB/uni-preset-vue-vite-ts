import Request from '@/api/index';

let request = new Request().http;

// 按需引入的请求头
export const getUserInfo = (data: string) => {
    return request<Array<string>>({
        url: 'order/user ',
        method: 'POST',
        data: data
    });
};
