const HOST = "http://127.0.0.1:8891";

async function get(url: string): Promise<Response> {
    const resp = await fetch(`${HOST}${url}`);
    return resp;
}

async function post(url: string, data: any): Promise<Response> {
    const resp = await fetch(`${HOST}${url}`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return resp;
}
export { get, post };
