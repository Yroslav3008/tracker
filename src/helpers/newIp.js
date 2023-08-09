export async function newIp(ip = '8.8.8.8') {
    const response = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=8e767d2c35fa43c1bc812a90fd757fa2&ip=${ip}`
    )
    return await response.json();
}