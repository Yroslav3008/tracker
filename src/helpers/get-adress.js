export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_x2FikcKP9d4CKU0567WWDAZAPuT0f&ipAddress=${ip}`)
        
        
        return await response.json();
            
}