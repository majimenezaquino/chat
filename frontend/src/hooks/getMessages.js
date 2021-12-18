export const getMessages = async () =>{
    const resp =await fetch("https://majimenezaquino-chat.herokuapp.com/message")
    const data = await resp.json()
    return data
}
