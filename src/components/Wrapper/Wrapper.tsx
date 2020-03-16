import React from 'react';
import { Box } from '@material-ui/core';
import { createClient, Provider } from 'urql';
import { useAsync } from 'react-use';
import RequestWrapper from '../RequestWrapper/RequestWrapper';
import { StateCan } from '../../StateContainer/StateContainer';

/**
 * 根据 token 获取 urql client 实例
 * @param token Github token
 */
const getClientWithToken = (token: string) => {
    return createClient({
        url: "https://api.github.com/graphql",
        fetchOptions: {
            headers: { authorization: token ? `Bearer ${token}` : '' },
        }
    })
}


const Wrapper = (props: any) => {
    const state = StateCan.useContainer();
    const { token } = state;

    // 处理 client 返回的异步， 使用 token 缓存
    const client = useAsync(async () => {
        const client = await getClientWithToken(token);
        return client
    }, [token]);
    
    if (client.value) {
        return (
            <Box component="div" m="10">
                <Provider value={client.value}>
                    <RequestWrapper />
                </Provider>
            </Box>
        )
    }
    return <div>No Repository</div>

}

export default Wrapper;
